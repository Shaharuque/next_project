import React, { useEffect, useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { FcComboChart } from "react-icons/fc";
import AllOptionFeesCard from "./optionFeesCard/AllOptionFeesCard";

const OptionFees = () => {
  const [drop, setDrop] = useState(true);
  const [basicData, setBasicData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    setIsLoading(true);
    fetch("https://backend.flagedu.com/api/company/option/fees/list/")
      .then((res) => res.json())
      .then((result) => {
        setIsLoading(false);
        setBasicData(result?.success);
      });
  }, []);
  console.log(basicData);
  const handleDropDown = () => {
    setDrop(!drop);
  };
  return (
    <div>
      <div className="flex justify-between mt-10">
        <div className="flex items-center">
          <IoIosArrowDown
            onClick={handleDropDown}
            className="text-[25px] rounded-xl border bg-[#F1F2F4] cursor-pointer"
          />
          <p className="font-bold ml-2">Option Fees</p>
        </div>
        <div className="flex items-center justify-center">
          <p className="mr-1 font-semibold">Sort</p>
          <FcComboChart className="text-xl" />
        </div>
      </div>
      <div>
        {drop && (
          <AllOptionFeesCard
            basicData={basicData}
            isLoading={isLoading}
          ></AllOptionFeesCard>
        )}
      </div>
    </div>
  );
};

export default OptionFees;
