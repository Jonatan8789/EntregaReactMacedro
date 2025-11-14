import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { products } from "../data/products";
import ItemDetail from "../omponents/ItemDetail/ItemDetail";

const ItemDetailContainer = () => {
  const [product, setProduct] = useState(null);
  const { itemId } = useParams();

  useEffect(() => {
    const fetchProduct = new Promise((resolve) => {
      setTimeout(() => {
        resolve(products.find(p => p.id === parseInt(itemId)));
      }, 1000);
    });

    fetchProduct.then((res) => setProduct(res));
  }, [itemId]);

  return (
    <div>
      {product ? <ItemDetail {...product} /> : <p>Cargando...</p>}
    </div>
  );
};

export default ItemDetailContainer;
