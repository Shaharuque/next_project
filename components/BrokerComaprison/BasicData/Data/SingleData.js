import React from "react";
import { AiFillStar } from "react-icons/ai";
import { BsExclamationCircleFill } from "react-icons/bs";
import { FcBearish } from "react-icons/fc";

const SingleData = () => {
  return (
    <div className="p-2 mt-0 sm:mt-5">
      <h1 className="text-center font-bold">Overall Score</h1>
      <div className="flex items-center justify-center mt-2">
        <AiFillStar className="text-[#DFB300]" />
        <AiFillStar className="text-[#DFB300]" />
        <AiFillStar className="text-[#DFB300]" />
        <AiFillStar className="text-[#DFB300]" />
        <p className="font-bold">(4.5)</p>
      </div>
      <p className="text-gray-400 text-center text-[12px] mt-2">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Non aliquam
        aperiam enim neque nihil recusandae voluptatem? Excepturi minima ad
        voluptatum.
      </p>
      <div className="flex justify-center items-center mt-5">
        <FcBearish className="mr-1 text-black font-bold" />
        <p>Best Online Broker</p>
      </div>
      <div className="flex justify-center items-center mt-3">
        <BsExclamationCircleFill className="mr-2 text-blue-500" />
        <p>Country of Origin</p>
      </div>
      <p className="font-bold text-[16px] text-center">U.S.A</p>
    </div>
  );
};

export default SingleData;
