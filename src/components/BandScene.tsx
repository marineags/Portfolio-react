/* eslint-disable react/prop-types */
/* eslint-disable react/no-unknown-property */

import * as THREE from "three";
import { useEffect, useRef, useState } from "react";
import { Canvas, extend, useThree, useFrame } from "@react-three/fiber";
import {
  useGLTF,
  useTexture,
  Environment,
  Lightformer,
} from "@react-three/drei";
import {
  BallCollider,
  CuboidCollider,
  Physics,
  RigidBody,
  useRopeJoint,
  useSphericalJoint,
} from "@react-three/rapier";
import { MeshLineGeometry, MeshLineMaterial } from "meshline";

extend({ MeshLineGeometry, MeshLineMaterial });

useGLTF.preload(
  "https://assets.vercel.com/image/upload/contentful/image/e5382hct74si/5huRVDzcoDwnbgrKUo1Lzs/53b6dd7d6b4ffcdbd338fa60265949e1/tag.glb",
);
useTexture.preload(
  "https://assets.vercel.com/image/upload/contentful/image/e5382hct74si/SOT1hmCesOHxEYxL7vkoZ/c57b29c85912047c414311723320c16b/band.jpg",
);

export default function BandScene() {
  return (
    <Canvas camera={{ position: [0, 0, 13], fov: 25 }}>
      <ambientLight intensity={Math.PI} />
      <Physics interpolate gravity={[0, -40, 0]} timeStep={1 / 60}>
        <Band />
      </Physics>

      <Environment background blur={0.75}>
        <color attach="background" args={["black"]} />
        <Lightformer
          intensity={2}
          color="white"
          position={[0, -1, 5]}
          rotation={[0, 0, Math.PI / 3]}
          scale={[100, 0.1, 1]}
        />
        <Lightformer
          intensity={3}
          color="white"
          position={[-1, -1, 1]}
          rotation={[0, 0, Math.PI / 3]}
          scale={[100, 0.1, 1]}
        />
        <Lightformer
          intensity={3}
          color="white"
          position={[1, 1, 1]}
          rotation={[0, 0, Math.PI / 3]}
          scale={[100, 0.1, 1]}
        />
        <Lightformer
          intensity={10}
          color="white"
          position={[-10, 0, 14]}
          rotation={[0, Math.PI / 2, Math.PI / 3]}
          scale={[100, 10, 1]}
        />
      </Environment>
    </Canvas>
  );
}

function Band({
  maxSpeed = 50,
  minSpeed = 10,
}: {
  maxSpeed?: number;
  minSpeed?: number;
}) {
  const band = useRef<any>(null),
    fixed = useRef<any>(null),
    j1 = useRef<any>(null),
    j2 = useRef<any>(null),
    j3 = useRef<any>(null),
    card = useRef<any>(null);
  const vec = new THREE.Vector3(),
    ang = new THREE.Vector3(),
    rot = new THREE.Vector3(),
    dir = new THREE.Vector3();
  const segmentProps = {
    canSleep: true,
    angularDamping: 2,
    linearDamping: 2,
  };

  const { nodes, materials }: any = useGLTF(
    "https://assets.vercel.com/image/upload/contentful/image/e5382hct74si/5huRVDzcoDwnbgrKUo1Lzs/53b6dd7d6b4ffcdbd338fa60265949e1/tag.glb",
  );
  useEffect(() => {
    const m = materials?.metal;
    if (!m) return;

    // Réglage acier naturel
    m.color.set("#b7bcc2"); // gris acier
    m.metalness = 1;
    m.roughness = 0.35; // plus rugueux = moins miroir
    m.needsUpdate = true;
  }, [materials]);

  const texture = useTexture("/textures/my-band.png");
  const cardTexture = useTexture("/textures/ma-carte.png");
  const backTexture = useTexture("/textures/ma-carte-back.png");

  useEffect(() => {
    if (!cardTexture || !backTexture) return;

    [cardTexture, backTexture].forEach((t) => {
      t.flipY = false;
      t.colorSpace = THREE.SRGBColorSpace;

      // 🔧 Fix UV demi-carte → recentre
      t.wrapS = t.wrapT = THREE.RepeatWrapping;
      t.repeat.set(2, 1);
      t.offset.set(0, 0);

      // Netteté
      t.anisotropy = 16;
      t.needsUpdate = true;
    });
  }, [cardTexture, backTexture]);

  const { width, height } = useThree((state) => state.size);
  const [curve] = useState(
    () =>
      new THREE.CatmullRomCurve3([
        new THREE.Vector3(),
        new THREE.Vector3(),
        new THREE.Vector3(),
        new THREE.Vector3(),
      ]),
  );
  const [dragged, drag] = useState<any>(false);
  const [hovered, hover] = useState(false);

  useRopeJoint(fixed, j1, [[0, 0, 0], [0, 0, 0], 1]);
  useRopeJoint(j1, j2, [[0, 0, 0], [0, 0, 0], 1]);
  useRopeJoint(j2, j3, [[0, 0, 0], [0, 0, 0], 1]);
  useSphericalJoint(j3, card, [
    [0, 0, 0],
    [0, 1.45, 0],
  ]);

  useEffect(() => {
    if (hovered) {
      document.body.style.cursor = dragged ? "grabbing" : "grab";
      return () => void (document.body.style.cursor = "auto");
    }
  }, [hovered, dragged]);

  useFrame((state, delta) => {
    if (dragged) {
      vec.set(state.pointer.x, state.pointer.y, 0.5).unproject(state.camera);
      dir.copy(vec).sub(state.camera.position).normalize();
      vec.add(dir.multiplyScalar(state.camera.position.length()));

      [card, j1, j2, j3, fixed].forEach((ref) => ref.current?.wakeUp());
      card.current?.setNextKinematicTranslation({
        x: vec.x - dragged.x,
        y: vec.y - dragged.y,
        z: vec.z - dragged.z,
      });
    }

    if (fixed.current) {
      [j1, j2].forEach((ref) => {
        if (!ref.current.lerped)
          ref.current.lerped = new THREE.Vector3().copy(
            ref.current.translation(),
          );
        const clampedDistance = Math.max(
          0.1,
          Math.min(1, ref.current.lerped.distanceTo(ref.current.translation())),
        );
        ref.current.lerped.lerp(
          ref.current.translation(),
          delta * (minSpeed + clampedDistance * (maxSpeed - minSpeed)),
        );
      });

      curve.points[0].copy(j3.current.translation());
      curve.points[1].copy(j2.current.lerped);
      curve.points[2].copy(j1.current.lerped);
      curve.points[3].copy(fixed.current.translation());

      band.current.geometry.setPoints(curve.getPoints(32));

      ang.copy(card.current.angvel());
      rot.copy(card.current.rotation());
      card.current.setAngvel({ x: ang.x, y: ang.y - rot.y * 0.25, z: ang.z });
    }
  });

  curve.curveType = "chordal";

  return (
    <>
      <group position={[2.2, 4, 3]}>
        <RigidBody
          ref={fixed}
          {...segmentProps}
          type="fixed"
          colliders={false}
        />

        <RigidBody
          position={[0.5, 0, 0]}
          ref={j1}
          {...segmentProps}
          type="dynamic"
          colliders={false}
        >
          <BallCollider args={[0.1]} />
        </RigidBody>

        <RigidBody
          position={[1, 0, 0]}
          ref={j2}
          {...segmentProps}
          type="dynamic"
          colliders={false}
        >
          <BallCollider args={[0.1]} />
        </RigidBody>

        <RigidBody
          position={[1.5, 0, 0]}
          ref={j3}
          {...segmentProps}
          type="dynamic"
          colliders={false}
        >
          <BallCollider args={[0.1]} />
        </RigidBody>

        <RigidBody
          position={[2, 0, 0]}
          ref={card}
          {...segmentProps}
          colliders={false}
          type={dragged ? "kinematicPosition" : "dynamic"}
        >
          <CuboidCollider args={[0.8, 1.125, 0.01]} />

          <group
            scale={2.25}
            position={[0, -1.2, -0.05]}
            onPointerOver={() => hover(true)}
            onPointerOut={() => hover(false)}
            onPointerUp={(e: any) => (
              e.target.releasePointerCapture(e.pointerId),
              drag(false)
            )}
            onPointerDown={(e: any) =>
              e.target.setPointerCapture(e.pointerId) ||
              drag(
                new THREE.Vector3()
                  .copy(e.point)
                  .sub(vec.copy(card.current.translation())),
              )
            }
          >
            {/* RECTO */}
            <mesh geometry={nodes.card.geometry}>
              <meshPhysicalMaterial
                map={cardTexture}
                clearcoat={1}
                roughness={0.3}
                metalness={0.5}
                side={THREE.FrontSide}
              />
            </mesh>

            {/* VERSO (même géométrie, tournée) */}
            <mesh geometry={nodes.card.geometry} rotation={[0, Math.PI, 0]}>
              <meshPhysicalMaterial
                map={backTexture}
                clearcoat={1}
                roughness={0.3}
                metalness={0.5}
                side={THREE.FrontSide}
              />
            </mesh>

            <mesh geometry={nodes.clip.geometry}>
              <meshPhysicalMaterial
                color="#cfd3d6"
                metalness={1}
                roughness={0.15}
                clearcoat={1}
                reflectivity={1}
              />
            </mesh>

            <mesh geometry={nodes.clamp.geometry}>
              <meshPhysicalMaterial
                color="#cfd3d6"
                metalness={1}
                roughness={0.15}
                clearcoat={1}
                reflectivity={1}
              />
            </mesh>
          </group>
        </RigidBody>
      </group>

      <mesh ref={band}>
        <meshLineGeometry />
        <meshLineMaterial
          color="#656D4A" // ton vert olive
          depthTest={false}
          resolution={[width, height]}
          useMap
          map={texture}
          repeat={[-4, 1]}
          lineWidth={1}
          roughness={0.6}
          metalness={0}
        />
      </mesh>
    </>
  );
}
