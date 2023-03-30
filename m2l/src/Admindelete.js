import './Bootstrap.css';
import './Responsive.css';
import './Style.css';
import Img10 from './img/table de pingpong1.png';
import { Routes, Route, Link } from "react-router-dom";
import React, { useState, useEffect } from 'react';
import axios from 'axios'

function Admin() {
    
    return (
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
                          Page d'administrateur
                          </h1>
                          <p>
                          Sur cette page vous pourrez supprimer et voir la liste des articles ajouter a dispositon des utilisateurs.
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

          <br/><br/>

          
        </div>
    )

};
export default Admin;