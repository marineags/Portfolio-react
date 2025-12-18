// Import de NavLink pour créer des liens vers les routes React Router
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <header className="border-b border-white/10 bg-[#E88866]/70 backdrop-blur">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="text-sm text-with font-semibold tracking-wide">
          Portfolio – Marine Agasse
        </div>
        <nav className="flex gap-2 text-sm">
          <NavLink
            to="/"
            className={({ isActive }) =>
              "px-4 py-2 rounded-xl transition " +
              (isActive
                ? "bg-[#E88080] text-white font-semibold"
                : "text-white hover:bg-[#B46363]/50")
            }
          >
            Accueil
          </NavLink>

          <NavLink
            to="/Bio"
            className={({ isActive }) =>
              "px-4 py-2 rounded-xl transition " +
              (isActive
                ? "bg-[#E88080] text-white font-semibold"
                : "text-sky-200 hover:bg-[#B46363]/50")
            }
          >
            Bio
          </NavLink>
        </nav>
      </div>
    </header>
  );
}

export default Header;
