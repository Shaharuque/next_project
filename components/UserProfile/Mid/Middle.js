import React from "react";
import FirstPart from "./Parts/FirstPart";
import SecondPart from "./Parts/SecondPart";
import styles from "./Middle.module.css";

const Middle = () => {
  return (
    <div className="bg-[#F1F2F4] grid lg:grid-cols-2 grid-cols-1 lg:gap-0 gap-6 lg:divide-x-[2px] px-8 py-6">
      <FirstPart></FirstPart>
      <SecondPart></SecondPart>
    </div>
  );
};

export default Middle;
