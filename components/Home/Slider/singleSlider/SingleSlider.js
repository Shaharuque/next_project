import React from "react";
import styles from "../Slider.module.css";
import Image from "next/image";

const SingleSlider = ({ story }) => {
  const { image } = story || {};
  console.log(image);
  return (
    <div>
      <img
        src={`https://www.flagedu.com${image}`}
        alt="Picture of the author"
        width={500}
        height={500}
      />
    </div>
  );
};

export default SingleSlider;
