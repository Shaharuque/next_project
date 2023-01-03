import React from "react";
import { IoIosArrowDown } from "react-icons/io";
import { BsBarChart } from "react-icons/bs";

const BasicDataOfBroker = () => {
  return (
    <div className="flex justify-between mt-6">
      <div className="flex items-center">
        <IoIosArrowDown className="text-[25px] rounded-xl border bg-[#F1F2F4]" />
        <p className="font-bold ml-2">Basic Data of Broker</p>
      </div>
      <div className="flex">
        <p className="mr-2 font-semibold">Sort</p>
        <BsBarChart className=" p-3 rounded " />
      </div>
    </div>
  );
};

export default BasicDataOfBroker;
