import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../services/firebase";
import ItemList from "../components/ItemList/ItemList";

const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const productsRef = collection(db, "products");

    getDocs(productsRef)
      .then((resp) => {
        const items = resp.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
        setProducts(items);
      })
      .catch((error) => {
        console.error("Error Firestore:", error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Cargando...</p>;

  return <ItemList products={products} />;
};

export default ItemListContainer;

