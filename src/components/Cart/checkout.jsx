import { useState } from "react";
import { useCart } from "../../context/CartContext";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "../../services/firebase";
import { Link } from "react-router-dom";
import "./Checkout.css";

const Checkout = () => {
  const { cart, totalPrice, clearCart } = useCart();
  const [orderId, setOrderId] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const order = {
      buyer: {
        name: "Jonatan",
        email: "test@mail.com",
        phone: "123456"
      },
      items: cart.map(item => ({
        id: item.id,
        title: item.title,
        price: item.price,
        quantity: item.quantity
      })),
      total: totalPrice,
      date: serverTimestamp()
    };

    const docRef = await addDoc(collection(db, "orders"), order);
    setOrderId(docRef.id);
    clearCart();
  };

  if (orderId) {
    return (
      <div>
        <h2>✅ Compra realizada</h2>
        <p>ID de orden: <strong>{orderId}</strong></p>
        <Link to="/">Volver al inicio</Link>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Checkout</h2>
      <button type="submit">Confirmar compra</button>
    </form>
  );
};

export default Checkout;
