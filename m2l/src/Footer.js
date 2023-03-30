import './Bootstrap.css';
import './Responsive.css';
import './Style.css';
import {} from "react-icons/fa";
import { Routes, Route, Link } from "react-router-dom"

function Footer(){
    return(
        
        <footer className="footer_section">
            <div className="container">
                <div className="row">
                    <div className="col-md-6 col-lg-3 footer-col">
                        {/* <div className="footer_detail">
                            <h4>
                            About
                            </h4>
                            <p>
                            Necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with
                            </p>
                            <div className="footer_social">
                            <Link to="">
                                <i className="fa fa-facebook" aria-hidden="true"></i>
                            </Link>
                            <Link to="">
                                <i className="fa fa-twitter" aria-hidden="true"></i>
                            </Link>
                            <Link to="">
                                <i className="fa fa-linkedin" aria-hidden="true"></i>
                            </Link>
                            <Link to="">
                                <i className="fa fa-instagram" aria-hidden="true"></i>
                            </Link>
                        </div>
                    </div> */}
                </div>
                <div className="col-md-6 col-lg-3 footer-col">
                    <div className="footer_contact">
                    <h4>
                    Trouver Nous
                    </h4>
                    <div className="contact_link_box">
                    <Link to="">
                        <i className="fa fa-map-marker" aria-hidden="true"></i>
                        <span>
                        Location : Region Lorraine
                        </span>
                    </Link>
                    <Link to="">
                        <i className="fa fa-phone" aria-hidden="true"></i>
                        <span>
                        Tel : 0600000000
                        </span>
                    </Link>
                    <Link to="">
                        <i className="fa fa-envelope" aria-hidden="true"></i>
                        <span>
                        m2l@gmail.com
                        </span>
                    </Link>
                    </div>
                </div>
                </div>
                <div className="col-md-6 col-lg-3 footer-col">
                <div className="footer_contact">
                    {/* <h4>
                    Subscribe
                    </h4>
                    <form action="#">
                    <input type="text" placeholder="Enter email" />
                    <button type="submit">
                        Subscribe
                    </button>
                    </form>
                </div>
                </div>
                <div className="col-md-6 col-lg-3 footer-col">
                <div className="map_container">
                    <div className="map">
                    <div id="googleMap"></div>
                    </div> */}
                        <h4>
                            A propos
                        </h4>
                        <p>
                            Pour tous problème au formalité vous pouvez prendre contacte garce a nos cordonnéeset via le formulaire de contacte.
                        </p>
                        <div className='centrei'>
                            <div className="footer_social">
                            <Link to="">
                                <i className="fa fa-facebook" aria-hidden="true"></i>
                            </Link>
                            <Link to="">
                                <i className="fa fa-twitter" aria-hidden="true"></i>
                            </Link>
                            <Link to="">
                                <i className="fa fa-linkedin" aria-hidden="true"></i>
                            </Link>
                            <Link to="">
                                <i className="fa fa-instagram" aria-hidden="true"></i>
                            </Link>
                            </div>
                        </div>
                </div>
                </div>
            </div>
            <div className="footer-info">
                <p>
                &copy; <span id="displayYear"></span> By Lucas Coutant
                
                </p>
            </div>
            </div>
        </footer>

    )
};

export default Footer;