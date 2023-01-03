import React from "react";
import company1 from "../../../Assets/background_img/download.png";

const CompanyCard = () => {
  return (
    <div className="shadow-xl p-2 rounded-md">
      <div className="flex justify-center">
        <img
          className="w-16"
          // src="https://joinup.ec.europa.eu/sites/default/files/news/logo/2021-12/IPS%20new%20logo1.png"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTd-le9HOL0TbFpT6h7__o4-cTdnewn9Wz3mQ&usqp=CAU"
          alt="company card"
        />
      </div>
      <h2 className="text-center text-sm font-bold mt-4">Company Name</h2>
      <div className="my-6 flex flex-col">
        <button className="bg-[#01AEAB] text-white p-2 rounded-md text-[13px] mb-3">
          Visit Broker
        </button>
        <button className="bg-white text-[#01AEAB] p-2 rounded-md text-[13px] border border-[#01AEAB]">
          Read Review
        </button>
      </div>
    </div>
  );
};

export default CompanyCard;
