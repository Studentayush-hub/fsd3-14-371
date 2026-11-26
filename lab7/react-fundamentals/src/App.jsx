
//function must return single element
//<> </> : fragments can be used to group multiple elements.
//component :- any js function returns html directly.
// component can be called as html tag
// the tag must be closed
//component first character must be capital
function Hello(args){
  return (
    <>

    

      <h1>{args.name}</h1>
      <img src={args.imageUrl} alt={args.name} />
    <h2>Rs.{args.price}</h2>
    <h3> Author{args.author}</h3>
    <h4>Rating: {args.rating} </h4>

    </>
    
  );
}




export default function App(){

 const books = 
   [
     {
       name: "The Psychology of Money",
       author: "Morgan Housel",
       price: 14.99,
       rating: 4.7,
       imageUrl: "https://covers.openlibrary.org/b/isbn/9780857197689-L.jpg",
     },
     {
       name: "Atomic Habits",
       author: "James Clear",
       price: 16.99,
       rating: 4.8,
       imageUrl: "https://covers.openlibrary.org/b/isbn/9780735211292-L.jpg",
     },
     {
       name: "The Silent Patient",
       author: "Alex Michaelides",
       price: 12.99,
       rating: 4.5,
       imageUrl: "https://covers.openlibrary.org/b/isbn/9781250301697-L.jpg",
     },
     {
       name: "Project Hail Mary",
       author: "Andy Weir",
       price: 18.5,
       rating: 4.8,
       imageUrl: "https://covers.openlibrary.org/b/isbn/9780593135204-L.jpg",
     },
     {
       name: "The Alchemist",
       author: "Paulo Coelho",
       price: 11.99,
       rating: 4.6,
       imageUrl: "https://covers.openlibrary.org/b/isbn/9780062315007-L.jpg",
     },
     {
       name: "Deep Work",
       author: "Cal Newport",
       price: 15.49,
       rating: 4.6,
       imageUrl: "https://covers.openlibrary.org/b/isbn/9781455586691-L.jpg",
     },
     {
       name: "The Seven Husbands of Evelyn Hugo",
       author: "Taylor Jenkins Reid",
       price: 13.99,
       rating: 4.7,
       imageUrl: "https://covers.openlibrary.org/b/isbn/9781501161933-L.jpg",
     },
     {
       name: "Anxious People",
       author: "Fredrik Backman",
       price: 14.25,
       rating: 4.5,
       imageUrl: "https://covers.openlibrary.org/b/isbn/9781501160837-L.jpg",
     },
     {
       name: "Norwegian Wood",
       author: "Haruki Murakami",
       price: 15.0,
       rating: 4.4,
       imageUrl: "https://covers.openlibrary.org/b/isbn/9780375704024-L.jpg",
     },
     {
       name: "The Nightingale",
       author: "Kristin Hannah",
       price: 14.99,
       rating: 4.8,
       imageUrl: "https://covers.openlibrary.org/b/isbn/9780312577223-L.jpg",
     },
   ];



  return ( 
  <> 
    <h1>Hello React</h1>
    <Hello name= "Let us C" price="355" author="Ayush Kashyap" />
    < Hello name = "Atomic Habits " price= "355" author="Ayush Daniel"/>
    < Hello {...books[0]}/>
    {
      books.map((item)=><Hello {...item}/>)
    } 
    
  </>
  );
} 

