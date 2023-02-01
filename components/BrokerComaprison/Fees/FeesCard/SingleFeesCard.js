import React from "react";
import { AiFillStar } from "react-icons/ai";
import { BsExclamationCircleFill } from "react-icons/bs";
import { FcBearish } from "react-icons/fc";

const SingleFeesCard = ({ info, index }) => {
  const { name, amount } = info;
  return (
    <div
      className={`${
        index === 0 ? "p-2 mt-0 sm:mt-5" : "p-2 mt-0 sm:mt-5 border-l"
      }`}
    >
      <h1 className="text-center font-bold">Fees Score</h1>
      <div className="flex items-center justify-center mt-2">
        <AiFillStar className="text-[#DFB300]" />
        <AiFillStar className="text-[#DFB300]" />
        <AiFillStar className="text-[#DFB300]" />
        <AiFillStar className="text-[#DFB300]" />
        <p className="font-bold">(5)</p>
      </div>
      <div className="flex justify-center items-center mt-5">
        <p className="font-bold">Fees Summary</p>
      </div>
      <p className="text-gray-400 text-center text-[12px] mt-2">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
        doloribus voluptate asperiores dignissimos sapiente molestiae
        voluptatibus libero, enim, ab eos, culpa distinctio! Alias suscipit
        culpa earum non quibusdam nam neque!
      </p>
      <div className="flex justify-center items-center mt-3">
        <BsExclamationCircleFill className="mr-2 text-blue-500" />
        <p>Origin Name</p>
      </div>
      <p className="font-bold text-[16px] text-center">{name}</p>
    </div>
  );
};

export default SingleFeesCard;
