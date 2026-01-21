import projects from "./data/projects.json";
import RepoCard from "./components/RepoCard";
import Header from "./components/Header";
import ContributionsLikeGitHub from "./components/GitHubHeatmap";

export default function App() {
  return (
    <div className="bg-black text-white">
      {/* NAVBAR */}
      <Header />

      {/* HOME -------------------------------------------------- */}
      <section id="home" className="relative min-h-screen overflow-hidden">
        <div className="absolute inset-0 bg-black/85 z-0" />

        <div className="relative flex min-h-screen justify-start p-20">
          <div className="text-white pt-40 flex flex-col gap-6">
            <h1 className="text-8xl font-['Audiowide']">
              M
              <span className="text-[#D56B77] drop-shadow-[0_0_12px_#DB979E]">
                a
              </span>
              rine{" "}
              <span className="text-[#D56B77] drop-shadow-[0_0_12px_#DB979E]">
                A
              </span>
              g
              <span className="text-[#D56B77] drop-shadow-[0_0_12px_#DB979E]">
                a
              </span>
              sse
            </h1>

            <p className="text-lg opacity-90">Développeuse Junior</p>

            <a href="#about">
              <button className="w-fit px-5 py-3 rounded-full bg-white/15 text-gray-400 font-semibold backdrop-blur hover:bg-[#3FD66B]/25 transition">
                Bio
              </button>
            </a>

            {/* CV */}
            <div className="fixed bottom-15 right-20 group z-50">
              <div className="absolute bottom-14 right-0 w-72 h-80 rounded-2xl bg-white/20 backdrop-blur-md p-4 opacity-0 translate-y-2 scale-95 transition-all duration-200 group-hover:opacity-35 group-hover:translate-y-0 group-hover:scale-100 pointer-events-none shadow-xl overflow-hidden">
                <p className="text-white text-sm mb-3">Curriculum vitae</p>
                <div className="h-[260px] w-full bg-white/20 rounded-md overflow-hidden">
                  <iframe
                    src="/Marine-Agasse-CV.pdf"
                    className="w-full h-full"
                    title="Aperçu CV"
                  />
                </div>
              </div>

              <a href="/Marine-Agasse-CV.pdf" target="_blank">
                <button className="px-5 py-3 rounded-full bg-white/15 text-gray-400 hover:bg-[#3FD66B]/25 transition">
                  CV
                </button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Projets ------------------------------------------------------*/}
      <section id="about" className="min-h-screen p-20">
        <h2 className="text-4xl font-bold mb-10">À propos</h2>
        <div className="h-[500px] rounded-xl  backdrop-blur">
          <div>
            <img className="h-30 " src="/profil/IMG_5854.heic" />
            <p>text</p>
          </div>
          <div className="">
            <img className="h-16" src="/icons/html.png" />
            <img className="h-16" src="/icons/css.png" />
            <img className="h-16" src="/icons/javascript.png" />
            <img className="h-16" src="/icons/react.png" />
          </div>
        </div>
      </section>

      {/* ABOUT ---------------------------------------------------------- */}
      <section id="projects" className="min-h-screen p-20">
        <h2 className="text-4xl font-bold mb-10">Projets</h2>

        <div className="rounded-2xl bg-black/70 backdrop-blur-xl border border-white/10 shadow-xl p-6 mb-12">
          <h3 className="text-xl font-semibold text-[#EFD3D6] mb-4">
            Mes projets GitHub
          </h3>

          <div className="max-h-[240px] overflow-y-auto pr-2">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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

        <ContributionsLikeGitHub username="marineags" />
      </section>

      {/* CONTACT ---------------------------------------------------------------*/}
      <section id="contact" className="min-h-screen p-20">
        <h2 className="text-4xl font-bold mb-10">Contact</h2>
        <div className="h-[300px] rounded-xl bg-white/10 backdrop-blur"></div>
      </section>
    </div>
  );
}
