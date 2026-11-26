
//function must return single element
//<> </> : fragments can be used to group multiple elements.
//component :- any js function returns html directly.
// component can be called as html tag
// the tag must be closed
//component first character must be capital
function Hello(){
  return (
    <div>
      <h1>Book Name</h1>
    <h2>Book Price</h2>
    <h3>Book Author</h3>

    </div>
    
  )
}




export default function App(){
  return ( 
  <> 
    <h1>Hello React</h1>
    <Hello />
  </>
  )
} 

