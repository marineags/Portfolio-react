type HeaderProps = {
  lang: "fr" | "en";
  setLang: React.Dispatch<React.SetStateAction<"fr" | "en">>;
};

export default function Header({ lang, setLang }: HeaderProps) {
  const linkBase =
    "px-4 py-2 rounded-full text-sm transition whitespace-nowrap";
  const linkIdle = "text-white/80 hover:text-white hover:bg-[#CCD5AE]/10";

  const nav = {
    fr: {
      home: "accueil",
      bio: "Bio",
      projects: "Projets",
      contact: "Contact",
    },
    en: {
      home: "Home",
      bio: "About",
      projects: "Projects",
      contact: "Contact",
    },
  }[lang];

  return (
    <header className="fixed top-4 left-0 right-0 z-50">
      <div className="mx-auto max-w-6xl px-4">
        <div className="flex items-center justify-between rounded-full border border-white/15 bg-oklch(55.1% 0.027 264.364) backdrop-blur-xs px-3 py-2 shadow-lg">
          <div className="hidden sm:block pl-2 text-sm font-semibold tracking-wide text-white/90">
            Portfolio
          </div>

          <nav className="flex items-center gap-1">
            <a href="#home" className={`${linkBase} ${linkIdle}`}>
              {nav.home}
            </a>
            <a href="#about" className={`${linkBase} ${linkIdle}`}>
              {nav.bio}
            </a>
            <a href="#projects" className={`${linkBase} ${linkIdle}`}>
              {nav.projects}
            </a>
            <a href="#contact" className={`${linkBase} ${linkIdle}`}>
              {nav.contact}
            </a>
          </nav>

          <div className="flex items-center gap-2 pr-1">
            <button
              onClick={() => setLang((prev) => (prev === "fr" ? "en" : "fr"))}
              className="rounded-full bg-white/15 px-4 py-2 text-sm font-semibold text-white hover:bg-white/20 transition"
            >
              {lang}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
