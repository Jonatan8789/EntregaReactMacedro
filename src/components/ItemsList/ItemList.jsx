import Item from "./Item";

const ItemList = ({ items }) => {
  return (
    <div className="grid">
      {items.map((prod) => (
        <Item key={prod.id} {...prod} />
      ))}
    </div>
  );
};

export default ItemList;
