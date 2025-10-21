// src/components/NavBar.jsx
import CartWidget from "./CartWidget";

const NavBar = () => {
  return (
    <nav style={styles.nav}>
      <div style={styles.logo}>🛒 HG Mates</div>
      <ul style={styles.navLinks}>
        <li><a href="#">Inicio</a></li>
        <li><a href="#">Productos</a></li>
        <li><a href="#">Contacto</a></li>
      </ul>
      <CartWidget />
    </nav>
  );
};

const styles = {
  nav: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#0d6efd",
    padding: "10px 20px",
    color: "white"
  },
  logo: {
    fontWeight: "bold",
    fontSize: "1.2rem",
  },
  navLinks: {
    listStyle: "none",
    display: "flex",
    gap: "20px",
  },
};

export default NavBar;