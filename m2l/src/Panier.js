import './Bootstrap.css';
import './Responsive.css';
import './Style.css';
import Img17 from './img/panier.png';
import { Routes, Route, Link } from "react-router-dom"


import Img11 from './img/gant.png';
function Panier() {
  return (
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
          <section className="shop_section layout_padding">
          <div className="container">
            <div className="heading_container heading_center">
              <h2>
                Votre Panier
              </h2>
            </div>
          </div>
          </section>
    </div>
  )
}
export default Panier;