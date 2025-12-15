import Item from "./Item";


const ItemList = ({ products }) => (
<div className="item-list">
{products.map(p => <Item key={p.id} {...p} />)}
</div>
);


export default ItemList;