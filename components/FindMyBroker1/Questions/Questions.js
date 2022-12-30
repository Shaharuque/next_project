import React, { useState } from "react";

const Questions = () => {
  const [selectedOption, setSelectedOption] = useState("Option 1");
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div>
      <p
        style={{
          lineHeight: "30px",
          fontSize: "32px",
          textAlign: "end",
          marginBottom: "20px",
        }}
      >
        Question Number 1
      </p>
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col">
          <label className="text-end font-bold">
            Please Select Your Country
          </label>
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
        <div className="flex justify-end">
          <button
            type="submit"
            className="bg-[#01AEAB] p-2 text-white rounded-md mt-8"
          >
            Find Broker For Me
          </button>
        </div>
      </form>
    </div>
  );
};

export default Questions;
