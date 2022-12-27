import React from "react";
import styles from "../Middle.module.css";
import { BsCoin } from "react-icons/bs";

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
            <p style={{ textAlign: "end" }}>0%</p>
          </div>
          <div style={{ display: "flex", justifyContent: "flex-end" }}>
            <p style={{ color: "#717171" }}>Crypto Currency</p>
            <BsCoin
              style={{ margingRight: "5px", fontWeight: "bold" }}
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
            <p style={{ textAlign: "end" }}>0%</p>
          </div>
          <div style={{ display: "flex", justifyContent: "flex-end" }}>
            <p style={{ color: "#717171" }}>Indications</p>
            <BsCoin
              style={{ margingRight: "5px", fontWeight: "bold" }}
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
            <BsCoin
              style={{ margingRight: "5px", fontWeight: "bold" }}
            ></BsCoin>
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
            <BsCoin
              style={{ margingRight: "5px", fontWeight: "bold" }}
            ></BsCoin>
          </div>
        </div>
        {/* card-5 */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2,1fr)",
            marginBottom: "20px",
          }}
        >
          <div>
            <p style={{ textAlign: "end" }}>2.23%</p>
          </div>
          <div style={{ display: "flex", justifyContent: "flex-end" }}>
            <p style={{ color: "#717171" }}>Crypto Currency</p>
            <BsCoin
              style={{ margingRight: "5px", fontWeight: "bold" }}
            ></BsCoin>
          </div>
        </div>
        {/* card-6 */}
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
            <p style={{ color: "#717171" }}>Crypto Currency</p>
            <BsCoin
              style={{ margingRight: "5px", fontWeight: "bold" }}
            ></BsCoin>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecondPart;
