import logo from './logo.svg';
import './App.css';
import Body from './body';
import Footer from './Footer.js';
import Panier from './Panier.js';
import Connexion from './Connexion.js';
import AddArticles from './AddArticles.js';
import Inscription from './Inscription.js';
import Contacter from './Contacter.js';
import DeleteArticles from './DeleteArticles.js';
import EditArticles from './EditArticles.js';
import ModifyArticles from './ModifyArticles.js';
import DeleteUsers from './DeleteUsers.js';
import EditUsers from './EditUsers.js';
import ModifyUsers from './ModifyUsers.js';
import Apropos from './Apropos.js';
import Test from './Test.js';
import { Routes, Route, Link } from "react-router-dom"


function App() {
  return (
    <div className="App">
       
        <Routes>
          <Route path="/Connexion" element ={ <Connexion/> }/>
          <Route path="/" element ={ <Body/> }/>    
          <Route path="/Panier" element ={ <Panier/> }/>
          <Route path="/Inscription" element ={ <Inscription/> }/>
          <Route path="/Apropos" element ={ <Apropos/> }/>
          <Route path="/Contacter" element ={ <Contacter/> }/>
          <Route path="/AddArticles" element ={ <AddArticles/> }/>
          <Route path="/DeleteArticles/:id" element ={ <DeleteArticles/> }/>
          <Route path="/EditArticles/:id" element ={ <EditArticles/> }/>
          <Route path="/ModifyArticles" element ={ <ModifyArticles/> }/>
          <Route path="/DeleteUsers/:id" element ={ <DeleteUsers/> }/>
          <Route path="/EditUsers/:id" element ={ <EditUsers/> }/>
          <Route path="/ModifyUsers" element ={ <ModifyUsers/> }/>
          <Route path="/Test" element ={ <Test/> }/>
        </Routes>
        <Footer/>
    </div>
  )
};

export default App;
