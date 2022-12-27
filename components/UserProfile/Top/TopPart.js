import React from "react";
import styles from "./TopPart.module.css";

const TopPart = () => {
  return (
    <div className={styles.main_div}>
      <div className={styles.image_div}>
        <img
          className={styles.profile_image}
          src="https://www.himalmag.com/wp-content/uploads/2019/07/sample-profile-picture.png"
          alt="ema-pic"
        />
      </div>
      <div className={styles.body_div}>
        <div className={styles.part_div}>
          <h1 style={{ textAlign: "center" }}>Part1</h1>
          <div>
            <span>0</span>
            <p>Statistics</p>
          </div>
          <div>
            <span>0</span>
            <p>Statistics</p>
          </div>
          <div>
            <span>0.00</span>
            <p>Statistics</p>
          </div>
          <div>
            <span>1.0</span>
            <p>Statistics</p>
          </div>
        </div>
        <div className={styles.part_div}>
          <h1 style={{ textAlign: "center" }}>Part1</h1>
        </div>
        <div className={styles.part_div}>
          <h1 style={{ textAlign: "center" }}>Part1</h1>
        </div>
      </div>
    </div>
  );
};

export default TopPart;
