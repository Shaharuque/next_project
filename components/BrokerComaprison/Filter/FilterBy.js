import React, { useState } from "react";

const FilterBy = () => {
  const [selectedOption, setSelectedOption] = useState("Option 1");
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className="px-2 shadow-lg rounded-lg h-[700px]">
      <h2 className="text-end text-[18px]">Filter By</h2>
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col my-3">
          <label className="text-end font-bold">You live in</label>
          <select
            className=" bg-[#F1F2F4] p-2 mt-4 rounded-md"
            value={selectedOption}
            onChange={(e) => setSelectedOption(e.target.value)}
          >
            <option value="Option 1">Country 1</option>
            <option value="Option 2">Country 2</option>
            <option value="Option 3">Country 3</option>
          </select>
        </div>
        <div className="flex flex-col my-3">
          <label className="text-end font-bold">Order By</label>
          <select
            className=" bg-[#F1F2F4] p-2 mt-4 rounded-md"
            value={selectedOption}
            onChange={(e) => setSelectedOption(e.target.value)}
          >
            <option value="Option 1">Country 1</option>
            <option value="Option 2">Country 2</option>
            <option value="Option 3">Country 3</option>
          </select>
        </div>
        <div className="flex flex-col my-3">
          <label className="text-end font-bold">Select Brokers</label>
          <select
            className=" bg-[#F1F2F4] p-2 mt-4 rounded-md"
            value={selectedOption}
            onChange={(e) => setSelectedOption(e.target.value)}
          >
            <option value="Option 1">Country 1</option>
            <option value="Option 2">Country 2</option>
            <option value="Option 3">Country 3</option>
          </select>
        </div>

        <div className="flex flex-col my-3">
          <label className="text-end font-bold">Broker Choice Award</label>
        </div>
      </form>
    </div>
  );
};

export default FilterBy;
