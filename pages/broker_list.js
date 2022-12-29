import React from "react";
import Questions from "../components/FindMyBroker1/Questions/Questions";
import BrokerList from "../components/FindMyBroker1/YourBrokerList/BrokerList";

const broker_list = () => {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(2,1fr)",
        margin: "102px",
      }}
    >
      <Questions></Questions>
      <BrokerList></BrokerList>
    </div>
  );
};

export default broker_list;
