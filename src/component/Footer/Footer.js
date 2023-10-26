import * as React from "react";
import "./Footer.css"
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <>
    <div className='main-footer'>

    <div className='all-footer'>

      <div className='logo-connect'>

        <div className='logo-job'>
          <Link to='/'><h1>Naukri Job</h1></Link>
        </div>

        <div className='connect-job'>
          <h4>Connect with us</h4>
          <div className='connect-social'>
            <i className='fa-brands fa-facebook-square'></i>
            <i className='fa-brands fa-instagram-square'></i>
            <i className='fa-brands fa-twitter-square'></i>
            <i className='fa-brands fa-linkedin'></i>
          </div>
        </div>
      </div>

      <div className='footer-detail'>
        <div className='footer-list'>
          <ul>
            <li>About us</li>
            <li>Careers</li>
            <li>Employer home</li>  
            <li>Sitemap</li>
          </ul>
        </div>
        <div className='footer-list'>
          <ul>
            <li>Help center</li>
            <li>Notices</li>
            <li>Grievances</li>  
            <li>Report issue</li>
          </ul>
        </div>
        <div className='footer-list'>
          <ul>
            <li>Privacy policy</li>
            <li>Terms & conditions</li>
            <li>Fraud alert</li>  
            <li>Trust & safety</li>
          </ul>
        </div>
      </div>

    </div>
    <hr></hr>

    <div className='all-rights'>
      <p>All trademarks are the property of their respective owners</p>
      <p>All rights reserved © 2023 Info Edge (India) Ltd.</p>
    </div>

    </div>
    </>
  );
}

export default Footer;