import { NavLink } from "react-router-dom";

function Header() {
  const linkBase =
    "px-4 py-2 rounded-full text-sm transition whitespace-nowrap";
  const linkActive = "text-white bg-white/15";
  const linkIdle = "text-white/80 hover:text-white hover:bg-white/10";

  return (
    <header className="sticky top-4 z-50">
      <div className="mx-auto max-w-6xl px-4">
        {/* Barre arrondie */}
        <div className="flex items-center justify-between rounded-full border border-white/15 bg-oklch(55.1% 0.027 264.364) backdrop-blur-xl px-3 py-2 shadow-lg">
          {/* Left (logo / titre) */}
          <div className="hidden sm:block pl-2 text-sm font-semibold tracking-wide text-white/90">
            Portfolio - Marine
          </div>

          {/* Center nav */}
          <nav className="flex items-center gap-1">
            <NavLink
              to="/"
              end
              className={({ isActive }) =>
                `${linkBase} ${isActive ? linkActive : linkIdle}`
              }
            >
              Home
            </NavLink>

            <NavLink
              to="/bio"
              className={({ isActive }) =>
                `${linkBase} ${isActive ? linkActive : linkIdle}`
              }
            >
              Bio
            </NavLink>

            <NavLink
              to="/projets"
              className={({ isActive }) =>
                `${linkBase} ${isActive ? linkActive : linkIdle}`
              }
            >
              Projets
            </NavLink>

            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `${linkBase} ${isActive ? linkActive : linkIdle}`
              }
            >
              contact
            </NavLink>
          </nav>

          {/* Right buttons */}
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

export default Header;
