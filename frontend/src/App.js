import logo from './logo.svg';
import './App.css';
import Header from './layouts/Header';
import Footer from './layouts/Footer';
import Home from './pages/home/Home';
import { useEffect } from 'react';
import ProductDetails from './pages/single-product/ProductDetails';
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom"; // Import the necessary components from react-router-dom
import { useLocation } from "react-router-dom";
import Login from './pages/Login-out/LogIn';
import SignUp from './pages/Login-out/SignUp';

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/Login' element={<Login/>}></Route>
        <Route path='/SignUp' element={<SignUp/>}></Route>
        <Route path='/ProductDetails/:id' element={<ProductDetails/>}></Route>
      </Routes>
      {/* <Login/> */}
      <Footer/>
    </div>
  );
}

export default App;
