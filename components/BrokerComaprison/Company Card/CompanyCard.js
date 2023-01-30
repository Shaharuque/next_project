import React from "react";
import company1 from "../../../Assets/background_img/download.png";

const CompanyCard = ({ cardInfo }) => {
  const { company_image, company_name } = cardInfo || {};
  return (
    <div className="border border-gray-200 p-2 rounded-md hover:shadow hover:shadow-teal-500">
      <div className="flex justify-center">
        <img
          className="w-30 h-20 rounded-md"
          src={`http://backend.flagedu.com/${company_image}`}
          alt="company card"
        />
      </div>
      <h2 className="text-center text-sm font-bold mt-4">{company_name}</h2>
      <div className=" flex flex-col">
        <button className="bg-[#01AEAB] text-white p-2 rounded-md text-[13px] mb-3 mt-6">
          Visit Broker
        </button>
        <button className="bg-white text-[#01AEAB] p-2 mb-3 rounded-md text-[13px] border border-[#01AEAB]">
          Read Review
        </button>
      </div>
    </div>
  );
};

export default CompanyCard;
