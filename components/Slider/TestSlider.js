import React from 'react';
import Slider from 'react-slick';
import styles from './Sliders.module.css';

const sliderData = [
    {
      name: 'One',
      image:
        'https://images.unsplash.com/photo-1502877338535-766e1452684a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=750&q=80'
    },
    {
      name: 'Two',
      image:
        'https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=750&q=80'
    },
    {
      name: 'Three',
      image:
        'https://images.unsplash.com/photo-1526726538690-5cbf956ae2fd?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80'
    },
    {
      name: 'Four',
      image:
        'https://images.unsplash.com/photo-1494976388531-d1058494cdd8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80'
    },
    {
      name: 'Five',
      image:
        'https://images.unsplash.com/photo-1493238792000-8113da705763?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80'
    }
  ];
const Sliders = () => {
    if (!Array.isArray(sliderData) || sliderData.length <= 0) {
      return null;
    }
  
    const GalleryPrevArrow = ({ currentSlide, slideCount, ...props }) => {
      const { className, onClick } = props;
  
      return (
        <div {...props} className="custom-prevArrow" onClick={onClick}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" />
          </svg>
        </div>
      );
    };
    const GalleryNextArrow = ({ currentSlide, slideCount, ...props }) => {
      const { className, onClick } = props;
  
      return (
        <div {...props} className="custom-nextArrow" onClick={onClick}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path d="M7.33 24l-2.83-2.829 9.339-9.175-9.339-9.167 2.83-2.829 12.17 11.996z" />
          </svg>
        </div>
      );
    };
  
    const settings = {
      className: 'center',
      centerMode: true,
      focusOnSelect: true,
      infinite: true,
      centerPadding: '100px',
      slidesToShow: 3,
      speed: 500,
      nextArrow: <GalleryNextArrow />,
      prevArrow: <GalleryPrevArrow />
    };
  
    return (
      <Slider {...settings}>
        {sliderData.map((slide, index) => {
          return (
            <div key={index}>
              <img src={slide.image} alt="slider" key={index} className={styles.image}/>
              <span>{slide.name}</span>
            </div>
          );
        })}
      </Slider>
    );
  };
  
  export default Sliders;