import './Bootstrap.css';
import './Responsive.css';
import './Style.css';
import React from 'react'
import { useEffect, useState } from 'react';
import axios from 'axios';
import { BsFillBasket2Fill } from "react-icons/bs";
import './ArticlesCard.css';
import Navbar from './Navbar.js';
import Img10 from './img/table de pingpong1.png';
import Img11 from './img/gant.png';
import Img12 from './img/raquette1.png';
import Img13 from './img/balle de basket.png';
import Img14 from './img/coupelle1.png';
import Img15 from './img/balle de pingpong1.png';
import Img16 from './img/tapis de sport.png';
import { Routes, Route, Link } from "react-router-dom"

function Body() {
  const [articles, setArticles] = useState([])
  const [cart, setCart] = useState([])

  useEffect(() => {
    fetchArticles();
    getCartFromLocalStorage();
  }, []);

  const fetchArticles = async () => {
    try {
      const response = await axios.get('http://localhost:8000/articles');
      setArticles(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const addToCart = (article) => {
    const updatedCart = [...cart, article];
    setCart(updatedCart);
    saveCartToLocalStorage(updatedCart);
  };

  const getCartFromLocalStorage = () => {
    const savedCart = JSON.parse(localStorage.getItem('cart'));
    if (savedCart && savedCart.length > 0) {
      setCart(savedCart);
    }
  };

  const saveCartToLocalStorage = (cartItems) => {
    localStorage.setItem('cart', JSON.stringify(cartItems));
  };

    return (
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
                          équipement de sport
                          </h1>
                          <p>
                          Vous pourrez trouver des équipement de sport pour tout le monde et a tout les prix.
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
          {/*  Produits */}
          {/* <section className="shop_section layout_padding">
          <div className="container">
            <div className="heading_container heading_center">
              <h2>
                Articles de sport
              </h2>
            </div>
            <div className="row">
              <div className="col-md-6 ">
                <div className='containerbody'>
                  <div className="box itemsbody">
                      <div className="img-box">
                        <img src={Img10} alt=""/>
                      </div>
                      <div className="detail-box">
                        <h6>
                          Table de ping pong
                        </h6>
                        <h6>
                          
                          <span>
                            419.99€
                          </span>
                        </h6>
                      </div>
                      <div className="new">
                        <span>
                          Featured
                        </span>
                      </div>
                  </div>
                    <div className='boutonbody'>
                      <Link to='/Contacter'><div className='btnbody'>+ Panier</div></Link>
                    </div>
                </div>
              </div>
              <div className="col-sm-6 col-xl-3">
                <div className='containerbody'>
                  <div className="box itemsbody">
                      <div className="img-box">
                        <img src={Img11} alt=""/>
                      </div>
                      <div className="detail-box">
                        <h6>
                          Gant de boxe
                        </h6>
                        <h6>
                          
                          <span>
                            34.99€
                          </span>
                        </h6>
                      </div>
                      <div className="new">
                        <span>
                          New
                        </span>
                      </div> 
                  </div>
                    <div className='boutonbody'>
                      <Link to='/Contacter'><div className='btnbody'>+ Panier</div></Link>
                    </div>
                </div>
              </div>

              <div className="col-sm-6 col-xl-3">
                <div className='containerbody'>
                  <div className="box itemsbody">
                      <div className="img-box">
                        <img src={Img13} alt=""/>
                      </div>
                      <div className="detail-box">
                        <h6>
                          Balle de basket
                        </h6>
                        <h6>
                        
                          <span>
                            24.99€
                          </span>
                        </h6>
                      </div>
                      <div className="new">
                        <span>
                          New
                        </span>
                      </div> 
                  </div>
                    <div className='boutonbody'>
                      <Link to='/Contacter'><div className='btnbody'>+ Panier</div></Link>
                    </div>
                </div>
              </div>
              <div className="col-sm-6 col-xl-3">
                <div className='containerbody'>
                  <div className="box itemsbody">
                      <div className="img-box">
                        <img src={Img12} alt=""/>
                      </div>
                      <div className="detail-box">
                        <h6>
                          raquette
                        </h6>
                        <h6>
                        
                          <span>
                            18.99€
                          </span>
                        </h6>
                      </div>
                      <div className="new">
                        <span>
                          New
                        </span>
                      </div> 
                  </div>
                    <div className='boutonbody'>
                        <Link to='/Contacter'><div className='btnbody'>+ Panier</div></Link>
                    </div>
                </div>
              </div>

              <div className="col-sm-6 col-xl-3">
                <div className='containerbody'>
                  <div className="box itemsbody">
                      <div className="img-box">
                        <img src={Img14} alt=""/>
                      </div>
                      <div className="detail-box">
                        <h6>
                          coupelle
                        </h6>
                        <h6>
                          
                          <span>
                            11.99€
                          </span>
                        </h6>
                      </div>
                      <div className="new">
                        <span>
                          New
                        </span>
                      </div> 
                  </div>
                    <div className='boutonbody'>
                      <Link to='/Contacter'><div className='btnbody'>+ Panier</div></Link>
                    </div>
                </div>
              </div>

              <div className="col-sm-6  col-xl-3">
                <div className='containerbody'>
                  <div className="box itemsbody">
                      <div className="img-box">
                        <img src={Img16} alt=""/>
                      </div>
                      <div className="detail-box">
                        <h6>
                          Tapis de gym
                        </h6>
                        <h6>
                          
                          <span>
                            9.99€
                          </span>
                        </h6>
                      </div>
                      <div className="new">
                        <span>
                          New
                        </span>
                      </div>
                  </div>
                    <div className='boutonbody'>
                      <Link to='/Contacter'><div className='btnbody'>+ Panier</div></Link>
                    </div>
                </div>
              </div>

              <div className="col-sm-6 col-xl-3">
                <div className='containerbody'>
                  <div className="box itemsbody">
                      <div className="img-box">
                        <img src={Img15} alt=""/>
                      </div>
                      <div className="detail-box">
                        <h6>
                        Balle de Pingpong 
                        </h6>
                        <h6>
                        <div>
                          <span>
                            2.99€
                          </span>
                        </div>
                        </h6>
                      </div>
                      <div className="new">
                        <span>
                          New
                        </span>
                      </div>
                  </div>
                    <div className='boutonbody'>
                    <Link to='/Contacter'><div className='btnbody'>+ Panier</div></Link>
                    </div>
                </div>
              </div>
            </div>
          </div>
          </section> */}
          <br/><br/><br/><br/>
        
          <div className='body'>
            <h2> Articles de sport</h2>
          </div>
          <br/><br/>
            <div className="boxarticles">
                  {articles.map((article) => (
                    <div key={article.id} className="col">
                      <div className="">
                        <img className='img-size2' src={`${process.env.PUBLIC_URL}/images/${article.image}`}/>
                        <div className="card-body">
                          <h5 className="card-title">{article.name}</h5>
                          <p className="card-text">{article.prix}€</p>
                          {/* <p className="card-text">Quantité: {article.quantite}</p> */}
                          <button onClick={() => addToCart(article)} className="btncard">
                            Ajouter au panier
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
    
          <br/><br/><br/><br/>

          <section className="about_section layout_padding">
              <div className="container  ">
                  <div className="row">
                      <div className="col-md-6 col-lg-5 ">
                          <div className="img-box">
                              <img src={Img11} alt="" />
                          </div>
                      </div>
                      <div className="col-md-6 col-lg-7">
                          <div className="detail-box">
                              <div className="heading_container">
                                  <h2>
                                      Le plus commandé
                                  </h2>
                              </div>
                              <p>
                              Les gants de boxe sont des équipements de protection essentiels pour tout boxeur, qu'il soit débutant ou professionnel. Ils permettent de protéger les mains et les poings des coups et de réduire les risques de blessures lors des entraînements ou des combats.
                              </p>
                              <Link to="/" >
                                  Read More
                              </Link> 
                          </div>
                      </div>
                  </div>
              </div>
          </section>
          <br/>
        </div>
      </div>
    )

};
export default Body;