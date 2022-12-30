import React from "react";
import styles from "./style/Brokerlist.module.css";
import { AiFillStar } from "react-icons/ai";

//getting whole data from the parent component each iteration to do conditional rendering of <hr></hr>
const Broker = ({ data, indexNumber }) => {
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
          <div className="w-16 h-16 m-3">
            <img
              className="rounded-lg"
              src="https://pbs.twimg.com/ext_tw_video_thumb/1526841017537900545/pu/img/UvthEjN4vZLHa-Pd.jpg"
              alt="coin"
            />
          </div>
          <div>
            <button className={styles.top_btn}>
              Top <p>{indexNumber + 1}</p>
            </button>
          </div>
        </div>
      </div>
      {data?.length === indexNumber + 1 ? (
        <></>
      ) : (
        <hr className={styles.divider}></hr>
      )}
    </>
  );
};

export default Broker;
