import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../services/firebase";
import ItemCount from "../components/ItemDetail/ItemCount";
import { useCart } from "../context/CartContext";

const ItemDetailContainer = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [added, setAdded] = useState(false);

  const { addItem } = useCart();

  useEffect(() => {
    const getProduct = async () => {
      const docRef = doc(db, "products", id);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        setProduct({ id: docSnap.id, ...docSnap.data() });
      }
      setLoading(false);
    };

    getProduct();
  }, [id]);

  const handleAdd = (quantity) => {
    addItem(product, quantity);
    setAdded(true);
  };

  if (loading) return <p>Cargando producto...</p>;
  if (!product) return <p>Producto no encontrado</p>;

  return (
    <div className="item-detail">
      <h2>{product.title}</h2>
      <p>${product.price}</p>

      {!added ? (
        <ItemCount stock={product.stock} onAdd={handleAdd} />
      ) : (
        <p>✅ Producto agregado al carrito</p>
      )}
    </div>
  );
};

export default ItemDetailContainer;
