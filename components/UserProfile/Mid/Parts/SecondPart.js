import React from "react";
import styles from "../Middle.module.css";
import { BsCoin } from "react-icons/bs";
import { FaBitcoin } from "react-icons/fa";
import { AiFillPieChart } from "react-icons/ai";

const SecondPart = () => {
  return (
    <div style={{ padding: "5px" }}>
      <h2
        style={{
          textAlign: "end",
          wordBreak: "break-all",
          fontWeight: "500",
          fontSize: "32px",
          marginBottom: "30px",
        }}
      >
        Most Traded Assets
      </h2>
      <div className={styles.second_part_body}>
        {/* card-1 */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2,1fr)",
            marginBottom: "20px",
          }}
        >
          <div>
            <p style={{ textAlign: "end" }}>4.50%</p>
          </div>
          <div style={{ display: "flex", justifyContent: "flex-end" }}>
            <p style={{ color: "#717171" }}>Crypto Currency</p>
            <BsCoin
              style={{
                marginLeft: "10px",
                fontWeight: "bold",
                fontSize: "20px",
              }}
            ></BsCoin>
          </div>
        </div>
        {/* card-2 */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2,1fr)",
            marginBottom: "20px",
          }}
        >
          <div>
            <p style={{ textAlign: "end" }}>7.0%</p>
          </div>
          <div style={{ display: "flex", justifyContent: "flex-end" }}>
            <p style={{ color: "#717171" }}>Indications</p>
            <BsCoin
              style={{
                marginLeft: "10px",
                fontWeight: "bold",
                fontSize: "20px",
              }}
            ></BsCoin>
          </div>
        </div>
        {/* card-3 */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2,1fr)",
            marginBottom: "20px",
          }}
        >
          <div>
            <p style={{ textAlign: "end" }}>0%</p>
          </div>
          <div style={{ display: "flex", justifyContent: "flex-end" }}>
            <p style={{ color: "#717171" }}>Coins</p>
            <FaBitcoin
              style={{
                fontWeight: "bold",
                marginLeft: "10px",
                fontSize: "20px",
              }}
            ></FaBitcoin>
          </div>
        </div>
        {/* card-4 */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2,1fr)",
            marginBottom: "20px",
          }}
        >
          <div>
            <p style={{ textAlign: "end" }}>1.15%</p>
          </div>
          <div style={{ display: "flex", justifyContent: "flex-end" }}>
            <p style={{ color: "#717171" }}>Goods</p>
            <AiFillPieChart
              style={{
                marginLeft: "10px",
                fontWeight: "bold",
                fontSize: "20px",
              }}
            ></AiFillPieChart>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecondPart;
