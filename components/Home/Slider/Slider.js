import React from "react";
import styles from "./Slider.module.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "" }}
      onClick={onClick}
    />
  );
}

const SliderImage = () => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 5,
    slidesToScroll: 6,
    initialSlide: 0,
    nextArrow: <SampleNextArrow style={"black"} />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div>
      <div style={{ margin: "102px" }} className={styles.slick_slide}>
        <h3 style={{ textAlign: "end", marginBottom: "10px" }}>
          Today's Stories
        </h3>
        <Slider {...settings}>
          <div>
            <img
              className={styles.imageStyle}
              src="https://media.istockphoto.com/id/1370822454/photo/apocalyptic-city-war-zone.jpg?b=1&s=170667a&w=0&k=20&c=Mqr9Pz6FvZbT4sSNhWdXkWTOfYIwE2fKr623oWm0sIk="
              alt="Avatar"
            />
          </div>

          <div style={{ margin: "0 10px" }}>
            <img
              className={styles.imageStyle}
              src="https://media.istockphoto.com/id/1370822454/photo/apocalyptic-city-war-zone.jpg?b=1&s=170667a&w=0&k=20&c=Mqr9Pz6FvZbT4sSNhWdXkWTOfYIwE2fKr623oWm0sIk="
              alt="Avatar"
            />
          </div>

          <div>
            <img
              className={styles.imageStyle}
              src="https://media.istockphoto.com/id/1370822454/photo/apocalyptic-city-war-zone.jpg?b=1&s=170667a&w=0&k=20&c=Mqr9Pz6FvZbT4sSNhWdXkWTOfYIwE2fKr623oWm0sIk="
              alt="Avatar"
            />
          </div>

          <div>
            <img
              className={styles.imageStyle}
              src="https://media.istockphoto.com/id/1370822454/photo/apocalyptic-city-war-zone.jpg?b=1&s=170667a&w=0&k=20&c=Mqr9Pz6FvZbT4sSNhWdXkWTOfYIwE2fKr623oWm0sIk="
              alt="Avatar"
            />
          </div>

          <div>
            <img
              className={styles.imageStyle}
              src="https://media.istockphoto.com/id/1370822454/photo/apocalyptic-city-war-zone.jpg?b=1&s=170667a&w=0&k=20&c=Mqr9Pz6FvZbT4sSNhWdXkWTOfYIwE2fKr623oWm0sIk="
              alt="Avatar"
            />
          </div>

          <div>
            <img
              className={styles.imageStyle}
              src="https://media.istockphoto.com/id/1370822454/photo/apocalyptic-city-war-zone.jpg?b=1&s=170667a&w=0&k=20&c=Mqr9Pz6FvZbT4sSNhWdXkWTOfYIwE2fKr623oWm0sIk="
              alt="Avatar"
            />
          </div>

          <div>
            <img
              className={styles.imageStyle}
              src="https://media.istockphoto.com/id/1370822454/photo/apocalyptic-city-war-zone.jpg?b=1&s=170667a&w=0&k=20&c=Mqr9Pz6FvZbT4sSNhWdXkWTOfYIwE2fKr623oWm0sIk="
              alt="Avatar"
            />
          </div>

          <div>
            <img
              className={styles.imageStyle}
              src="https://media.istockphoto.com/id/1370822454/photo/apocalyptic-city-war-zone.jpg?b=1&s=170667a&w=0&k=20&c=Mqr9Pz6FvZbT4sSNhWdXkWTOfYIwE2fKr623oWm0sIk="
              alt="Avatar"
            />
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default SliderImage;
