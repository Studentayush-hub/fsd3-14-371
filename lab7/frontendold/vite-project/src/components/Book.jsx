export function Book(props) {
  const { picUrl, bname, price, quantity, rating } = props.book;
  const qtyStyle = {
    fontSize: "1rem",
    color: "blue",
    textAlign: "center ",
    backgroundColor: "yellow",
    padding: "10px",
  };
  return (
    <div>
      <img src={picUrl} alt={bname} srcSet="" />

      <h1>{bname}</h1>
      <h2>Price: {price}</h2>
      <h3>Quantity: {quantity}</h3>
      <h4 style={qtyStyle}>Rating: {rating}</h4>
      <button>Buy now</button>
    </div>
  );
}
