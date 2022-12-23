import React from "react";

const StoryCard = (props) => {
  return (
    <div className="card">
      <img src={props.imageUrl} alt={props.title} />
      <div className="card-body">
        <h3>{props.title}</h3>
        <p>{props.description}</p>
        <button>Learn More</button>
      </div>
    </div>
  );
};

export default StoryCard;
