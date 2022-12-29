import React, { useState } from "react";
import styles from "./style/Brokerlist.module.css";
import { AiFillStar } from "react-icons/ai";
import Broker from "./Broker";
const BrokerList = () => {
  const [data, setData] = useState([1, 1, 1, 1, 1]);
  return (
    <div className={styles.main_div}>
      <p
        style={{
          lineHeight: "30px",
          fontSize: "32px",
          textAlign: "end",
          marginBottom: "20px",
        }}
      >
        Your Broker List
      </p>
      {data?.map((each, index) => (
        <Broker key={index}></Broker>
      ))}
    </div>
  );
};

export default BrokerList;
