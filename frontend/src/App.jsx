import { useState } from "react";
import CategoryList from "./components/CategoryList";
import Header from "./components/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Register from './components/Register'
import RazorpayForm from "./components/payment/RazorpayForm";
import Login from "./components/Login";
import ProductDescription from "./components/ProductDescription";
function App() {
  return (
    <>
      <div >
          <Routes>
            <Route path='/' element={<Home/> } />
            <Route path='/product/:id' element={<ProductDescription/>}/>
            <Route path="/signup" component={Register } />
            <Route path="/login" component={Login} />
            <Route path="/about" component={About} />
            <Route path='/payment' element={<RazorpayForm/>}/>
          </Routes>
      </div>
    </>
  );
}

export default App;
