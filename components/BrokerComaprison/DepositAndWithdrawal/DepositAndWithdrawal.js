import React, { useEffect, useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { FcComboChart } from "react-icons/fc";
import AllDepositAndWithdrawalCards from "./DepositAndWithdrawalCards/AllDepositAndWithdrawalCards";

const DepositAndWithdrawal = () => {
  const [drop, setDrop] = useState(true);
  const [basicData, setBasicData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    setIsLoading(true);
    fetch("https://backend.flagedu.com/api/company/deposit/withdraw/list/")
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
          <p className="font-bold ml-2">Deposit and Withdrawal</p>
        </div>
        <div className="flex items-center justify-center">
          <p className="mr-1 font-semibold">Sort</p>
          <FcComboChart className="text-xl" />
        </div>
      </div>
      <div>
        {drop && (
          <AllDepositAndWithdrawalCards
            basicData={basicData}
            isLoading={isLoading}
          ></AllDepositAndWithdrawalCards>
        )}
      </div>
    </div>
  );
};

export default DepositAndWithdrawal;
