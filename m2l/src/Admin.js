import './Bootstrap.css';
import './Responsive.css';
import './Style.css';
import Img10 from './img/table de pingpong1.png';
import { Routes, Route, Link } from "react-router-dom";
import React, { useState, useEffect } from 'react';
import axios from 'axios'

function Admin() {
    const [articles, setArticles] = useState({ name: '', image: '', prix: ''});
    const [affichage, setAffichage] = useState(false);
   
    const handleSubmit = (e) => {
      e.preventDefault();
      axios.post('http://localhost:8000/articles', articles)
        .then(res => {
          console.log(res);
          setAffichage(true);
        })
        .catch(err => {
          console.log(err);
        });
        handleSubmit1(e)
    }

 function handleChange(event) {
    const [selectedFiles, setSelectedFiles] = useState(null);
    setSelectedFiles(event.target.files);
  }

  function handleSubmit1(event) {
    event.preventDefault();
    const data = new FormData();
    for (let i = 0; i < selectedFiles.length; i++) {
      data.append('file', selectedFiles[i]);
    }
    axios.post('http://localhost:3001/upload', data)
      .then(response => {
        console.log(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }
    
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
                          Sur cette page vous pourrez rajouter de nouveaux article a dispositon de l'utilisateur.
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

          <section className="contact_section">
              <div className="container">
                  <div className="row">
                      <div className="col-md-6">
                          <div className="form_container">
                              <div className="heading_container">
                                  <h2>
                                    Ajouter un article
                                  </h2>
                              </div>
                              <form onSubmit={handleSubmit}>
                                  <div>
                                      <input type="text" placeholder="Nom de l'article" value={articles.name} onChange={e => setArticles({ ...articles, name: e.target.value })}/>
                                  </div>
                                  <div>
                                      <input type="file" name='file' placeholder="image" value={articles.image} onChange={e => setArticles({ ...articles, image: e.target.value })}/>  
                                  </div>
                                  
                                  <div>
                                      <input type="text" placeholder="Prix" value={articles.prix} onChange={e => setArticles({ ...articles, prix: e.target.value })}/>
                                  </div>
                                  <div>
                                      <input type="text" placeholder="Quantité" value={articles.quantite} onChange={e => setArticles({ ...articles, quantite: e.target.value })}/>
                                  </div>
                                  <div className="d-flex ">
                                      <button type='submit'>
                                          Envoyer
                                      </button>
                                 
                                  </div>
                                  
                              </form>
                              {/* {affichage && <p>Votre compte a bien été créée</p>} */}
                          </div>
                      </div>
                      
                  </div>
              </div>
          </section>
          <br/><br/>
          
        </div>
    )

};
export default Admin;