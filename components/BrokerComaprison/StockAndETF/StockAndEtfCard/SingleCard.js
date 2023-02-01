import React from "react";
import { AiFillStar } from "react-icons/ai";
import { BsExclamationCircleFill } from "react-icons/bs";
import { FcBearish } from "react-icons/fc";

const SingleCard = ({ info }) => {
  const { name, amount } = info;
  return (
    <div className="p-2 mt-0 sm:mt-5 border-r">
      <div>
        <div className="flex justify-center items-center mt-3">
          <BsExclamationCircleFill className="mr-2 text-blue-500" />
          <p>{name}</p>
        </div>
        <p className="font-bold text-[16px] text-center">${amount}</p>
      </div>

      <div className="mt-8">
        <div className="flex justify-center items-center mt-3">
          <BsExclamationCircleFill className="mr-2 text-blue-500" />
          <p>{name}</p>
        </div>
        <p className="font-bold text-[16px] text-center">${amount}</p>
      </div>

      <div className="mt-8">
        <div className="flex justify-center items-center mt-3">
          <BsExclamationCircleFill className="mr-2 text-blue-500" />
          <p>{name}</p>
        </div>
        <p className="font-bold text-[16px] text-center">${amount}</p>
      </div>
    </div>
  );
};

export default SingleCard;
