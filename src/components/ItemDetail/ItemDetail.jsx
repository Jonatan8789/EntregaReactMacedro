import ItemCount from "./ItemCount";

const ItemDetail = ({ name, description, price, image }) => {
  return (
    <div className="detail-card">
      <img src={image} alt={name} />
      <h2>{name}</h2>
      <p>{description}</p>
      <h3>${price}</h3>
      <ItemCount stock={5} initial={1} />
    </div>
  );
};

export default ItemDetail;
