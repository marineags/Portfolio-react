import { Routes, Route } from "react-router-dom";
import Header from "./components/Header.tsx";
import Home from "./pages/home";
import Bio from "./pages/bio";

function App() {
  return (
    // couleurs fon
    <div className="min-h-screen bg-white text-white">
      {/* Header visible partout */}
      <Header />

      {/* Contenu des pages */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/bio" element={<Bio />} />
      </Routes>
    </div>
  );
}

export default App;
