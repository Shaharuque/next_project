import React from "react";
import Navbar from "../navbar/Navbar";
import ChartCard from "./Charts/CardComponent/ChartCard";
import Middle from "./Mid/Middle";
import TopPart from "./Top/TopPart";

const UserProfilePage = () => {
  return (
    <div>
      <Navbar></Navbar>
      <TopPart></TopPart>
      <Middle></Middle>
      <ChartCard></ChartCard>
    </div>
  );
};

export default UserProfilePage;
