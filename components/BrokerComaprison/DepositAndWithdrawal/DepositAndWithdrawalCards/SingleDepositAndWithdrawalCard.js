import React from "react";
import { BsExclamationCircleFill } from "react-icons/bs";
import { AiFillCloseCircle, AiFillCheckCircle } from "react-icons/ai";

const SingleDepositAndWithdrawalCard = ({ info, index }) => {
  const { name, is_checked } = info;
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
        {is_checked ? (
          <div className="flex justify-center">
            <AiFillCheckCircle className="text-[25px] text-green-600" />
          </div>
        ) : (
          <div className="flex justify-center">
            <AiFillCloseCircle className="text-[25px] text-red-600" />
          </div>
        )}
      </div>

      <div className="mt-8">
        <div className="flex justify-center items-center mt-3">
          <BsExclamationCircleFill className="mr-2 text-blue-500" />
          <p>{name}</p>
        </div>
        {is_checked ? (
          <div className="flex justify-center">
            <AiFillCheckCircle className="text-[25px] text-green-600" />
          </div>
        ) : (
          <div className="flex justify-center">
            <AiFillCloseCircle className="text-[25px] text-red-600" />
          </div>
        )}
      </div>

      <div className="mt-8">
        <div className="flex justify-center items-center mt-3">
          <BsExclamationCircleFill className="mr-2 text-blue-500" />
          <p>{name}</p>
        </div>
        {is_checked ? (
          <div className="flex justify-center">
            <AiFillCheckCircle className="text-[25px] text-green-600" />
          </div>
        ) : (
          <div className="flex justify-center">
            <AiFillCloseCircle className="text-[25px] text-red-600" />
          </div>
        )}
      </div>
    </div>
  );
};

export default SingleDepositAndWithdrawalCard;
