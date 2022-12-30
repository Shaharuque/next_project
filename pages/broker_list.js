import React from "react";
import Questions from "../components/FindMyBroker1/Questions/Questions";
import BrokerList from "../components/FindMyBroker1/YourBrokerList/BrokerList";

const broker_list = () => {
  return (
    <>
      <div className="bg-[#01AEAB] p-6">
        <h1 className="text-center text-white">------</h1>
      </div>
      <div
        className=""
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(2,1fr)",
          gap: "20px",
          margin: "102px",
        }}
      >
        <Questions></Questions>
        <div>
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
          <BrokerList></BrokerList>
        </div>
      </div>
    </>
  );
};

export default broker_list;
