import React, { useEffect, useState } from 'react';
import './Bootstrap.css';
import './Responsive.css';
import './Style.css';
import Img17 from './img/panier.png';
import Navbar from './Navbar.js';
import { Routes, Route, Link } from "react-router-dom"


import Img11 from './img/gant.png';

function Panier() {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem('cart'));
    const updateCartItems = () => {
      const cartItemsMap = new Map();
      if (cart && cart.length > 0) {
        cart.forEach((item) => {
          const itemId = item.id;
          if (cartItemsMap.has(itemId)) {
            cartItemsMap.set(itemId, {
              ...cartItemsMap.get(itemId),
              quantity: cartItemsMap.get(itemId).quantity + 1,
            });
          } else {
            cartItemsMap.set(itemId, { ...item, quantity: 1 });
          }
        });
      }
      setCartItems(Array.from(cartItemsMap.values()));
    };

    updateCartItems();
  }, []);

  const getTotalAmount = () => {
    let total = 0;
    if (cartItems && cartItems.length > 0) {
      cartItems.forEach((item) => {
        if (item.quantity) {
          total += item.prix * item.quantity;
        }
      });
    }
    return total;
  };

  const handleCheckout = () => {
    localStorage.removeItem('cart');
    alert('Commande finalisée !');
  };

  const handleDebugClearCart = () => {
    localStorage.removeItem('cart');
    alert('Le panier a été vidé !');
  };

  return (
    <div>
    <Navbar/>
    <div>
      <section className="about_section layout_padding">
              <div className="container  ">
                  <div className="row">
                      <div className="col-md-6 col-lg-5 ">
                          <div className="img-box">
                              <img src={Img17} alt="" />
                          </div>
                      </div>
                      <div className="col-md-6 col-lg-7">
                          <div className="detail-box">
                              <div className="heading_container">
                                  <h2>
                                      Page Panier
                                  </h2>
                              </div>
                              <p>
                              Merci de votre visite ! Vous êtes sur le point de finaliser votre commande. Veuillez consulter le récapitulatif ci-dessous pour vérifier que tout est en ordre avant de passer au paiement.
                              </p>
                              {/* <Link to="/" >
                                  Read More
                              </Link>  */}
                          </div>
                      </div>
                  </div>
              </div>
          </section>
          <br/><br/> <br/>
    <div className="container">
      <h1>Panier</h1>
      {cartItems && cartItems.length > 0 ? (
        <div>
          <ul className="list-group">
            {cartItems.map((item) => (
              <li key={item.id} className="list-group-item">
                <h5>{item.name}</h5>
                <p>Prix unitaire: {item.prix}€</p>
                <p>Quantité: {item.quantity}</p>
                <p>Montant: {item.prix * item.quantity}€</p>
              </li>
            ))}
          </ul>
          <br/>
          <h4>Montant total: {getTotalAmount()}€</h4>
          <button className="btncard2" onClick={handleCheckout}>
            Payer
          </button>
        </div>
      ) : (
        <p>Votre panier est vide.</p>
      )}
      <br/>
      <button className="btn btn-danger" onClick={handleDebugClearCart}>
        Vider le panier (Debug)
      </button>
    </div>
    </div>
    <br/><br/><br/>
  </div>
  );
}

export default Panier;