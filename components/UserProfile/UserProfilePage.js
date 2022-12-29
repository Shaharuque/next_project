import React from "react";
import ChartCard from "./Charts/CardComponent/ChartCard";
import Middle from "./Mid/Middle";
import TopPart from "./Top/TopPart";

const UserProfilePage = () => {
  return (
    <div>
      <TopPart></TopPart>
      <Middle></Middle>
      <ChartCard></ChartCard>
    </div>
  );
};

export default UserProfilePage;
