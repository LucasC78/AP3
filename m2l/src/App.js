import logo from './logo.svg';
import './App.css';
import Body from './body';
import Footer from './Footer.js';
import Panier from './Panier.js';
import Connexion from './Connexion.js';
import Admin from './Admin.js';
import Admindelete from './Admindelete.js';
import Inscription from './Inscription.js';
import Contacter from './Contacter.js';
import Adminedit from './Adminedit.js';
import Adminmodify from './Adminmodify.js';
import Apropos from './Apropos.js';
import Test from './Test.js';
import { Routes, Route, Link } from "react-router-dom"


function App() {
  return (
    <div className="App">
       
        <Routes>
          <Route path="/" element ={ <Body/> }/>    
          <Route path="/Panier" element ={ <Panier/> }/>
          <Route path="/Inscription" element ={ <Inscription/> }/>
          <Route path="/Connexion" element ={ <Connexion/> }/>
          <Route path="/Apropos" element ={ <Apropos/> }/>
          <Route path="/Contacter" element ={ <Contacter/> }/>
          <Route path="/Admin" element ={ <Admin/> }/>
          <Route path="/Admindelete/:id" element ={ <Admindelete/> }/>
          <Route path="/Adminedit/:id" element ={ <Adminedit/> }/>
          <Route path="/Adminmodify" element ={ <Adminmodify/> }/>
          <Route path="/Test" element ={ <Test/> }/>
        </Routes>
        <Footer/>
    </div>
  )
};

export default App;
