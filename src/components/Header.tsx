import React, { useState } from "react";

type HeaderProps = {
  lang: "fr" | "en";
  setLang: React.Dispatch<React.SetStateAction<"fr" | "en">>;
};

export default function Header({ lang, setLang }: HeaderProps) {
  const [open, setOpen] = useState(false);

  const linkBase =
    "px-4 py-2 rounded-full text-sm transition whitespace-nowrap";
  const linkIdle = "text-white/80 hover:text-white hover:bg-[#FFBF69]/10";

  const nav = {
    fr: { home: "Home", bio: "Bio", projects: "Projets", contact: "Contact" },
    en: {
      home: "Home",
      bio: "About",
      projects: "Projects",
      contact: "Contact",
    },
  }[lang];

  const close = () => setOpen(false);

  return (
    <header className="fixed top-4 left-0 right-0 z-50">
      <div className="mx-auto max-w-6xl px-4">
        <div className="relative flex items-center justify-between rounded-full border border-white/15 bg-oklch(55.1% 0.027 264.364) backdrop-blur-xs px-3 py-2 shadow-lg">
          <div className="pl-2 text-sm font-semibold tracking-wide text-white/90">
            Portfolio
          </div>

          {/* Desktop nav pas de scroll */}
          <nav className="hidden md:flex items-center gap-1">
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
            {/* Lang switch */}
            <button
              onClick={() => setLang((p) => (p === "fr" ? "en" : "fr"))}
              className="rounded-full bg-white/15 px-4 py-2 text-sm font-semibold text-white hover:bg-white/20 transition"
              aria-label="Toggle language"
            >
              {lang}
            </button>

            {/* Burger mobile */}
            <button
              onClick={() => setOpen((v) => !v)}
              className="md:hidden rounded-full bg-white/15 px-3 py-2 text-sm font-semibold text-white hover:bg-white/20 transition"
              aria-label="Open menu"
            >
              ☰
            </button>
          </div>

          {/* Menu dropdown mobile (pas de coulissas) */}
          {open && (
            <div className="absolute top-14 right-2 left-2 md:hidden rounded-2xl border border-white/15 bg-black/70 backdrop-blur-xl shadow-xl p-2">
              <a
                href="#home"
                onClick={close}
                className={`block ${linkBase} ${linkIdle}`}
              >
                {nav.home}
              </a>
              <a
                href="#about"
                onClick={close}
                className={`block ${linkBase} ${linkIdle}`}
              >
                {nav.bio}
              </a>
              <a
                href="#projects"
                onClick={close}
                className={`block ${linkBase} ${linkIdle}`}
              >
                {nav.projects}
              </a>
              <a
                href="#contact"
                onClick={close}
                className={`block ${linkBase} ${linkIdle}`}
              >
                {nav.contact}
              </a>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
