import logo from './logo.svg';
import { BrowserRouter as Router, Routes, Route, Switch } from 'react-router-dom';
import './App.css';
import Header from './layouts/Header';
import Footer from './layouts/Footer';
import Home from './pages/home/Home';
import UserProfile from './pages/profile/UserProfile'; 
import EditProfile from './pages/profile/EditProfile'; 
import { useEffect } from 'react';
import ProductDetails from './pages/single-product/ProductDetails';
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom"; // Import the necessary components from react-router-dom
import { useLocation } from "react-router-dom";
import Login from './pages/Login-out/LogIn';
import SignUp from './pages/Login-out/SignUp';
import Activity_pages  from './pages/Forum detailes/Activity_pages';

function App() {
  return (
    <div className="App">
       {/* <Header/>
      <Home/>
      <Footer/> */}
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/UserProfile" element={<UserProfile />} />
          <Route path="/EditProfile" element={<EditProfile />} /> 
          
       
      
        <Route path='/' element={<Home/>}></Route>
        <Route path='/Login' element={<Login/>}></Route>
        <Route path='/SignUp' element={<SignUp/>}></Route>
        <Route path='/Activity_pages' element={<Activity_pages/>}></Route>
        <Route path='ProductDetails' element={<ProductDetails/>}></Route>
        <Route path='/ProductDetails/:id' element={<ProductDetails/>}></Route>
      </Routes>
      {/* <Login/> */}
      <Footer/>
      </Router>

    </div>
  );
}

export default App;
