import { Link } from "react-router-dom";
import { useCart } from "../../context/CartContext";

const CartWidget = () => {
  const { totalItems } = useCart();

  return (
    <Link to="/cart" className="cart-widget">
      🛒 {totalItems}
    </Link>
  );
};

export default CartWidget;
