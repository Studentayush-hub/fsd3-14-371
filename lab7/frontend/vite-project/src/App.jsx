import Fruit from "./components/Fruit";
import Event from "./components/Event";
const MyButton = ()=>{
return(
  <button className="bg-black text-white text-xl rounded-md-m4 px-4 py-2" OnClick={handleSubmit}>Submit</button>
);

};

export default function App() {
  return (
    <>

    <MyButton/>
      
    </>
  );
}