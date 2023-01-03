import React, { useState } from "react";
import SingleData from "./SingleData";

const AllData = () => {
  const [data, setData] = useState([1, 1, 1, 1]);
  return (
    <div className="grid lg:grid-cols-4 gap-3 lg:divide-x mt-6">
      {data?.map((d, index) => (
        <SingleData key={index}></SingleData>
      ))}
    </div>
  );
};

export default AllData;
