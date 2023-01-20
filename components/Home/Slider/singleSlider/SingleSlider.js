import React from "react";
import styles from "../Slider.module.css";
import Image from "next/image";

const SingleSlider = ({ card }) => {
  const { image } = card || {};
  // console.log("image url", image);
  return (
    <div>
      <img
        className="h-[200px] w-[90%] rounded"
        src={`https://www.flagedu.com/${image}`}
        alt="Picture of the author"
        // width={500}
        // height={500}
      />
    </div>
  );
};

export default SingleSlider;
