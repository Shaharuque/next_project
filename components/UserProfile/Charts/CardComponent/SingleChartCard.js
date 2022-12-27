import React from "react";
import LineChart from "../LineChart/LineChart";
import styles from "./ChartCard.module.css";

const SingleChartCard = () => {
  return (
    <div>
      <div className={styles.card_top_part}>
        <div className={styles.card_body}>
          <button className={styles.buy_button}>Buy</button>
          <p style={{ marginLeft: "8px" }}>XAUUSD</p>
        </div>
        <div className={styles.card_body}>
          <p style={{ marginRight: "8px" }}>User Name</p>
          <img
            className={styles.dummy_img}
            src="https://www.himalmag.com/wp-content/uploads/2019/07/sample-profile-picture.png"
          />
        </div>
      </div>
      <div>
        <LineChart></LineChart>
      </div>
      <div className={styles.chart_card_below}>
        <div>
          <h3>Stop loss</h3>
          <p style={{ textAlign: "end", fontWeight: "bold" }}>1.1001</p>
        </div>
        <div>
          <h3>Take Profit 3</h3>
          <p style={{ textAlign: "end", fontWeight: "bold" }}>1.1001</p>
        </div>
        <div>
          <h3>Take Profit 2</h3>
          <p style={{ textAlign: "end", fontWeight: "bold" }}>1.1001</p>
        </div>
        <div>
          <h3>Take Profit 1</h3>
          <p style={{ textAlign: "end", fontWeight: "bold" }}>1.1001</p>
        </div>
      </div>
      <div className={styles.market_price_btn}>
        <button
          style={{
            padding: "10px 90px",
            fontWeight: "700",
            borderRadius: "5px",
          }}
        >
          <span>1,230: </span>Market Price
        </button>
      </div>
    </div>
  );
};

export default SingleChartCard;
