import React, { useEffect } from 'react';
import '../styles/components/About.scss';
import img from '../assets/about-img.jpg';
import AOS from 'aos';
import 'aos/dist/aos.css';

const About = () => {
  useEffect(() => {
    AOS.init({
      duration: 800
    });
  }, []);

  return (
    <section className='about section-pd'>
      <div className='container' data-aos='fade-up'>
        <div className='col-1'>
          <h2 className='h2'>About us</h2>
          <p className='paragraph'>
            Cafetria is a family owned and operated coffee shop which provides a small town experience with big city appeal.
          </p>
          <p className='paragraph'>
            It’s warm and friendly environment provides an excellent atmosphere to enjoy a great cup of coffee or sandwich, hang with friends, or do a
            bit of work using the free wifi.
          </p>
          <a href='/' className='btn'>
            See more
          </a>
        </div>
        <div className='img-container'>
          <img src={img} alt='coffee' className='img-about' />
        </div>
      </div>
      <div className='ornament' />
    </section>
  );
};

export default About;
