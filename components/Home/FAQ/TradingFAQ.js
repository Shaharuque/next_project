import React, { useEffect, useState } from "react";
import styles from "./Trading.module.css";

const TradingFAQ = () => {
  const [trendingData, setTrendingData] = useState();
  useEffect(() => {
    fetch("https://www.flagedu.com/api/home/data/")
      .then((res) => res.json())
      .then((result) => setTrendingData(result?.success));
  }, []);
  console.log("Trending Data", trendingData);

  return (
    <div className={styles.trading_div}>
      <div>
        <h1 className={styles.title}>
          Tranding Conditions and a safe Experience
        </h1>
        <p className={styles.paragraph}>
          {trendingData?.header_sort_description}
        </p>
        <div className={styles.btn}>
          <button>For More Details</button>
        </div>
      </div>
      <div>
        <div className={styles.imageStyle}>
          <img
            src={`https://www.flagedu.com/${trendingData?.home_section_one_image}`}
            alt="Avatar"
            style={{ width: "100%", borderRadius: "5px" }}
          />
        </div>
      </div>
    </div>
  );
};

export default TradingFAQ;
