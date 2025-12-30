import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../services/firebase";
import ItemList from "../components/ItemList/ItemList";

const ItemListContainer = () => {
  const { categoryId } = useParams(); // 👈 ACÁ ESTÁ LA CLAVE
  const [items, setItems] = useState([]);

  useEffect(() => {
    const productsRef = collection(db, "products");

    const q = categoryId
      ? query(productsRef, where("category", "==", categoryId))
      : productsRef;

    getDocs(q)
      .then(resp => {
        const products = resp.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
        setItems(products);
      })
      .catch(err => console.error(err));
  }, [categoryId]);

  return (
    <div>
      <ItemList items={items} />
    </div>
  );
};

export default ItemListContainer;


