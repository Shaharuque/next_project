import React from "react";
import styles from "./TopPart.module.css";
import { BsStarHalf } from "react-icons/bs";
import { AiOutlineLineChart, AiFillPieChart } from "react-icons/ai";

const TopPart = () => {
  return (
    <div className="px-8 mb-16">
      <div className={styles.image_div}>
        <img
          className={styles.profile_image}
          src="https://www.himalmag.com/wp-content/uploads/2019/07/sample-profile-picture.png"
          alt="ema-pic"
        />
      </div>
      <div className="grid lg:grid-cols-3 md:grid-cols-1 lg:divide-x-2 mt-6">
        {/* 1st */}
        <div>
          <div className="grid grid-cols-2 my-3">
            <span className="text-end font-bold">0</span>
            <p className="text-end mx-6 text-[#717171]">Statistics</p>
          </div>
          <div className="grid grid-cols-2 my-3">
            <span className="text-end font-bold">0</span>
            <p className="text-end mx-6 text-[#717171]">Anlytics</p>
          </div>
          <div className="grid grid-cols-2 my-3">
            <span className="text-end font-bold">0.00</span>
            <p className="text-end mx-6 text-[#717171]">My Articles</p>
          </div>
          <div className="grid grid-cols-2 my-3">
            <span className="text-end font-bold">1.0</span>
            <p className="text-end mx-6 text-[#717171]">Thoughts</p>
          </div>
        </div>
        {/* 2nd */}
        <div>
          <div className="grid grid-cols-3 my-3">
            <p className="text-end font-bold">10</p>
            <div className="col-span-2 flex items-center justify-end mx-6">
              <p className="mr-2 text-[#717171]">Month-Rating</p>
              <BsStarHalf className=" text-end"></BsStarHalf>
            </div>
          </div>
          <div className="grid grid-cols-3 my-3">
            <p className="text-end font-bold">10</p>
            <div className="col-span-2 flex items-center justify-end mx-6">
              <p className="mr-2 text-[#717171]">Reputation</p>
              <AiOutlineLineChart className=" text-end"></AiOutlineLineChart>
            </div>
          </div>
          <div className="grid grid-cols-3 my-3">
            <p className="text-end font-bold">10.002</p>
            <div className="col-span-2 flex items-center justify-end mx-6">
              <p className="mr-2 text-[#717171]">Monthly Points</p>
              <AiFillPieChart className=" text-end"></AiFillPieChart>
            </div>
          </div>
        </div>
        {/* <hr className={styles.divider}></hr> */}
        <div>
          <p className="text-end mx-6 font-bold text-[20px]">User Name</p>
          <p className="text-end mx-6 text-[#717171]">Life is good</p>
          <p className="text-end mx-6 font-bold">6 Followers</p>
          <p className="text-end mx-6 font-bold text-[#01AEAB]">
            59 Connections
          </p>
        </div>
      </div>
    </div>
  );
};

export default TopPart;
