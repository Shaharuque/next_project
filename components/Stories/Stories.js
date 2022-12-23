import Link from "next/link";
import styles from "./Card.module.css";
import { BsMoonStarsFill } from "react-icons/bs";

const Stories = () => {
  return (
    <div className={styles.cardDiv}>
      {/* first card */}
      <div className={styles.card}>
        <div className={styles.imageStyle}>
          <img
            src="https://cdn.dribbble.com/users/2556278/screenshots/7409304/loveclip_still_2x.gif?compress=1&resize=400x300"
            alt="Avatar"
            style={{
              width: "100%",
              borderRadius: "5px",
            }}
          />
        </div>
        <div className={styles.container}>
          <h4>
            <b>Test</b>
          </h4>
          <p>Shahrukhamin27@gmail.com</p>
        </div>
      </div>
      {/* second card */}
      <div className={styles.card}>
        <div className={styles.imageStyle}>
          <img
            src="https://cdn.dribbble.com/users/2556278/screenshots/7409304/loveclip_still_2x.gif?compress=1&resize=400x300"
            alt="Avatar"
            style={{ width: "100%", borderRadius: "5px" }}
          />
        </div>
        <div className={styles.container}>
          <h4>
            <b>Test</b>
          </h4>
          <p>Shahrukhamin27@gmail.com</p>
        </div>
      </div>
      {/* third card */}
      <div className={styles.card}>
        <div className={styles.imageStyle}>
          <img
            src="https://cdn.dribbble.com/users/2556278/screenshots/7409304/loveclip_still_2x.gif?compress=1&resize=400x300"
            alt="Avatar"
            style={{ width: "100%", borderRadius: "5px" }}
          />
        </div>
        <div className={styles.container}>
          <h4>
            <b>Test</b>
          </h4>
          <p>Shahrukhamin27@gmail.com</p>
        </div>
      </div>
      {/* fourth card */}
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
          <BsMoonStarsFill style={{ color: "teal", marginLeft: "2px" }} />
        </div>
        <div className={styles.container}>
          <h4>
            <b>Test</b>
          </h4>
          <p>Shahrukhamin27@gmail.com</p>
        </div>
      </div>
    </div>
  );
};

export default Stories;
