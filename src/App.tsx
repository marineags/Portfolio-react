import { useMemo, useState } from "react";
import projects from "./data/projects.json";
import RepoCard from "./components/RepoCard";
import Header from "./components/Header";
import ContributionsLikeGitHub from "./components/GitHubHeatmap";
import BandScene from "./components/BandScene";
import ContactSection from "./components/ContactSection.tsx";

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
      "Je passe une grande partie de mon temps à explorer la façon dont nous interagissons avec le web. En formation développement chez Ada Tech School, j’expérimente le front-end et le back-end à travers des projets concrets.",
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
      "I spend a large part of my time exploring how we interact with the web. Currently studying development at Ada Tech School, I experiment with front-end and back-end through concrete projects.",
  },
} as const;

type Lang = keyof typeof translations;

export default function App() {
  const [lang, setLang] = useState<Lang>("fr");
  const t = useMemo(() => translations[lang], [lang]);

  return (
    <div className="bg-black text-white">
      <Header lang={lang} setLang={setLang} />

      {/* HOME -------------------------------------------------- */}
      <section id="home" className="relative min-h-screen overflow-hidden">
        {/* Desktop: 3D en fond | Mobile: pas de 3D */}
        <div className="absolute inset-0 z-0 hidden sm:block">
          <BandScene />
        </div>

        {/* Mobile fallback: fond harmonieux */}
        <div className="absolute inset-0 z-0 sm:hidden bg-black" />

        {/* Overlay sombre (ne bloque pas la souris) */}
        <div className="absolute inset-0 z-10 bg-black/50 pointer-events-none" />

        {/* Contenu
            Desktop = identique (p-20, texte très grand)
            Mobile = layout harmonieux (centré, padding plus petit)
        */}
        <div className="relative z-20 min-h-screen pointer-events-none flex items-center sm:items-start px-6 py-24 sm:p-20">
          <div className="w-full sm:w-auto text-white flex flex-col gap-6 sm:pt-45">
            <h1 className="font-['Audiowide'] leading-none text-5xl sm:text-8xl">
              M
              <span className="text-[#FFBF69] drop-shadow-[0_0_10px_#FFE5B4]">
                a
              </span>
              rine{" "}
              <span className="text-[#FFBF69] drop-shadow-[0_0_10px_#FFE5B4]">
                A
              </span>
              g
              <span className="text-[#FFBF69] drop-shadow-[0_0_10px_#FFE5B4]">
                a
              </span>
              sse
            </h1>

            <p className="text-base sm:text-lg opacity-90">{t.juniorDev}</p>

            {/* Bio -> cliquable */}
            <a href="#about" className="pointer-events-auto w-fit">
              <button className="w-fit px-5 py-3 rounded-full bg-white/15 text-gray-200 font-semibold backdrop-blur hover:bg-[#FFBF69]/25 transition">
                {t.bioBtn}
              </button>
            </a>

            {/* CV bouton sur mobile (parce que le floating peut gêner/être masqué) */}
            <div className="pointer-events-auto sm:hidden">
              <a href="/Marine-Agasse-CV.pdf" target="_blank" rel="noreferrer">
                <button className="w-fit px-5 py-3 rounded-full bg-white/10 text-gray-200 font-semibold backdrop-blur hover:bg-white/15 transition border border-white/10">
                  CV
                </button>
              </a>
            </div>
          </div>
        </div>

        {/* CV (floating) — Desktop uniquement */}
        <div className="hidden sm:block fixed bottom-14 right-20 z-50 group pointer-events-auto">
          {/* Aperçu au hover */}
          <div
            className="absolute bottom-14 right-0 w-72 h-80 rounded-2xl bg-white/20 backdrop-blur-md p-4
            opacity-0 translate-y-2 scale-95 transition-all duration-200
            group-hover:opacity-35 group-hover:translate-y-0 group-hover:scale-100
            pointer-events-none shadow-xl overflow-hidden"
          >
            <p className="text-white text-sm mb-3">{t.cvLabel}</p>

            <div className="h-[260px] w-full bg-white/20 rounded-md overflow-hidden">
              {/* Note: pour un vrai aperçu, utilise une image (png/jpg) exportée de ton CV */}
              <img
                src="/Marine-Agasse-CV.pdf"
                alt={t.cvPreviewAlt}
                draggable="false"
                className="w-full h-full object-cover pointer-events-none select-none"
              />
            </div>
          </div>

          {/* Bouton CV */}
          <a href="/Marine-Agasse-CV.pdf" target="_blank" rel="noreferrer">
            <button className="px-5 py-3 rounded-full bg-white/15 text-gray-200 hover:bg-[#CCD5AE]/25 transition">
              CV
            </button>
          </a>
        </div>

        {/* Transition floue */}
        <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-b from-transparent to-black pointer-events-none z-20" />
      </section>

      {/* BIO ------------------------------------------------------ */}
      <section id="about" className="min-h-screen px-6 py-20 sm:px-20 sm:py-28">
        <h2 className="text-3xl sm:text-4xl font-bold mb-10 sm:mb-14 text-white">
          {t.aboutTitle}
        </h2>

        <div className="w-full pt-2 sm:pt-9 grid grid-cols-1 md:grid-cols-[260px_1fr] gap-8 sm:gap-10 items-start">
          {/* Photo */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-4 backdrop-blur-md shadow-xl">
            <img
              src="public/profil/Capture d’écran 2026-01-25 à 17.55.28.png"
              alt={t.profileAlt}
              className="h-72 sm:h-89 w-full object-cover rounded-2xl"
            />
          </div>

          {/* Colonne droite */}
          <div className="grid grid-rows-[auto_auto] gap-8 sm:gap-10">
            {/* Texte long */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 sm:p-8 backdrop-blur-md shadow-xl">
              <p className="text-[#EFD3D6] leading-relaxed text-base sm:text-lg">
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
                <p className="text-xs uppercase tracking-wider text-[#FFBF69] mb-3">
                  {t.teammateLabel}
                </p>

                <p className="text-[#E9EDC9] font-semibold mb-3">
                  {t.teammateName}
                </p>

                <p className="text-sm text-[#EFD3D6]/80 leading-relaxed">
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

        {/* Repos (un peu plus large sur mobile) */}
        <div className="rounded-2xl bg-black/70 backdrop-blur-xl border border-white/10 shadow-xl p-2 sm: mb-7">
          <h3 className="text-lg sm:text-xl font-semibold text-[#E9EDC9] mb-2">
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

        {/* Calendrier GitHub : élargi + swipe au doigt + scrollbar cachée */}
        <div className="rounded-2xl bg-black/70 backdrop-blur-xl border border-white/10 shadow-xl p-4 ">
          <div
            className="overflow-x-auto overflow-y-hidden touch-pan-x scroll-smooth no-scrollbar"
            style={{ WebkitOverflowScrolling: "touch" }}
          >
            {/* min-width force le swipe sur mobile, mais desktop reste normal */}
            <div className="min-w-[760px] md:min-w-0">
              <ContributionsLikeGitHub username="marineags" />
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT --------------------------------------------------------------- */}
      <section
        id="contact"
        className="relative h-[100svh] overflow-hidden px-6 py-16 sm:px-20 sm:py-20 flex flex-col"
      >
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-10">
          {t.contactTitle}
        </h2>

        {/* Zone principale (prend l’espace restant) */}
        <div className="flex-1 min-h-0">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 h-full">
            {/* ===== GAUCHE : 4 cartes 2x2 ===== */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 content-start">
              {/* LinkedIn */}
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
                  <p className="text-sm text-[#E9EDC9] italic group-hover:text-white transition">
                    LinkedIn
                  </p>
                </div>
              </a>

              {/* GitHub */}
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
                  <p className="text-sm text-[#FFE5B4] italic group-hover:text-white transition">
                    GitHub
                  </p>
                </div>
              </a>

              {/* Email */}
              <a href="mailto:agsmarine23@gmail.com" className="group">
                <div className="shadow-xl rounded-xl p-6 sm:p-8 w-full flex flex-col items-center justify-center bg-white/5 border border-white/10 hover:bg-white/10 transition">
                  <img
                    src="/icons/icons8-mail-48.png"
                    alt="Email"
                    className="h-12 mb-4"
                  />
                  <p className="text-sm text-[#FFE5B4] italic group-hover:text-white transition">
                    agsmarine23@gmail.com
                  </p>
                </div>
              </a>

              {/* Téléphone */}
              <a href="tel:+33638829826" className="group">
                <div className="shadow-xl rounded-xl p-6 sm:p-8 w-full flex flex-col items-center justify-center bg-white/5 border border-white/10 hover:bg-white/10 transition">
                  <img
                    src="/icons/icons8-telephone-50.png"
                    alt="Téléphone"
                    className="h-12 mb-4"
                  />
                  <p className="text-sm text-[#FFE5B4] italic group-hover:text-white transition">
                    06 38 82 98 26
                  </p>
                </div>
              </a>
            </div>

            {/* ===== DROITE : Formulaire ===== */}
            <div className="flex lg:justify-end">
              {/* Largeur alignée avec l’esthétique des cartes */}
              <div className="w-full max-w-xl">
                <ContactSection />
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="mt-10 border-t border-white/10 py-6 text-center text-[#FFE5B4]/30 text-sm">
          © {new Date().getFullYear()} Marine Agasse
        </footer>
      </section>
    </div>
  );
}
