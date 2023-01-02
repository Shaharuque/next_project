import React from "react";
import styles from "./Banner.module.css";

const Banner = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.text}>
        <h1>ASIC, The Australian Investment Agency,</h1>
        <h1>Monitors The Fincial Market</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt
          accusantium.
        </p>
        <input type="button" value="Learn More" />
        <input type="button" className={styles.btn} value="Broker Survey" />
      </div>
    </div>
  );
};

export default Banner;
