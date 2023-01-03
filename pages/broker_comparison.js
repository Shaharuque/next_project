import React from "react";
import Banner from "../components/BrokerComaprison/Banner/Banner";
import MainPage from "../components/BrokerComaprison/MainPage";

const broker_comparison = () => {
  return (
    <div>
      <Banner></Banner>
      <div className="mt-12 mb-8">
        <MainPage></MainPage>
      </div>
    </div>
  );
};

export default broker_comparison;
