const ItemListContainer = ({ greeting }) => {
  return (
    <div style={styles.container}>
      <h2>{greeting}</h2>
    </div>
  );
};

const styles = {
  container: {
    textAlign: "center",
    marginTop: "40px",
    color: "#333",
  },
};

export default ItemListContainer;