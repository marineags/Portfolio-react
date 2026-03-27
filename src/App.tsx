import { useMemo, useState, useEffect } from "react";
import projects from "./data/projects.json";
import RepoCard from "./components/RepoCard";
import Header from "./components/Header";
import ContributionsLikeGitHub from "./components/GitHubHeatmap";
import BandScene from "./components/BandScene";
import ContactSection from "./components/ContactSection";
import marinePng from "./assets/profil/marine.png";
import Cv from "./components/Cv";

const translations = {
  fr: {
    juniorDev: "Développeuse Junior",
    bioBtn: "Bio",
    aboutTitle: "À propos",
    projectsTitle: "Projets",
    githubProjectsTitle: "Mes projets GitHub",
    contactTitle: "Contact",
    teammateLabel: "Coéquipier",
    teammateName: "Assistant IA (ChatGPT)",
    teammateDesc:
      "Outil que j’utilise pour explorer des solutions, itérer rapidement et approfondir ma compréhension du code.",
    cvLabel: "Curriculum vitae",
    cvPreviewAlt: "Aperçu CV",
    profileAlt: "Marine",
    aboutText:
      "Je passe une grande partie de mon temps à explorer la manière dont nous interagissons avec le web. Après plusieurs expériences dans le commerce, j’ai choisi de me reconvertir vers le développement, un domaine qui me permet d’apprendre en continu et de créer du concret. Actuellement en formation chez Ada Tech School, j’explore aussi bien le front-end que le back-end à travers des projets pratiques.",
  },
  en: {
    juniorDev: "Junior Developer",
    bioBtn: "About",
    aboutTitle: "About",
    projectsTitle: "Projects",
    githubProjectsTitle: "My GitHub projects",
    contactTitle: "Contact",
    teammateLabel: "Teammate",
    teammateName: "AI Assistant (ChatGPT)",
    teammateDesc:
      "A tool I use to explore solutions, iterate quickly, and deepen my understanding of code.",
    cvLabel: "Resume",
    cvPreviewAlt: "Resume preview",
    profileAlt: "Marine",
    aboutText:
      "I spend a large part of my time exploring how we interact with the web. After several experiences in the retail sector, I chose to retrain in development, a field that allows me to learn continuously and build tangible solutions. Currently training at Ada Tech School, I explore both front-end and back-end development through hands-on projects.",
  },
} as const;

type Lang = keyof typeof translations;

export default function App() {
  const [showCv, setShowCv] = useState(false);
  const [lang, setLang] = useState<Lang>("fr");
  const t = useMemo(() => translations[lang], [lang]);

  useEffect(() => {
    document.body.style.overflow = showCv ? "hidden" : "auto";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [showCv]);

  return (
    <div className="bg-black text-white">
      <Header lang={lang} setLang={setLang} />

      {/* HOME -------------------------------------------------- */}
      <section id="home" className="relative min-h-screen overflow-hidden">
        {/* Desktop: 3D en fond | Mobile: pas de 3D */}
        <div className="absolute inset-0 z-0 hidden sm:block">
          <BandScene />
        </div>

        {/* Mobile fallback */}
        <div className="absolute inset-0 z-0 sm:hidden bg-black" />

        {/* Overlay sombre */}
        <div className="absolute inset-0 z-10 bg-black/50 pointer-events-none" />

        {/* Contenu hero */}
        <div className="relative z-20 min-h-screen pointer-events-none flex items-center sm:items-start px-6 py-24 sm:p-20">
          <div className="w-full sm:w-auto text-white flex flex-col gap-6 sm:pt-[11.25rem]">
            <h1 className="font-['Audiowide'] leading-none text-5xl sm:text-8xl">
              M
              <span className="text-[#FD6E8B] drop-shadow-[0_0_10px_#FD9BAE]">
                a
              </span>
              rine{" "}
              <span className="text-[#FD6E8B] drop-shadow-[0_0_10px_#FD9BAE]">
                A
              </span>
              g
              <span className="text-[#FD6E8B] drop-shadow-[0_0_10px_#FD9BAE]">
                a
              </span>
              sse
            </h1>

            <p className="text-base sm:text-lg opacity-90">{t.juniorDev}</p>

            {/* Bouton Bio */}
            <a href="#about" className="pointer-events-auto w-fit">
              <button className="w-fit px-5 py-3 rounded-full bg-white/15 text-gray-200 font-semibold backdrop-blur hover:bg-[#FD6E8B]/25 transition">
                {t.bioBtn}
              </button>
            </a>

            {/* CV sur mobile uniquement */}
            <div className="pointer-events-auto sm:hidden">
              <button
                onClick={() => setShowCv(true)}
                className="w-fit px-5 py-3 rounded-full bg-white/10 text-gray-200 font-semibold backdrop-blur hover:bg-white/15 transition border border-white/10"
              >
                CV
              </button>
            </div>
          </div>
        </div>

        {/* CV floating desktop uniquement */}
        <div className="hidden sm:block fixed bottom-14 right-20 z-50 group pointer-events-auto">
          {/* Preview au hover */}
          <div
            className="absolute bottom-14 right-0 rounded-2xl bg-white/20 backdrop-blur-md px-4 py-2
            opacity-0 translate-y-2 scale-95 transition-all duration-200
            group-hover:opacity-100 group-hover:translate-y-0 group-hover:scale-100"
          >
            <p className="text-white text-sm whitespace-nowrap">{t.cvLabel}</p>
          </div>

          {/* Bouton desktop */}
          <button
            onClick={() => setShowCv(true)}
            className="px-5 py-3 rounded-full bg-white/15 text-gray-200 font-semibold backdrop-blur hover:bg-[#FD6E8B]/25 transition"
          >
            CV
          </button>
        </div>

        {/* Transition floue */}
        <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-b from-transparent to-black pointer-events-none z-20" />
      </section>

      {/* ABOUT ------------------------------------------------------ */}
      <section id="about" className="min-h-screen px-6 py-20 sm:px-20 sm:py-28">
        <h2 className="text-3xl sm:text-4xl font-bold mb-10 sm:mb-14 text-white">
          {t.aboutTitle}
        </h2>

        <div className="w-full pt-2 sm:pt-9 grid grid-cols-1 md:grid-cols-[260px_1fr] gap-8 sm:gap-10 items-start">
          {/* Photo */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-4 backdrop-blur-md shadow-xl">
            <img
              src={marinePng}
              alt={t.profileAlt}
              className="h-[22.5rem] sm:h-[24.25rem] w-full object-cover rounded-2xl"
            />
          </div>

          {/* Colonne droite */}
          <div className="grid grid-rows-[auto_auto] gap-8 sm:gap-10">
            {/* Texte */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 sm:p-8 backdrop-blur-md shadow-xl">
              <p className="text-white leading-relaxed text-base sm:text-lg">
                {t.aboutText}
              </p>
            </div>

            {/* Stack + Coéquipier */}
            <div className="grid grid-cols-1 md:grid-cols-[1fr_320px] gap-8 sm:gap-10">
              {/* Stack */}
              <div className="bg-white/5 border border-white/10 rounded-2xl px-6 sm:px-10 py-8 backdrop-blur-md shadow-xl min-h-[160px] flex items-center justify-center">
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 place-items-center w-full">
                  <div className="flex flex-col items-center gap-2">
                    <img src="/icons/html.png" className="h-12" alt="HTML" />
                    <span className="text-sm text-[#EFD3D6]">HTML</span>
                  </div>

                  <div className="flex flex-col items-center gap-2">
                    <img src="/icons/css.png" className="h-12" alt="CSS" />
                    <span className="text-sm text-[#EFD3D6]">CSS</span>
                  </div>

                  <div className="flex flex-col items-center gap-2">
                    <img
                      src="/icons/javascript.png"
                      className="h-12"
                      alt="JavaScript"
                    />
                    <span className="text-sm text-[#EFD3D6]">JavaScript</span>
                  </div>

                  <div className="flex flex-col items-center gap-2">
                    <img src="/icons/react.png" className="h-12" alt="React" />
                    <span className="text-sm text-[#EFD3D6]">React</span>
                  </div>

                  <div className="flex flex-col items-center gap-2">
                    <img src="/icons/figma.png" className="h-12" alt="Figma" />
                    <span className="text-sm text-[#EFD3D6]">Figma</span>
                  </div>
                </div>
              </div>

              {/* Coéquipier */}
              <div className="bg-white/5 border border-white/10 rounded-2xl px-6 sm:px-8 py-8 backdrop-blur-md shadow-xl">
                <p className="text-xs uppercase tracking-wider text-[#FD6E8B] mb-3">
                  {t.teammateLabel}
                </p>

                <p className="text-[#FDAFBF] font-semibold mb-3">
                  {t.teammateName}
                </p>

                <p className="text-sm text-[#FDAFBF]/70 leading-relaxed">
                  {t.teammateDesc}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROJECTS ---------------------------------------------------------- */}
      <section id="projects" className="min-h-screen px-6 py-20 sm:p-20">
        <h2 className="text-3xl sm:text-4xl font-bold mb-8 sm:mb-10">
          {t.projectsTitle}
        </h2>

        <div className="rounded-2xl bg-black/70 backdrop-blur-xl border border-white/10 shadow-xl p-4 mb-7">
          <h3 className="text-lg sm:text-xl font-semibold text-[#FD6E8B] mb-2">
            {t.githubProjectsTitle}
          </h3>

          <div className="max-h-[260px] sm:max-h-[240px] overflow-y-auto pr-2">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
              {projects.map((project) => (
                <RepoCard
                  key={project.url}
                  name={project.name}
                  description={project.description}
                  language={project.language}
                  url={project.url}
                />
              ))}
            </div>
          </div>
        </div>

        <div className="rounded-2xl bg-black/70 backdrop-blur-xl border border-white/10 shadow-xl p-4">
          <div
            className="overflow-x-auto overflow-y-hidden touch-pan-x scroll-smooth no-scrollbar"
            style={{ WebkitOverflowScrolling: "touch" }}
          >
            <div className="min-w-[760px] md:min-w-0">
              <ContributionsLikeGitHub username="marineags" />
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT --------------------------------------------------------------- */}
      <section
        id="contact"
        className="relative min-h-screen px-6 py-16 sm:px-20 sm:py-20 flex flex-col"
      >
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-10">
          {t.contactTitle}
        </h2>

        <div className="flex-1 min-h-0">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 h-full">
            {/* Cartes */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 content-start">
              <a
                href="https://www.linkedin.com/in/marine-agasse-346886292/"
                target="_blank"
                rel="noreferrer"
                className="group"
              >
                <div className="shadow-xl rounded-xl p-6 sm:p-8 w-full flex flex-col items-center justify-center bg-white/5 border border-white/10 hover:bg-white/10 transition">
                  <img
                    src="/icons/icons8-linkedin-50.png"
                    alt="LinkedIn"
                    className="h-12 mb-4"
                  />
                  <p className="text-sm text-[#FDAFBF] italic group-hover:text-white transition">
                    LinkedIn
                  </p>
                </div>
              </a>

              <a
                href="https://github.com/marineags"
                target="_blank"
                rel="noreferrer"
                className="group"
              >
                <div className="shadow-xl rounded-xl p-6 sm:p-8 w-full flex flex-col items-center justify-center bg-white/5 border border-white/10 hover:bg-white/10 transition">
                  <img
                    src="/icons/icons8-github-50.png"
                    alt="GitHub"
                    className="h-12 mb-4"
                  />
                  <p className="text-sm text-[#FDAFBF] italic group-hover:text-white transition">
                    GitHub
                  </p>
                </div>
              </a>

              <a href="mailto:agsmarine23@gmail.com" className="group">
                <div className="shadow-xl rounded-xl p-6 sm:p-8 w-full flex flex-col items-center justify-center bg-white/5 border border-white/10 hover:bg-white/10 transition">
                  <img
                    src="/icons/icons8-mail-48.png"
                    alt="Email"
                    className="h-12 mb-4"
                  />
                  <p className="text-sm text-[#FDAFBF] italic group-hover:text-white transition break-all text-center">
                    agsmarine23@gmail.com
                  </p>
                </div>
              </a>

              <a href="tel:+33638829826" className="group">
                <div className="shadow-xl rounded-xl p-6 sm:p-8 w-full flex flex-col items-center justify-center bg-white/5 border border-white/10 hover:bg-white/10 transition">
                  <img
                    src="/icons/icons8-telephone-50.png"
                    alt="Téléphone"
                    className="h-12 mb-4"
                  />
                  <p className="text-sm text-[#FDAFBF] italic group-hover:text-white transition">
                    06 38 82 98 26
                  </p>
                </div>
              </a>
            </div>

            {/* Formulaire */}
            <div className="flex lg:justify-end">
              <div className="w-full max-w-xl">
                <ContactSection />
              </div>
            </div>
          </div>
        </div>

        <footer className="mt-10 border-t border-white/10 py-6 text-center text-[#FD6E8B]/30 text-sm">
          © {new Date().getFullYear()} Marine Agasse
        </footer>
      </section>

      {/* MODAL CV --------------------------------------------------------------- */}
      {showCv && (
        <div className="fixed inset-0 z-[100] bg-black/70 backdrop-blur-sm">
          <button
            onClick={() => setShowCv(false)}
            className="fixed top-4 right-4 z-[110] rounded-full bg-white text-black w-10 h-10 flex items-center justify-center shadow-lg"
          >
            ✕
          </button>

          <div className="h-screen overflow-y-auto flex justify-center p-4">
            <Cv />
          </div>
        </div>
      )}
    </div>
  );
}