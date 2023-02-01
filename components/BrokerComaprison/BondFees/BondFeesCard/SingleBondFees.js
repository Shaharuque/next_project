import React from "react";
import { BsExclamationCircleFill } from "react-icons/bs";

const SingleBondFees = ({ info, index }) => {
  const { name, amount } = info;
  return (
    <div
      className={`${
        index === 0 ? "p-2 mt-0 sm:mt-5" : "p-2 mt-0 sm:mt-5 border-l"
      }`}
    >
      <div>
        <div className="flex justify-center items-center mt-3">
          <BsExclamationCircleFill className="mr-2 text-blue-500" />
          <p>{name}</p>
        </div>
        <p className="font-bold text-[16px] text-center">${amount}</p>
      </div>
    </div>
  );
};

export default SingleBondFees;
