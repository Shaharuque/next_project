import React, { useState } from "react";
import CompanyCard from "./CompanyCard";

const CompanyCards = () => {
  const [cards, setCards] = useState([1, 1, 1, 1]);
  return (
    <div className="grid lg:grid-cols-4 gap-2">
      {cards?.map((d, index) => (
        <CompanyCard key={index}></CompanyCard>
      ))}
    </div>
  );
};

export default CompanyCards;
