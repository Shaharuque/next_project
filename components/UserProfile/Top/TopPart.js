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
        <hr className={styles.divider}></hr>
        <div className={styles.part_div}>
          <div>
            <span>0</span>
            <p>Month rating</p>
          </div>
          <div>
            <span>0</span>
            <p>Reputation</p>
          </div>
          <div>
            <span>0.00</span>
            <p>Monthly Points</p>
          </div>
        </div>
        <hr className={styles.divider}></hr>
        <div className={styles.part_div}>
          <div>
            <span>0</span>
            <p style={{ textAlign: "end" }}>User Name</p>
          </div>
          <div>
            <span>0</span>
            <p>Life is Good</p>
          </div>
          <div>
            <span>0.00</span>
            <p>44 Followers</p>
          </div>
          <div>
            <span>1.0</span>
            <p>59 Recommendations</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopPart;
