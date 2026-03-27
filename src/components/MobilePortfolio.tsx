import ContactSection from "./ContactSection";
import ContributionsLikeGitHub from "./GitHubHeatmap";
import RepoCard from "./RepoCard";
import Cv from "./Cv";
import marinePng from "../assets/profil/marine.png";
import projects from "../data/projects.json";

type MobilePortfolioProps = {
  t: {
    juniorDev: string;
    bioBtn: string;
    aboutTitle: string;
    projectsTitle: string;
    githubProjectsTitle: string;
    contactTitle: string;
    teammateLabel: string;
    teammateName: string;
    teammateDesc: string;
    cvLabel: string;
    profileAlt: string;
    aboutText: string;
  };
  showCv: boolean;
  setShowCv: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function MobilePortfolio({
  t,
  showCv,
  setShowCv,
}: MobilePortfolioProps) {
  return (
    <div className="sm:hidden bg-black text-white pb-24">
      {/* HOME */}
      <section
        id="home"
        className="min-h-screen px-6 py-10 flex flex-col justify-center items-center text-center"
      >
        <div className="w-full max-w-md flex flex-col items-center gap-6">
          <h1 className="font-['Audiowide'] leading-none text-4xl">
            M
            <span className="text-[#FD6E8B] drop-shadow-[0_0_10px_#FD9BAE]">a</span>
            rine{" "}
            <span className="text-[#FD6E8B] drop-shadow-[0_0_10px_#FD9BAE]">A</span>
            g
            <span className="text-[#FD6E8B] drop-shadow-[0_0_10px_#FD9BAE]">a</span>
            sse
          </h1>

          <p className="text-sm opacity-90">{t.juniorDev}</p>

          <div className="flex flex-col gap-3 w-full">
            <a
              href="#about"
              className="w-full px-5 py-3 rounded-full bg-white/15 text-gray-200 font-semibold backdrop-blur text-center"
            >
              {t.bioBtn}
            </a>

          <a
  href="/marine-agasse-3.pdf"
  target="_blank"
  rel="noreferrer"
  className="w-full px-5 py-3 rounded-full bg-white/10 text-gray-200 font-semibold backdrop-blur border border-white/10 hover:bg-white/15 transition text-center block"
>
  CV
</a>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="px-6 py-12">
        <h2 className="text-2xl font-bold mb-6">{t.aboutTitle}</h2>

        <div className="flex flex-col gap-6">
          <div className="bg-white/5 border border-white/10 rounded-2xl p-4 backdrop-blur-md shadow-xl">
            <img
              src={marinePng}
              alt={t.profileAlt}
              className="h-[24rem] w-full object-cover rounded-2xl"
            />
          </div>

          <div className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-md shadow-xl">
            <p className="text-white leading-relaxed text-sm">{t.aboutText}</p>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-2xl px-6 py-8 backdrop-blur-md shadow-xl">
            <div className="grid grid-cols-2 gap-6 place-items-center w-full">
              <div className="flex flex-col items-center gap-2">
                <img src="/icons/html.png" className="h-10" alt="HTML" />
                <span className="text-sm text-[#EFD3D6]">HTML</span>
              </div>

              <div className="flex flex-col items-center gap-2">
                <img src="/icons/css.png" className="h-10" alt="CSS" />
                <span className="text-sm text-[#EFD3D6]">CSS</span>
              </div>

              <div className="flex flex-col items-center gap-2">
                <img src="/icons/javascript.png" className="h-10" alt="JavaScript" />
                <span className="text-sm text-[#EFD3D6]">JavaScript</span>
              </div>

              <div className="flex flex-col items-center gap-2">
                <img src="/icons/react.png" className="h-10" alt="React" />
                <span className="text-sm text-[#EFD3D6]">React</span>
              </div>

              <div className="flex flex-col items-center gap-2 col-span-2">
                <img src="/icons/figma.png" className="h-10" alt="Figma" />
                <span className="text-sm text-[#EFD3D6]">Figma</span>
              </div>
            </div>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-2xl px-6 py-8 backdrop-blur-md shadow-xl">
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
      </section>

      {/* PROJECTS */}
      <section id="projects" className="px-6 py-12">
        <h2 className="text-2xl font-bold mb-6">{t.projectsTitle}</h2>

        <div className="rounded-2xl bg-black/70 backdrop-blur-xl border border-white/10 shadow-xl p-4 mb-6">
          <h3 className="text-base font-semibold text-[#FD6E8B] mb-3">
            {t.githubProjectsTitle}
          </h3>

          <div className="flex flex-col gap-3">
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

        <div className="rounded-2xl bg-black/70 backdrop-blur-xl border border-white/10 shadow-xl p-4 overflow-x-auto">
          <div className="min-w-[760px]">
            <ContributionsLikeGitHub username="marineags" />
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="px-6 py-12">
        <h2 className="text-2xl font-bold text-white mb-6">{t.contactTitle}</h2>

        <div className="flex flex-col gap-4 mb-6">
          <a
            href="https://www.linkedin.com/in/marine-agasse-346886292/"
            target="_blank"
            rel="noreferrer"
            className="rounded-xl p-5 bg-white/5 border border-white/10 text-center"
          >
            LinkedIn
          </a>

          <a
            href="https://github.com/marineags"
            target="_blank"
            rel="noreferrer"
            className="rounded-xl p-5 bg-white/5 border border-white/10 text-center"
          >
            GitHub
          </a>

          <a
            href="mailto:agsmarine23@gmail.com"
            className="rounded-xl p-5 bg-white/5 border border-white/10 text-center break-all"
          >
            agsmarine23@gmail.com
          </a>

          <a
            href="tel:+33638829826"
            className="rounded-xl p-5 bg-white/5 border border-white/10 text-center"
          >
            06 38 82 98 26
          </a>
        </div>

        <ContactSection />
      </section>

      {/* NAVBAR MOBILE */}
      <nav className="fixed bottom-0 left-0 right-0 z-[90] border-t border-white/10 bg-black/80 backdrop-blur-xl">
        <div className="grid grid-cols-4 h-18">
          <a
            href="#home"
            className="flex flex-col items-center justify-center text-xs text-white/80 hover:text-[#FD6E8B] transition"
          >
            <span className="text-lg">⌂</span>
            Home
          </a>

          <a
            href="#about"
            className="flex flex-col items-center justify-center text-xs text-white/80 hover:text-[#FD6E8B] transition"
          >
            <span className="text-lg">◉</span>
            About
          </a>

          <a
            href="#projects"
            className="flex flex-col items-center justify-center text-xs text-white/80 hover:text-[#FD6E8B] transition"
          >
            <span className="text-lg">▣</span>
            Projects
          </a>

          <a
            href="#contact"
            className="flex flex-col items-center justify-center text-xs text-white/80 hover:text-[#FD6E8B] transition"
          >
            <span className="text-lg">✉</span>
            Contact
          </a>
        </div>
      </nav>

      {/* MODAL CV */}
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