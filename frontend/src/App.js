import logo from './logo.svg';
import { BrowserRouter as Router, Routes, Route, Switch } from 'react-router-dom';
import './App.css';
import Header from './layouts/Header';
import Footer from './layouts/Footer';
import Home from './pages/home/Home';
import UserProfile from './pages/profile/UserProfile'; 
import EditProfile from './pages/profile/EditProfile'; 

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
          
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
