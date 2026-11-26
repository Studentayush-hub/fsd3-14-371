// Function must return single element
// <> </> Fragment san be used to group multiple element
// component - any js function which returns js directly
// component can be called as html tag
// the tag must be closed
// Component first character must be capital

import BookList from "./Components/BookList";

// function Hello(){
//   return{
//     <h1>Book name</h1>
//     <h2>Book price</h2>     // -> Wrong because not in single block we can only return single block in the jsx
//     <h3>Book author</h3>
//   }
// }

export default function App() {
  return (
    <>
      <h1>Hello react</h1>
      <BookList />
    </>
  );
}
