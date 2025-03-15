import "./index.css";
import "./App.css";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import About from "./Components/About";
import Skills from "./Components/Skills";
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";
import Experience from "./Components/Experience";
import CodingStats from "./Components/CodingStats";
import "@fontsource/josefin-sans"; // Default weight (400)

function App() {
  return (
    <div className="bg-[#121212]" style={{ fontFamily: "Josefin Sans, sans-serif" }}>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/codingstats" element={<CodingStats />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;