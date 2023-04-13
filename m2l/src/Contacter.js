import './Bootstrap.css';
import './Responsive.css';
import './Style.css';
import Img10 from './img/table de pingpong1.png';
import Img13 from './img/balle de basket.png';
import Navbar from './Navbar.js';
import { Routes, Route, Link } from "react-router-dom";
import React, { useState, useEffect } from 'react';
import axios from 'axios'

function Contacter() {
    const [support, setSupport] = useState({ name: '', email: '', phone: '', message: ''});
    const [affichage, setAffichage] = useState(false);
  
    const handleSubmit = (e) => {
      e.preventDefault();
      axios.post('http://localhost:8000/support', support)
        .then(res => {
          console.log(res);
          setAffichage(true);
        })
        .catch(err => {
          console.log(err);
        });
    }
    return(
    <div>
        <Navbar/>
        <div>
        {/* // Bandeau */}
          <div className="hero_area">
            <div className="hero_social">
              <Link to="/">
                <i className="fa fa-facebook" aria-hidden="true"></i>
              </Link> 
              <Link to="/">
                <i className="fa fa-instagram" aria-hidden="true"></i>
              </Link> 
              <Link to="/">
                <i className="fa fa-box" aria-hidden="true"></i>
              </Link> 
              <Link to="/">
                <i className="fa fa-info" aria-hidden="true"></i>
              </Link> 
            </div>
          
      
          <section className="slider_section ">
          <div id="customCarousel1" className="carousel slide" data-ride="carousel">
              <div className="carousel-inner">
              <div className="carousel-item active">
                  <div className="container-fluid ">
                  <div className="row">
                      <div className="col-md-6">
                      <div className="detail-box">
                          <h1>
                          Contacter le support
                          </h1>
                          <p>
                          Cette page permet de nous contacter pour toute demande.
                          </p>
                          <div className="btn-box">
                          <Link to="/Connexion"  className="btn1">
                              Connecter vous
                          </Link> 
                          </div>
                      </div>
                      </div>
                      <div className="col-md-6">
                      <div className="img-box">
                          <img src={Img10} alt=""/>
                      </div>
                      </div>
                  </div>
                  </div>
              </div>
              <div className="carousel-item ">
                  <div className="container-fluid ">
                  <div className="row">
                      <div className="col-md-6">
                      <div className="detail-box">
                          <h1>
                          Smart Watches
                          </h1>
                          <p>
                          Aenean scelerisque felis ut orci condimentum laoreet. Integer nisi nisl, convallis et augue sit amet, lobortis semper quam.
                          </p>
                          <div className="btn-box">
                          <Link to="/"  className="btn1">
                              Contact Us
                          </Link> 
                          </div>
                      </div>
                      </div>
                      <div className="col-md-6">
                      <div className="img-box">
                          <img src={Img10} alt=""/>
                      </div>
                      </div>
                  </div>
                  </div>
              </div>
              <div className="carousel-item ">
                  <div className="container-fluid ">
                  <div className="row">
                      <div className="col-md-6">
                      <div className="detail-box">
                          <h1>
                          Smart Watches
                          </h1>
                          <p>
                          Aenean scelerisque felis ut orci condimentum laoreet. Integer nisi nisl, convallis et augue sit amet, lobortis semper quam.
                          </p>
                          <div className="btn-box">
                          <Link to="/"  className="btn1">
                              Contact Us
                          </Link> 
                          </div>
                      </div>
                      </div>
                      <div className="col-md-6">
                      <div className="img-box">
                          <img src={Img10} alt=""/>
                      </div>
                      </div>
                  </div>
                  </div>
              </div>
              </div>
              <ol className="carousel-indicators">
              <li data-target="#customCarousel1" data-slide-to="0" className="active"></li>
              <li data-target="#customCarousel1" data-slide-to="1"></li>
              <li data-target="#customCarousel1" data-slide-to="2"></li>
              </ol>
          </div>
        
          </section>
          </div>
          
          <section className="contact_section">
              <div className="container">
                  <div className="row">
                      <div className="col-md-6">
                          <div className="form_container">
                              <div className="heading_container">
                                  <h2>
                                  Nous contacter
                                  </h2>
                              </div>
                              <form onSubmit={handleSubmit}>
                                  <div>
                                      <input type="text" placeholder="Nom et prénom " value={support.name} onChange={e => setSupport({ ...support, name: e.target.value })}/>
                                  </div>
                                  <div>
                                      <input type="email" placeholder="Email" value={support.email} onChange={e => setSupport({ ...support, email: e.target.value })}/>
                                  </div>
                                  <div>
                                      <input type="text" placeholder="Téléphone" value={support.phone} onChange={e => setSupport({ ...support, phone: e.target.value })}/>
                                  </div>
                                  <div>
                                      <input type="text" className="message-box" placeholder="Message" value={support.message} onChange={e => setSupport({ ...support, message: e.target.value })}/>
                                  </div>
                                  <div className="d-flex ">
                                      <button type='submit'>
                                          Envoyer
                                      </button>
                                  </div>
                              </form>
                              {affichage && <p>Votre message à bien été envoyé.</p>}
                          </div>
                      </div>
                      <div className="col-md-6">
                          <div className="img-box">
                              <img src={Img13}/>
                          </div>
                      </div>
                  </div>
              </div>
          </section>
          <br/><br/>
          
        </div>
    </div>
    )

};
export default Contacter;