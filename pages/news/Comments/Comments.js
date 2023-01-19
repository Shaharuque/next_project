import React, { useState } from "react";
import Comment from "./Comment";

const Comments = () => {
  const [comments, setComments] = useState([1, 2]);
  return (
    <div>
      <h1 className="font-bold text-[20px] mb-6 mt-6">2 Comments</h1>
      {comments?.map((i, index) => (
        <Comment key={index}></Comment>
      ))}
    </div>
  );
};

export default Comments;
