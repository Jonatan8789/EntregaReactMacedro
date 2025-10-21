import { FaShoppingCart } from "react-icons/fa";

const CartWidget = () => {
  return (
    <div style={styles.cart}>
      <FaShoppingCart size={22} />
      <span style={styles.count}>3</span>
    </div>
  );
};

const styles = {
  cart: {
    display: "flex",
    alignItems: "center",
    gap: "5px",
    cursor: "pointer",
  },
  count: {
    backgroundColor: "white",
    color: "#0d6efd",
    borderRadius: "50%",
    padding: "3px 7px",
    fontSize: "0.8rem",
    fontWeight: "bold",
  },
};

export default CartWidget;