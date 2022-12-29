import React from "react";
import styles from "../Middle.module.css";

const FirstPart = () => {
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
        Market Distribution
      </h2>
      <div className={styles.first_part_body}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "end",
          }}
        >
          <h2>NZDUSD</h2>
          <div style={{ display: "flex" }}>
            <p>159</p>
            <hr></hr>
            <p>5%</p>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "end",
          }}
        >
          <h2>XACAD</h2>
          <div style={{ display: "flex" }}>
            <p>159</p>
            <hr></hr>
            <p>5%</p>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "end",
          }}
        >
          <h2>USCAD</h2>
          <div style={{ display: "flex" }}>
            <p>159</p>
            <hr></hr>
            <p>5%</p>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "end",
          }}
        >
          <h2>GBPUSD</h2>
          <div style={{ display: "flex" }}>
            <p>159</p>
            <hr></hr>
            <p>5%</p>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "end",
          }}
        >
          <h2>GBPUSD</h2>
          <div style={{ display: "flex" }}>
            <p>159</p>
            <hr></hr>
            <p>5%</p>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "end",
          }}
        >
          <h2>GBPUSD</h2>
          <div style={{ display: "flex" }}>
            <p>159</p>
            <hr></hr>
            <p>5%</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FirstPart;
