import React from "react";
import FirstPart from "./Parts/FirstPart";
import SecondPart from "./Parts/SecondPart";
import styles from "./Middle.module.css";

const Middle = () => {
  return (
    <div className={styles.main_div}>
      <FirstPart></FirstPart>
      <SecondPart></SecondPart>
    </div>
  );
};

export default Middle;
