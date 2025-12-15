import { Link } from "react-router-dom";
import CartWidget from "./CartWidget.jsx";


const NavBar = () => (
<nav className="navbar">
<Link to="/">Tienda</Link>
<Link to="/category/remeras">Remeras</Link>
<Link to="/category/buzos">Buzos</Link>
<CartWidget />
</nav>
);


export default NavBar;