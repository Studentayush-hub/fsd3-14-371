const b1 = {
  picUrl:
    "https://m.media-amazon.com/images/I/41uIlYtv1GL._SY445_SX342_FMwebp_.jpg",
  bname: "React Design Pattern",
  price: 1199,
  quantity: 10,
  rating: 5.0,
};
const b2 = {
  picUrl: "https://m.media-amazon.com/images/I/51PzX0ZSULL._AC_SF480,480_.jpg",
  bname: "Intro to PYTHON",
  price: 11939,
  quantity: 10,
  rating: 5.0,
};

const p1 = {
  picUrl:
    "https://m.media-amazon.com/images/I/61Qe0C9LZNL._AC_UF1000,1000_QL80_.jpg",
  company: "Parker",
  price: 499,
};

const p2 = {
  picUrl:
    "https://m.media-amazon.com/images/I/71Xk7qG6G-L._AC_UF1000,1000_QL80_.jpg",
  company: "Cello",
  price: 150,
};

const p3 = {
  picUrl:
    "https://m.media-amazon.com/images/I/61V2W4G2W9L._AC_UF1000,1000_QL80_.jpg",
  company: "Reynolds",
  price: 100,
};


function Book(props) {
  const { picUrl, bname, price, quantity, rating } = props.book;
  return (
    <div>
      <img src={picUrl} alt={bname} srcset="" />
      <h1>{bname}</h1>
      <h2>Price : {price}</h2>
      <h3>Quantity : {quantity}</h3>
      <h4>Rating : {rating}</h4>
    </div>
  );
}

export default function App() {
  return (
    <>
      <Book book={b1} />
      <h1>Hello React</h1>
      <Book book={b2} />
      <Book book= {b1} />
      <Book book= {b2} />
    </>
  );
}
