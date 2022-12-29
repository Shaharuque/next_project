import React from "react";
import styles from "./style/Brokerlist.module.css";
import { AiFillStar } from "react-icons/ai";

const Broker = () => {
  return (
    <>
      <div className={styles.list_div}>
        <div>
          <button className={styles.btn}>Visit Broker</button>
        </div>
        <div>
          <div className={styles.name_star}>
            <h3>User Name</h3>
            <div style={{ color: "#DFB300" }}>
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <p style={{ color: "black", fontWeight: "700" }}>(5.0)</p>
            </div>
          </div>
          <div className={styles.img_div}>
            <img
              src="https://img.freepik.com/premium-vector/bitcoin-crypto-currency-blockchain-flat-orange-icon-white-background-block-chain-bitcoin-sticker-web-print-bitcoin-logo-vector-illustration_642540-171.jpg?w=2000"
              alt="coin"
            />
          </div>
          <div>
            <button className={styles.top_btn}>
              Top <p>1</p>
            </button>
          </div>
        </div>
      </div>
      <hr style={{ margin: "0 20px" }}></hr>
    </>
  );
};

export default Broker;
