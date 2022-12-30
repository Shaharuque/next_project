import React from "react";
import styles from "../Middle.module.css";
import { BsCoin } from "react-icons/bs";
import { FaBitcoin } from "react-icons/fa";
import { AiFillPieChart } from "react-icons/ai";

const SecondPart = () => {
  return (
    <div>
      <h2 className="text-end text-lg font-bold mb-6 px-4">
        Most Traded Assets
      </h2>
      <div className="px-4">
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
            <BsCoin className="ml-3 font-bold text-[22px]"></BsCoin>
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
            <BsCoin className="ml-3 font-bold text-[22px]"></BsCoin>
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
            <FaBitcoin className="ml-3 font-bold text-[22px]"></FaBitcoin>
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
            <AiFillPieChart className="ml-3 font-bold text-[22px]"></AiFillPieChart>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecondPart;
