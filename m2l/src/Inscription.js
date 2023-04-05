
import './Bootstrap.css';
import './Responsive.css';
import './Style.css';
import React, { useState, useEffect } from 'react';
import Connexion from './Connexion.js';
import axios from 'axios'
import { Link } from 'react-router-dom';

function Inscription() {
  const [users, setUsers] = useState({ pseudo: '', email: '', password: '' });
  const [affichage, setAffichage] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:8000/users', users)
      .then(res => {
        console.log(res);
        setAffichage(true);
      })
      .catch(err => {
        console.log(err);
      });
  }

    return (
      <div>
        <section className="contact_section">
        <div className="container">
                  <div className="row">
                      <div className="col-md-6">
                          <div className="form_container">
                              <div className="heading_container">
                                  <h2>
                                      J'ai déja un compte !
                                  </h2>
                              </div>
                              <form>
                                  <div className="d-flex ">
                                    <Link to="/Connexion">
                                      <button type='submit'>
                                          Se Connecter
                                      </button>
                                    </Link>
                                  </div>
                              </form>
                          </div>
                      </div>
                      
 
                      <div className="col-md-6">
                          <div className="form_container">
                              <div className="heading_container">
                                  <h2>
                                      Je veut créer mon compte !
                                  </h2>
                              </div>
                              <form onSubmit={handleSubmit}>
                                
                                  <div>
                                      <input type="text" placeholder="Nom, Prénom" value={users.pseudo} onChange={e => setUsers({ ...users, pseudo: e.target.value })}/>
                                 
                                  </div>
                                  <div>
                                      <input type="email" placeholder="Email" value={users.email} onChange={e => setUsers({ ...users, email: e.target.value })}/>
                                  </div>
                                  <div>
                                      <input type="password" placeholder="Mot de passe" value={users.password} onChange={e => setUsers({ ...users, password: e.target.value })}/>
                                 
                                  </div>
                                  
                                  <div className="d-flex ">
                                      <button type='submit'>Création du compte</button>
                                  </div>
                                  {/* <button className="" type="reset">supprimer</button> */}
                              </form>
                              {affichage && <p>Votre compte a bien été créée</p>}
                          </div>
                      
                      </div>
                  </div>
              </div>
              </section><br/>
      </div>
    )
  }
  export default Inscription;