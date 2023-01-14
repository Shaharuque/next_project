import React, { useEffect, useState } from "react";
import styles from "./chart.module.css";
import LineChart from "./HomeLineChart/LineChart";

const SingleChartCard = () => {
  return (
    <div className={styles.card_main}>
      <div>
        <div className={styles.card_body}>
          <button className={styles.buy_button}>Forexces</button>
        </div>
      </div>
      <div>
        <LineChart></LineChart>
      </div>
      <div className={styles.chart_card_below}>
        <div>
          <h4>Stop loss</h4>
          <p style={{ textAlign: "end", fontWeight: "bold" }}>1.1001</p>
        </div>
        <div>
          <h4>Take Profit 3</h4>
          <p style={{ textAlign: "end", fontWeight: "bold" }}>1.1001</p>
        </div>
        <div>
          <h4>Take Profit 2</h4>
          <p style={{ textAlign: "end", fontWeight: "bold" }}>1.1001</p>
        </div>
        <div>
          <h4>Take Profit 1</h4>
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
