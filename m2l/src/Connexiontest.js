// import { useState, useEffect } from 'react';
import './Bootstrap.css';
import './Responsive.css';
import './Style.css';
import React, { useState, useEffect } from 'react';
// import axios from 'axios'

function Connexiontest() {
   

  
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
                              <form onSubmit={handleSubmit}>
                          
                                  <div>
                                      <input type="email" placeholder="Email" value={email} onChange={(event) => setEmail(event.target.value)}/>
                                  </div>
                                  <div>
                                      <input type="password" placeholder="Mot de passe" id="password" value={password} onChange={(event) => setPassword(event.target.value)}/>
                                 
                                  </div>
                                  <div className="d-flex ">
                                      <button type='submit'>
                                          Se Connecter
                                      </button>
                                  </div>
                              </form>
                          </div>
                      </div>
                      
                      
                      <div className="col-md-6">
                          
                      </div>
                  </div>
              </div>
              </section><br/>
      </div>
    )
  }
  export default Connexiontest;