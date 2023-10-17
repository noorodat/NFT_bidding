import logo from './logo.svg';
import './App.css';
import Header from './layouts/Header';
import Footer from './layouts/Footer';
import Home from './pages/home/Home';

function App() {
  return (
    <div className="App">
      <Header/>
      <Home/>
      <Footer/>
    </div>
  );
}

export default App;
