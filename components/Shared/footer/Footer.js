import React from "react";
import Image from "next/image";
import logo1 from "../../../Assets/logo  flag/flag s-01.png";

const Footer = () => {
  return (
    <div className="bg-[#1F3241] text-white ">
      <div className="m-[0 102px] p-8 grid lg:grid-cols-4">
        <div>
          <h1 className="text-[18px] text-end">Quick Links</h1>
          <div className="text-[#A5ADB3] text-end mt-3 text-[14px]">
            <p className="m-2">Licensed Trade Company in UAE</p>
            <p className="m-2">Licensed Trade Company in USA</p>
            <p className="m-2">Licensed Trade Companies</p>
            <p className="m-2">VIP treading account</p>
          </div>
        </div>
        <div>
          <h1 className="text-[18px] text-end">Confidently</h1>
          <div className="text-[#A5ADB3] text-end mt-3 text-[14px]">
            <p className="m-2">Licensed Trade Company in UAE</p>
            <p className="m-2">Licensed Trade Company in USA</p>
            <p className="m-2">Licensed Trade Companies</p>
            <p className="m-2">VIP treading account</p>
          </div>
        </div>
        <div>
          <h1 className="text-[18px] text-end">Important Links</h1>
          <div className="text-[#A5ADB3] text-end mt-3 text-[14px]">
            <p className="m-2">Licensed Trade Company in UAE</p>
            <p className="m-2">Licensed Trade Company in USA</p>
            <p className="m-2">Licensed Trade Companies</p>
            <p className="m-2">VIP treading account</p>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <Image
            src={logo1}
            alt="Picture of the logo"
            width={150}
            height={100}
            sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
          />
        </div>
      </div>
    </div>
  );
};

export default Footer;
