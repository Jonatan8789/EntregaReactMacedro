import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../services/firebase";
import ItemCount from "../components/ItemDetail/ItemCount";
import { useCart } from "../context/CartContext";


const ItemDetailContainer = () => {
const { id } = useParams();
const [product, setProduct] = useState(null);
const [added, setAdded] = useState(false);
const { addItem } = useCart();


useEffect(() => {
getDoc(doc(db, "products", id)).then(res => {
setProduct({ id: res.id, ...res.data() });
});
}, [id]);


const onAdd = (qty) => {
addItem(product, qty);
setAdded(true);
};


if (!product) return <p>Cargando...</p>;


return (
<div>
<h2>{product.title}</h2>
<p>${product.price}</p>
{!added && product.stock > 0 && (
<ItemCount stock={product.stock} onAdd={onAdd} />
)}
{product.stock === 0 && <p>Sin stock</p>}
</div>
);
};


export default ItemDetailContainer;