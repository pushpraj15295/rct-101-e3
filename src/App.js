import "./App.css";
// import Product from "./components/Products/Product/Product";
import { Route, Routes } from "react-router-dom";

import Product from "./components/Products/Product/Product";
import Navbar from "./components/Navbar/Navbar";
function App() {
  
//   useEffect(()=>{
          
//     const products = async() =>{
      
//        let r = await axios.get("http://localhost:8080/products")

//        console.log(r.data)

//     }

//     products();

//  },[]) 

  return (
    <div className="App">
       home
        <Navbar/>
        <Product/>
 
         
    </div>
  );
}

export default App;
