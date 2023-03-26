import React from 'react';
import '../styles/components/Footer.scss';
import SocialMedia from './SocialMedia';

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='container'>
        <section className='coffee'>
          <div className='logo'>Location</div>
          <p className='paragraph'>Cafetria is located in downtown Warsaw, New York at the crossroads of Route 20A and Route 19.</p>
        </section>
        <section className='menu'>
          <h2>Quick links</h2>
          <nav>
            <a href='/'>Home</a>
            <a href='/'>Reviews</a>
            <a href='/'>About Us</a>
            <a href='/'>The Store</a>
            <a href='/'>News</a>
          </nav>
        </section>
        <section className='contact'>
          <h2>Contact</h2>
          <div>
            <span>contact@cafetria.com</span>
            <span>1-585-786-8181</span>
          </div>
          <SocialMedia />
        </section>
      </div>
      <a href='https://github.com/siavash-sattari' target='_blank' className='by' rel='noreferrer'>
        By Siavash Sattari
      </a>
    </footer>
  );
};

export default Footer;
