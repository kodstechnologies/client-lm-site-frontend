import React from 'react';
import { Link } from 'react-router-dom';
const PUBLIC_URL = import.meta.env.VITE_API_URL;

const FooterTwo = () => {

    return (
        <footer className="footer-area footer-dark">
            <div className="container">
                <div className="footer-bottom">
                <div className="row">
                    <div className="col-md-6">
                    <div className="footer-copyright">
                        <span className="copyright-text">© {new Date().getFullYear()}. All rights reserved by <a href="https://axilthemes.com/">Axilthemes</a>.</span>
                    </div>
                    </div>
                    <div className="col-md-6">
                    <div className="footer-bottom-link">
                        <ul className="list-unstyled">
                            <li><Link to={PUBLIC_URL + "/privacy-policy"}>Privacy Policy</Link></li>
                            <li><Link to={PUBLIC_URL + "/terms-use"}>Terms & Conditions</Link></li>
                        </ul>
                    </div>
                    </div>
                </div>
                </div>
            </div>
        </footer>
    )
}

export default FooterTwo;