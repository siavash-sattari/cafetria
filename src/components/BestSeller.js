import React, { useEffect, useState } from 'react';
import '../styles/components/BestSeller.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import img1 from '../assets/prod1.webp';
import img2 from '../assets/prod2.webp';
import img3 from '../assets/prod3.webp';
import img4 from '../assets/prod4.webp';
import img5 from '../assets/prod5.webp';
import img6 from '../assets/prod6.webp';
import img7 from '../assets/prod7.webp';
import img8 from '../assets/prod8.webp';
import 'swiper/css';
import { ReactComponent as ArrowSvg } from '../assets/arrow.svg';
import AOS from 'aos';
import 'aos/dist/aos.css';

const products = [
  {
    name: 'Macchiato',
    price: '$ 12.99',
    cal: '185 cal',
    img: img1
  },
  {
    name: 'Latte',
    price: '$ 8.95',
    cal: '185 cal',
    img: img2
  },
  {
    name: 'Piccolo Latte',
    price: '$ 5.49',
    cal: '185 cal',
    img: img3
  },
  {
    name: 'Cappuccino',
    price: '$ 12.99',
    cal: '185 cal',
    img: img4
  },
  {
    name: 'LATTE (PLAIN)',
    price: '$ 8.52',
    cal: '185 cal',
    img: img5
  },
  {
    name: 'Raf',
    price: '$ 8.99',
    cal: '185 cal',
    img: img6
  },
  {
    name: 'Cafe Cubano',
    price: '$ 14.25',
    cal: '185 cal',
    img: img7
  },
  {
    name: 'Espresso Romano',
    price: '$ 11.59',
    cal: '185 cal',
    img: img8
  }
];

const BestSeller = () => {
  useEffect(() => {
    AOS.init({
      duration: 800
    });
  }, []);

  const [swiper, setSwiper] = useState(null);

  const nextSlideHandler = () => {
    swiper.slideNext();
  };

  const prevSlideHandler = () => {
    swiper.slidePrev();
  };

  return (
    <section className='section-pd best-seller'>
      <div className='container' data-aos='fade-up'>
        <div className='header-best-seller'>
          <div className='title'>
            <h2 className='h2'>Our best seller</h2>
            <p className='paragraph'>We have over 8 different flavors to choose from</p>
          </div>
          <a href='/' className='btn'>
            See all
          </a>
        </div>
        <div className='slider-container'>
          <Swiper
            spaceBetween={50}
            slidesPerView={4}
            scrollbar={{ draggable: true }}
            className='slider'
            grabCursor='true'
            touchEventsTarget='container'
            onSwiper={s => {
              setSwiper(s);
            }}
            breakpoints={{
              200: {
                slidesPerView: 2,
                spaceBetween: 5
              },
              450: {
                slidesPerView: 2,
                spaceBetween: 20
              },
              910: {
                slidesPerView: 4,
                spaceBetween: 20
              },
              1200: {
                slidesPerView: 4,
                spaceBetween: 50
              }
            }}>
            {products.map(prod => (
              <SwiperSlide key={prod.name} className='slide-item'>
                <a href='/'>
                  <img src={prod.img} alt={prod.name} />
                  <span className='cal'>{prod.cal}</span>
                  <h3>{prod.name}</h3>
                  <span className='price'>{prod.price}</span>
                </a>
              </SwiperSlide>
            ))}
          </Swiper>
          <button onClick={prevSlideHandler} className='arrow arrow-left' title='slide anterior'>
            <ArrowSvg />
          </button>
          <button onClick={nextSlideHandler} className='arrow arrow-right' title='slide posterior'>
            <ArrowSvg />
          </button>
        </div>
      </div>
    </section>
  );
};

export default BestSeller;
