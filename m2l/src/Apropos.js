// import { useState, useEffect } from 'react';
import './Bootstrap.css';
import './Responsive.css';
import './Style.css';
import React, { useState, useEffect } from 'react';
import { Routes, Route, Link } from "react-router-dom";
import Navbar from './Navbar.js';
import axios from 'axios';
import Logo1 from './img/logo2.jpg';
import Logo2 from './img/logo.png';


function Apropos() {
   
    return (
    <div>
        <Navbar/>
      <div><br/>
        <section className="contact_section">
        <div className="container">
                  <div className="row">
                      <div className="col-md-6">
                          <div className="form_container">
                              <div className="heading_container">
                                  <h2>
                                      Qui sommes nous ?
                                  </h2>
                                  <br/>
                                  <br/>
                                  <p>La MAISON DES LIGUES DE LA LORRAINE (M2L) est un établissement du Conseil Régional de Lorraine qui est responsable de la gestion du service des sports dans la région. Son rôle principal est de fournir les infrastructures matérielles, logistiques et des services à l’ensemble des ligues sportives implantées dans la région. La M2L assure également l'offre de services et de support technique aux différentes ligues déjà présentes ou à venir dans la région.

                                    En tant qu'organisme clé dans la promotion et le développement du sport en Lorraine, la M2L a une mission importante à remplir. Elle doit s'assurer que les différentes ligues sportives hébergées disposent des infrastructures et des ressources nécessaires pour fonctionner efficacement. Cela implique la fourniture d'espaces de travail, de salles de réunion, de terrains de sport, d'équipements et d'autres ressources matérielles.</p>
                              </div>
                             
                          </div>
                      </div>
                      
 
                      <div className="col-md-6">
                          <div className="form_container">
                                <div className="heading_container">
                                    <img className='img-size1' src={Logo1} alt=""></img>
                                </div>
                                
                          </div>
                      
                      </div>
                  </div>
              </div>
              </section>
              <section className="contact_section">
                <div className="container">
                  <div className="row">
                      <div className="col-md-6">
                          <div className="form_container">
                              <div className="heading_container">
                                <div className="heading_container">
                                    <img className='img-size1' src={Logo2} alt=""></img>
                                </div>
                              </div>
                             
                          </div>
                      </div>
 
                      <div className="col-md-6">
                          <div className="form_container">     
                          <h2>Types de produits vendue !</h2>
                            <br/><br/>
                           <p>En somme, nous avons une large gamme de produits de sport de qualité pour répondre aux besoins de chaque sportif. Que vous pratiquiez le ping-pong, le basketball, la boxe ou que vous cherchiez simplement à améliorer votre condition physique, nous avons tout ce dont vous avez besoin pour atteindre vos objectifs sportifs.</p> 
                          </div>
                      
                      </div>
                  </div>
              </div>
              </section><br/><br/>
      </div>
    </div>
    )
  }
  export default Apropos;