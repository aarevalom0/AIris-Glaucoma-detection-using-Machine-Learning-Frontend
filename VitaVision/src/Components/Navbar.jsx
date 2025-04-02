import { Link } from "react-router-dom";
import '../App.css'

const Navbar = () => {
  
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary" id ="navbar">
      <div className="container-fluid" id ="navbar">
        <Link className="navbar-brand d-flex align-items-center" to="/">
          <img src="./Images/Logo.png" alt="Logo" width="75" height="75" className="me-2" />
          <h1>VitaVision AI-ris</h1>
        </Link>
        <div className="d-flex" id ="navbar">
          <ul className="navbar-nav">
            <li className="nav-item"><Link className="nav-link" to="/">Inicio  </Link></li>
            <li className="nav-item"><Link className="nav-link" to="/servicios">Servicios  </Link></li>
            <li className="nav-item"><Link className="nav-link" to="/modelo">Diagnostico AI  </Link></li>
            <li className="nav-item"><Link className="nav-link" to="/equipo">Sobre Nosotros  </Link></li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
