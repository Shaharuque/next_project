import React, { useState } from "react";
import styles from "./ChartCard.module.css";
import SingleChartCard from "./SingleChartCard";

const ChartCard = () => {
  const [totalCard, setTotalCard] = useState([1, 1, 1, 1, 1, 1, 1, 1]);
  return (
    <div>
      <div className={styles.chart_card}>
        {totalCard?.map((each, index) => (
          <SingleChartCard key={index}></SingleChartCard>
        ))}
      </div>
    </div>
  );
};

export default ChartCard;
