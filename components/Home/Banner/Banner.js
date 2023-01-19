import React, { useEffect, useState } from "react";
import styles from "./Banner.module.css";

const Banner = () => {
  const [homeData, setHomeData] = useState();

  //background image dynamic
  var divImage = {
    backgroundImage:
      "url(" +
      "https://www.flagedu.com/" +
      homeData?.success?.header_background_image +
      ")",
  };
  useEffect(() => {
    fetch(`https://www.flagedu.com/api/home/data/`)
      .then((res) => res.json())
      .then((result) => setHomeData(result));
  }, []);

  return (
    <div style={divImage} className={styles.wrapper}>
      <div className={styles.text}>
        <h1>{homeData?.success?.header_title}</h1>
        <h1>{homeData?.success?.home_section_one_title}</h1>
        <p>{homeData?.success?.home_section_one_description}</p>
        <button className="font-sans text-[14px] border-white bg-teal-700 p-3 rounded hover:bg-black">
          Learn More
        </button>
        <input type="button" className={styles.btn} value="Broker Survey" />
      </div>
    </div>
  );
};

export default Banner;
