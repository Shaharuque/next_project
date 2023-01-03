import React from "react";
import Image from "next/image";

const Banner = () => {
  return (
    <div>
      <div class="bg-[url('https://img.rawpixel.com/s3fs-private/rawpixel_images/website_content/rm209-kul-04_1.jpg?w=800&dpr=1&fit=default&crop=default&q=65&vib=3&con=3&usm=15&bg=F4F4F3&ixlib=js-2.2.1&s=98c963e0cd476b607a5ee57537b52faa')] bg-cover w-full bg-no-repeat">
        <div className="p-12">
          <h1 className="text-[40px] font-bold">Online Broker Composition</h1>
          <p className=" w-full md:w-2/4 text-[14px] my-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
            laboriosam non voluptatum ipsum vitae, maxime perspiciatis magnam
            reprehenderit, quasi perferendis nobis, suscipit harum deleniti
            fugit adipisci eaque laudantium qui neque!
          </p>
          <div className="my-6">
            <button className="bg-[#01AEAB] text-white px-4 py-2 text-[15px] rounded-md">
              Compare Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
