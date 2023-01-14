import React, { useState } from "react";
import styles from "./chart.module.css";
import SingleChartCard from "./SingleChart";

const MainChart = () => {
  const [totalCard, setTotalCard] = useState([1, 1, 1]);
  return (
    <div>
      <div className={styles.chart_div}>
        <div>
          <h1 className="font-bold text-right text-[20px] pr-6">Markets</h1>
        </div>
        <div className={styles.chart_card}>
          {totalCard?.map((each, index) => (
            <SingleChartCard key={index}></SingleChartCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MainChart;
