import React from "react";
import CompanyCards from "./Company Card/CompanyCards";
import FilterBy from "./Filter/FilterBy";
import { AiFillStar } from "react-icons/ai";
import BasicDataOfBroker from "./BasicData/BasicDataOfBroker";
import Fees from "./Fees/Fees";
import StockAndEtf from "./StockAndETF/StockAndEtf";
import ForexFees from "./ForexFees/ForexFees";
import BondFees from "./BondFees/BondFees";
import OptionFees from "./OptionFees/OptionFees";
import FutureFees from "./FutureFees/FutureFees";

const MainPage = () => {
  return (
    <>
      <div className="grid lg:grid-cols-5 mt-6 mx-4">
        <div className="lg:col-span-4 mx-4">
          <CompanyCards></CompanyCards>
          <div className="mt-4 flex items-center text-[13px]">
            <AiFillStar className="text-[#F2C94C] mr-2" />
            <p className="font-semibold">
              Data marked with an asterisk contain additional info, expand the
              relevant sections below to see details.
            </p>
          </div>
          <BasicDataOfBroker />
          <Fees></Fees>
          <StockAndEtf></StockAndEtf>
          <ForexFees></ForexFees>
          <BondFees></BondFees>
          <OptionFees></OptionFees>
          <FutureFees></FutureFees>
        </div>
        <FilterBy></FilterBy>
      </div>
    </>
  );
};

export default MainPage;
