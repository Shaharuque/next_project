import React from "react";
import Navbar from "../navbar/Navbar";
import ChartCard from "./Charts/CardComponent/ChartCard";
import TopPart from "./Top/TopPart";

const UserProfilePage = () => {
  return (
    <div>
      <Navbar></Navbar>
      <TopPart></TopPart>
      <ChartCard></ChartCard>
    </div>
  );
};

export default UserProfilePage;
