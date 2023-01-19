import React, { useEffect, useState } from "react";
import styles from "./Slider.module.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import SingleSlider from "./singleSlider/SingleSlider";
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
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://www.flagedu.com/api/story/data/")
      .then((res) => res.json())
      .then((d) => setData(d?.success));
  }, []);
  var settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 4,
    slidesToScroll: 2,
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
        <div>
          <Slider {...settings}>
            {data?.splice(0, 2)?.map((index, story) => (
              <SingleSlider key={index} story={story}></SingleSlider>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default SliderImage;
