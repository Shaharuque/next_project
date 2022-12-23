import React from "react";
import styles from "./Card.module.css";
import { BsMoonStarsFill } from "react-icons/bs";
import { AiFillStar } from "react-icons/ai";

const StoryCard = (props) => {
  return (
    <div className={styles.card}>
      <div className={styles.imageStyle}>
        <img
          src="https://cdn.dribbble.com/users/2556278/screenshots/7409304/loveclip_still_2x.gif?compress=1&resize=400x300"
          alt="Avatar"
          style={{ width: "100%", borderRadius: "5px" }}
        />
      </div>
      <div className={styles.card_title}>
        <p>Islamic Account</p>
        <BsMoonStarsFill style={{ color: "teal", marginLeft: "5px" }} />
      </div>
      <div className={styles.card_body}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            margin: "16px 0",
          }}
        >
          <p style={{ color: "teal", fontWeight: "bold" }}>10</p>
          <p style={{ fontWeight: "bold" }}>Number of Reviews</p>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            color: "#FFCC00",
          }}
        >
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <p style={{ color: "black", fontWeight: "bold" }}>(4.4)</p>
        </div>
      </div>
      <div className={styles.container}>
        <button className={styles.button1}>Open an account</button>
        <button className={styles.button2}>Company Profile</button>
      </div>
    </div>
  );
};

export default StoryCard;
