
import './Bootstrap.css';
import './Responsive.css';
import './Style.css';
import React, { useState, useEffect } from 'react';
import Navbaradmin from './Navbaradmin.js';
import axios from 'axios'
import { Link } from 'react-router-dom';

function Inscription() {
  const [users, setUsers] = useState({ pseudo: '', email: '', password: '' });
  const [affichage, setAffichage] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:8000/addusers', users)
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
        <Navbaradmin/>
      <div>
      <br/>
        <section className="contact_section">
        <div className="container">

                              <div className="heading_container">
                                  <h2>
                                      Ajouter un compte utilisateurs 
                                  </h2>
                              </div>
                              <br/>
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
                              {affichage && <p>Le compte a bien été créée</p>}

              </div>
            </section><br/>
      </div>
      <br/><br/><br/><br/>
    </div>
    )
  }
  export default Inscription;