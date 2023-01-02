import React, { useState } from "react";

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };
  return (
    <div>
      <form className="searchField">
        <input
          className="input_field"
          type="text"
          placeholder="Search for Companies"
          value={searchTerm}
          onChange={handleChange}
        />
      </form>
    </div>
  );
};

export default SearchBar;
