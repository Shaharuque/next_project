import React, { useState } from "react";
import styles from "./style/Brokerlist.module.css";
import { AiFillStar } from "react-icons/ai";
import Broker from "./Broker";
const BrokerList = () => {
  const [data, setData] = useState([1, 1, 1, 1, 1]);
  return (
    <div className={styles.main_div}>
      {data?.map((each, index) => (
        <Broker key={index} data={data} indexNumber={index}></Broker>
      ))}
    </div>
  );
};

export default BrokerList;
