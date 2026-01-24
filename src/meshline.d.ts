import type { MeshLineGeometry, MeshLineMaterial } from "meshline";
import type { ReactThreeFiber } from "@react-three/fiber";

declare module "@react-three/fiber" {
  interface ThreeElements {
    meshLineGeometry: ReactThreeFiber.Object3DNode<
      MeshLineGeometry,
      typeof MeshLineGeometry
    >;
    meshLineMaterial: ReactThreeFiber.Object3DNode<
      MeshLineMaterial,
      typeof MeshLineMaterial
    >;
  }
}
