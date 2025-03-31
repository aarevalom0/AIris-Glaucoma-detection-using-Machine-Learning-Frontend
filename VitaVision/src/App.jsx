import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import NuestroEquipo from "./Pages/Team";
import Servicios from "./Pages/Services";
import Model from "./Pages/Model";
import Navbar from "./Components/Navbar";
import './App.css'

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/servicios" element={<Servicios />} />
        <Route path="/equipo" element={<NuestroEquipo />} />
        <Route path="/modelo" element={<Model />} />
      </Routes>
    </Router>
  );
};

export default App;

