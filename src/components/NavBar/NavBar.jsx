import { Link } from "react-router-dom";
import CartWidget from "./CartWidget.jsx";
import "./NavBar.css";

const NavBar = () => {
  return (
    <nav className="navbar">
      <Link to="/" className="logo">Mi E-commerce</Link>

      <ul className="nav-links">
        <li><Link to="/categories/remeras">Remeras</Link></li>
        <li><Link to="/categories/buzos">Buzos</Link></li>
      </ul>

      <CartWidget />
    </nav>
  );
};

export default NavBar;