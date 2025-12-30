import { Link } from "react-router-dom";
import { useCart } from "../../context/CartContext";
import "./Cart.css";

const Cart = () => {
  const { cart, removeItem, clearCart, totalPrice } = useCart();

  if (cart.length === 0) {
    return (
      <div className="cart-empty">
        <h2>🛒 El carrito está vacío</h2>
        <Link to="/">Volver al inicio</Link>
      </div>
    );
  }

  return (
    <div className="cart-container">
      <h2>Tu carrito</h2>

      {cart.map(prod => (
        <div className="cart-item" key={prod.id}>
          <div>
            <h3>{prod.title}</h3>
            <p>
              ${prod.price} x {prod.quantity}
            </p>
            <strong>
              Subtotal: ${prod.price * prod.quantity}
            </strong>
          </div>

          <button onClick={() => removeItem(prod.id)}>❌</button>
        </div>
      ))}

      <div className="cart-footer">
        {/* totalPrice ahora es un VALOR */}
        <h3>Total: ${totalPrice}</h3>

        <button className="btn-clear" onClick={clearCart}>
          Vaciar carrito
        </button>

        <Link to="/checkout" className="btn-buy">
          Finalizar compra
        </Link>
      </div>
    </div>
  );
};

export default Cart;
