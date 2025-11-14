import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="navbar">
      <Link to="/">Inicio</Link>
      <Link to="/category/electrónica">Electrónica</Link>
      <Link to="/category/ropa">Ropa</Link>
      <Link to="/category/hogar">Hogar</Link>
    </nav>
  );
};

export default NavBar;
