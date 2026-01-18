import { Routes, Route } from "react-router-dom";
import Header from "./components/Header.tsx";
import Home from "./pages/home";
import Bio from "./pages/bio";
import Projets from "./pages/projets";

function App() {
  return (
    // couleurs fon
    <div className="min-h-screen bg-black text-white">
      {/* Header visible partout */}
      <Header />

      {/* Contenu des pages */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/bio" element={<Bio />} />
        <Route path="/projets" element={<Projets />} />
      </Routes>
    </div>
  );
}

export default App;
