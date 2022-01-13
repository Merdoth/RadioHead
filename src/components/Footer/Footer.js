import React from 'react';

import './Footer.css';
import RadioHead from '../../assets/radiohead.svg';
import Instagram from '../../assets/instagram.svg';
import Facebook from '../../assets/facebook.svg';
import Twitter from '../../assets/twitter.svg';

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-top">
        <div className="footer-content">
          <div className="footer-left">
            <img src={RadioHead} alt="Application logo" />
            <p>Radiohead is the first global music streaming service with high fidelity sound, hi-def video quality, along with expertly curated playlists and original content making it a trusted source for music and culture.</p>
          </div>

          <div className="footer-right">
            <div className="right-content">
              <h3>Get Started</h3>
              <a href="#">Get Started</a>
              <a href="#">Playlist Import</a>
              <a href="#">Supported Devices</a>
              <a href="#">Get Support</a>
            </div>

            <div className="right-content">
            <h3>Discover</h3>
              <a href="#">About</a>
              <a href="#">Magazine</a>
            </div>

            <div className="right-content">
            <h3>Account</h3>
              <a href="#">Sign Up</a>
              <a href="#">Redeem Voucher</a>
              <a href="#">Redeem Giftcard</a>
              <a href="#">Manage Account</a>
              <a href="#">Store</a>
            </div>

            <div className="right-content">
            <h3>Company</h3>
              <a href="#">Partners</a>
              <a href="#">Careers</a>
              <a href="#">Press</a>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="bottom-content">
          <a href="#"><img src={Instagram} alt="instagram" /></a>
          <a href="#"><img src={Facebook} alt="facebook" /></a>
          <a href="#"><img src={Twitter} alt="twitter" /></a>
        </div>
        </div>
    </div>
  )
}

export default Footer;
