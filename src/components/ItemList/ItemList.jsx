import Item from "../ItemList/Item";
import "./Item.css";

const ItemList = ({ items }) => {
  if (!items || items.length === 0) {
    return <p>No hay productos</p>;
  }

  return (
    <div>
      {items.map(item => (
        <Item key={item.id} {...item} />
      ))}
    </div>
  );
};

export default ItemList;
