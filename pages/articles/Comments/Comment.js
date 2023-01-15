import React from "react";
import profile1 from "../../../Assets/background_img/profile1.jpg";
import Image from "next/image";
import { AiOutlineComment } from "react-icons/ai";
const Comment = () => {
  return (
    <div className="mt-6 pr-12 mb-16">
      <div className="flex">
        <Image
          className="rounded-[50%] mr-6"
          src={profile1}
          alt="Picture of the author"
          height={70}
          // blurDataURL="data:..." automatically provided
          // placeholder="blur" // Optional blur-up while loading
        />
        <div>
          <p className="font-semibold text-[18px]">Cameron Willums</p>
          <div className="flex items-center">
            <p className="text-[12px] mr-2 text-gray-600">
              Nov 23, 2018 at 12:23 pm
            </p>
            <p>
              {" "}
              <AiOutlineComment className="text-green-700" />
            </p>
          </div>
          <p className="text-[14px] text-gray-400 mt-4">
            Duis hendrerit velit scelerisque felis tempus, id porta libero
            venenatis. Nulla facilisi. Phasellus viverra magna commodo dui
            lacinia tempus. Donec malesuada nunc non dui posuere, fringilla
            vestibulum urna mollis. Integer condimentum ac sapien quis maximus.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Comment;
