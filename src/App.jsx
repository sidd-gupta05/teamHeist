import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Characters from "./pages/Characters";
import Spells from "./pages/Spells";
import Houses from "./pages/Houses";
import Potions from "./pages/Potions";
import SortingHat from "./pages/SortingHat";
import Creatures from "./pages/Creatures";
import Footer from "./components/Footer";
import { Analytics } from "@vercel/analytics/react";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-[#021516] flex flex-col">
        <Navbar />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/characters" element={<Characters />} />
            <Route path="/spells" element={<Spells />} />
            <Route path="/houses" element={<Houses />} />
            <Route path="/potions" element={<Potions />} />
            <Route path="/creatures" element={<Creatures />} />
            <Route path="/sorting-hat" element={<SortingHat />} />
          </Routes>
        </main>
        <Footer />
      </div>
      <Analytics />
    </Router>
  );
}

export default App;
