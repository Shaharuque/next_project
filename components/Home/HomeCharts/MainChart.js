import React, { useState } from "react";
import styles from "./chart.module.css";
import SingleChartCard from "./SingleChart";

const MainChart = () => {
  const [totalCard, setTotalCard] = useState([1, 1, 1]);
  return (
    <div>
      <div>
        <div className=" bg-[#F1F2F4] pt-12">
          <h1 className="font-[700] text-right text-[18px] pr-4">Markets</h1>
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
