import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import  HomeComponent  from "./Component/Home";
import Nav from "./Component/Nav";
import ProductList from "./Component/ProductList";
import Add from "./Component/Add";
import Update from "./Component/Update";
import Login from "./Component/Login";
import Signin from "./Component/Signin";
import Footer from "./Component/Footer";
import PrivateComponent from "./Component/PrivateComponent";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <Routes>

          <Route element={<PrivateComponent/>}>
            <Route path="/" element={<HomeComponent/>} ></Route>
            <Route path="/add" element={<Add/>}  ></Route>
            <Route path="/update/:id"element={<Update/>}  ></Route>
            <Route path="/products" element={<ProductList/>}  ></Route>
          </Route>
            <Route path="/login" element={<Login/>}  ></Route>
          <Route path="/signin" element={<Signin/>}  ></Route>

          
        </Routes>
      </BrowserRouter>
           
      <Footer/>
    </div>
  );
}

export default App;
