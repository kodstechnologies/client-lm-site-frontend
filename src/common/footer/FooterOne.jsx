import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaPinterestP, FaLinkedin, FaInstagram, FaVimeoV, FaDribbble, FaBehance, FaEnvelopeOpen, FaTiktok } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import ServiceData from "../../data/service/ServiceMain.json";
import { slugify } from '../../utils';
const PUBLIC_URL = import.meta.env.VITE_API_URL;

const getServiceData = ServiceData;

const FooterOne = ({ parentClass }) => {

    return (
        <footer className={`footer-area ${parentClass}`}>
            <div className="container">
                {/* <div className="footer-top"> */}
                {/* <div className="footer-social-link">
                        <ul className="list-unstyled">
                            <li><Link to="https://facebook.com/"><FaFacebookF /></Link></li>
                            <li><Link to="https://twitter.com/"><FaXTwitter /></Link></li>
                            <li><Link to="https://www.linkedin.com/"><FaLinkedin /></Link></li>
                            <li><Link to="https://www.instagram.com/"><FaInstagram /></Link></li>
                            
                        </ul>
                    </div> */}
                {/* </div> */}
                <div className="footer-main">
                    <div className="row">
                        <div className="col-xl-6 col-lg-5">
                            <div className="footer-widget border-end">
                                <div className="footer-newsletter">
                                    <br />
                                    <h2 className="title">Get in touch!</h2>
                                    <Link to="https://www.linkedin.com/company/little-money-technologies"><FaLinkedin style={{ height: "40px", width: "40px" }} /></Link>

                                    {/* <p>Fusce varius, dolor tempor interdum tristique, dui urna bib endum magna, ut ullamcorper purus</p>
                                    <form>
                                        <div className="input-group">
                                            <span className="mail-icon"><FaEnvelopeOpen /> </span>
                                            <input type="email" className="form-control" placeholder="Email address" />
                                            <button className="subscribe-btn" type="submit">Subscribe</button>
                                        </div>
                                    </form> */}
                                </div>


                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-7">
                            <div className="row">
                                <div className="col-sm-6">
                                    <div className="footer-widget">
                                        <br />
                                        <h6 className="widget-title">Services</h6>
                                        <div className="footer-menu-link">
                                            <ul className="list-unstyled">
                                                {/* {getServiceData.slice(0, 6).map((data, index) => (
                                                    <li key={index}>
                                                        <Link to={PUBLIC_URL + `/service-details/${slugify(data.title)}`}>{data.title}</Link>
                                                    </li>
                                                ))} */}
                                                <li> <Link to="/personal-loan">Personal Loan</Link> </li>

                                                <li> <Link to="/business-loan">Business Loan</Link> </li>

                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                {/* <div className="col-sm-3">
                                    <div className="footer-widget">
                                        <h6 className="widget-title">Resourses</h6>
                                        <div className="footer-menu-link">
                                            <ul className="list-unstyled">
                                                <li><Link to={PUBLIC_URL + "/blog-grid"}>Blog</Link></li>
                                                <li> <Link to={PUBLIC_URL + "/case-study"}>Case Studies</Link></li>
                                                <li><Link to={PUBLIC_URL + "/project-grid-one"}>Portfolio</Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div> */}
                                <div className="col-sm-3">
                                    <div className="footer-widget">
                                        <br />
                                        <h6 className="widget-title">Support</h6>
                                        <div className="footer-menu-link">
                                            <ul className="list-unstyled">
                                                <li><Link to="/contact">Contact Us</Link></li>
                                                <li> <Link to="/privacy-policy" target='_blank'>Privacy Policy</Link></li>
                                                <li><Link to="/terms-use" target='_blank'>Terms & Conditions </Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer-bottom">
                    <div className="row">
                        {/* <div className="col-md-6"> */}
                        <div className="footer-copyright text-center">
                            <span className="copyright-text">© {new Date().getFullYear()}. All rights reserved by <a href="https://littlemoney.co.in">Little Money Technologies Pvt. Ltd.</a></span>
                        </div>
                        {/* </div> */}
                        {/* <div className="col-md-6">
                            <div className="footer-bottom-link">
                                <ul className="list-unstyled">
                                    <li><Link to="/privacy-policy">Privacy Policy</Link></li>
                                    <li><Link to="/terms-use">Terms & Conditions</Link></li>
                                </ul>
                            </div>
                        </div> */}
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default FooterOne;