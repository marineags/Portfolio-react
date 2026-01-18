import { NavLink } from "react-router-dom";

export default function Home() {
  return (
    <section className="fixed inset-0 overflow-hidden">
      {/* Vidéo background */}
      <video
        className="absolute scale-110  inset-0 h-full w-full object-cover"
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
      >
        <source src="/hero.mp4" type="video/mp4" />
      </video>

      {/* Overlay pour lisibilité */}
      <div className="absolute inset-0 bg-black/85" />

      {/* Contenu */}
      <div className="relative flex h-full justify-start p-20">
        <div className="text-white pt-40 flex flex-col gap-6">
          {/* H1 */}
          <h1 className="text-8xl font-['Audiowide']">
            M
            <span className="text-[#3FD66B] drop-shadow-[0_0_12px_#3FD66B]">
              a
            </span>
            rine{" "}
            <span className="text-[#3FD66B] drop-shadow-[0_0_12px_#3FD66B]">
              A
            </span>
            g
            <span className="text-[#3FD66B] drop-shadow-[0_0_12px_#3FD66B]">
              a
            </span>
            sse
          </h1>

          {/* Texte */}
          <p className="text-lg opacity-90">Développeuse Junior</p>

          {/* Bouton */}
          <NavLink to="/bio">
            <button
              className="w-fit px-5 py-3 rounded-full
        bg-white/15 text-white font-semibold
         backdrop-blur
        hover:bg-[#3FD66B]/25 transition
      "
            >
              Bio
            </button>
          </NavLink>
          <div className="fixed bottom-15 right-20 group z-50">
            {/* Tooltip */}
            <div
              className="
  absolute bottom-14 right-0
  w-72 h-80
  rounded-2xl
  bg-white/20 backdrop-blur-md
  
  p-4
  opacity-0 translate-y-2 scale-95
  transition-all duration-200
  group-hover:opacity-35 group-hover:translate-y-0 group-hover:scale-100
  pointer-events-none
  shadow-xl
  overflow-hidden
"
            >
              {/* Titre */}
              <p className="text-white text-sm mb-3">Curriculum vitae</p>

              {/* Preview */}
              <div className="h-[260px] w-full flex justify-center items-center bg-white/20 rounded-md overflow-hidden">
                <img
                  src="/Marine-Agasse-CV.pdf"
                  alt="Aperçu CV"
                  className="w-full h-full object-contain "
                />
              </div>
            </div>

            {/* Bouton */}
            <a href="/Marine-Agasse-CV.pdf" target="_blank" rel="noreferrer">
              <button
                className="
        px-5 py-3 rounded-full
        bg-white/15 text-gray-400 
        hover:bg-[#3FD66B]/25 transition
      "
              >
                CV
              </button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
