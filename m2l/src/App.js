import logo from './logo.svg';
import './App.css';
import Body from './body';
import Footer from './Footer.js';
import Navbar from './Navbar.js';
import Panier from './Panier.js';
import Connexion from './Connexion.js';
import Admin from './Admin';
import Admindelete from './Admindelete';
import Inscription from './Inscription';
import Connexiontest from './Connexiontest.js';
import Contacter from './Contacter.js';
import { Routes, Route, Link } from "react-router-dom"


function App() {
  return (
    <div className="App">
        <Navbar/>
       
        <Routes>
          <Route path="/" element ={ <Body/> }/>    
          <Route path="/Panier" element ={ <Panier/> }/>
          <Route path="/Inscription" element ={ <Inscription/> }/>
          <Route path="/Connexion" element ={ <Connexion/> }/>
          <Route path="/Contacter" element ={ <Contacter/> }/>
          <Route path="/Admin" element ={ <Admin/> }/>
          <Route path="/Admindelete" element ={ <Admindelete/> }/>
          <Route path="/Connexiontest" element ={ <Connexiontest/> }/>
        </Routes>
        <Footer/>
    </div>
  )
};

export default App;
