export default function Header() {
  const linkBase =
    "px-4 py-2 rounded-full text-sm transition whitespace-nowrap";
  const linkIdle = "text-white/80 hover:text-white hover:bg-[#3FD66B]/10";

  return (
    <header className="sticky top-4 z-50">
      <div className="mx-auto max-w-6xl px-4">
        <div className="flex items-center justify-between rounded-full border border-white/15 bg-oklch(55.1% 0.027 264.364) backdrop-blur-xs px-3 py-2 shadow-lg">
          <div className="hidden sm:block pl-2 text-sm font-semibold tracking-wide text-white/90">
            Portfolio
          </div>

          <nav className="flex items-center gap-1">
            <a href="#home" className={`${linkBase} ${linkIdle}`}>
              Home
            </a>

            <a href="#about" className={`${linkBase} ${linkIdle}`}>
              Bio
            </a>

            <a href="#projects" className={`${linkBase} ${linkIdle}`}>
              Projets
            </a>

            <a href="#contact" className={`${linkBase} ${linkIdle}`}>
              Contact
            </a>
          </nav>

          <div className="flex items-center gap-2 pr-1">
            <button className="rounded-full bg-white/15 px-4 py-2 text-sm font-semibold text-white hover:bg-white/20 transition">
              fr
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
