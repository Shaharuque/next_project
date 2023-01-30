import React from "react";
import { IoIosArrowDown } from "react-icons/io";
import { FcComboChart } from "react-icons/fc";
import AllData from "./Data/AllData";

const BasicDataOfBroker = () => {
  return (
    <div>
      <div className="flex justify-between mt-10">
        <div className="flex items-center">
          <IoIosArrowDown className="text-[25px] rounded-xl border bg-[#F1F2F4]" />
          <p className="font-bold ml-2">Basic Data of Broker</p>
        </div>
        <div className="flex items-center justify-center">
          <p className="mr-1 font-semibold">Sort</p>
          <FcComboChart className="text-xl" />
        </div>
      </div>
      <div>
        <AllData></AllData>
      </div>
    </div>
  );
};

export default BasicDataOfBroker;
