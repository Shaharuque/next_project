import React from "react";

const ChartBottom = () => {
  return (
    <div className="flex justify-between my-3">
      <p className="text-[14px] text-green-500">15.91</p>
      <p className="text-[14px] ml-10">154.44</p>
      <div className="flex items-center">
        <p className="text-[12px]">BTCSS</p>
        <img
          className="w-6 rounded ml-2"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSspow5PrvWJDEhchwc8AyJeEKgQQPzfFXKgg&usqp=CAU"
          alt=""
        />
      </div>
    </div>
  );
};

export default ChartBottom;
