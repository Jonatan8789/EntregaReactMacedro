import { Link } from "react-router-dom";


const Item = ({ id, title, price }) => (
<div className="item-card">
<h3>{title}</h3>
<p>${price}</p>
<Link to={`/item/${id}`}>Ver detalle</Link>
</div>
);


export default Item;
