import React from "react";
import styles from "../Middle.module.css";

const FirstPart = () => {
  return (
    <div>
      <h2 className="text-end text-lg font-bold mb-6 px-4">
        Market Distribution
      </h2>
      <div className="grid grid-cols-3 gap-5 px-4">
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
