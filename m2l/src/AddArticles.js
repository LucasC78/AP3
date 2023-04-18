import './Bootstrap.css';
import './Responsive.css';
import './Style.css';
import { useNavigate, Link } from "react-router-dom";
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbaradmin from './Navbaradmin.js';


function Admin() {
    const [articles, setArticles] = useState({ name: '', image: '', prix: '',quantite: ''});
    const [affichage, setAffichage] = useState(false);

    let navigate = useNavigate()

    const handleSubmit = (e) => {
      e.preventDefault();
      axios.post('http://localhost:8000/articles', articles)
        .then(res => {
          console.log(res);
          setAffichage(true);
          alert("Article ajouté")
          navigate("/ModifyArticles");
        })
        .catch(err => {
          console.log(err);
        });
        handleSubmit1(e)

    }


        const Testfile = (event) => {
          const file = event.target.files[0];
          setArticles({ ...articles, image: file.name })
        };
    
    
    return (
    <div>
        <Navbaradmin/>
        <div>
        {/* // Bandeau */}
              
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
                                      <input type="file" placeholder="image" onChange={Testfile}/>  
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