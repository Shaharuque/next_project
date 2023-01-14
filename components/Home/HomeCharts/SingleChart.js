import React, { useEffect, useState } from "react";
import styles from "./chart.module.css";
import ChartBottom from "./ChartBottom/ChartBottom";
import LineChart from "./HomeLineChart/LineChart";

const SingleChartCard = () => {
  const [row, setRows] = useState([1, 2, 3, 4, 5, 6, 7]);
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
      <div className="bg-slate-200 mt-8 rounded p-4">
        <div className="flex justify-between text-[12px]">
          <p>Change</p>
          <p>Asking Price</p>
          <p>Change</p>
        </div>
        {/* showing table row */}
        {row?.map((e, index) => (
          <ChartBottom key={index}></ChartBottom>
        ))}
      </div>
    </div>
  );
};

export default SingleChartCard;
