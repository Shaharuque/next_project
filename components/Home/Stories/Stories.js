import Link from "next/link";
import styles from "./Card.module.css";
import { BsMoonStarsFill } from "react-icons/bs";
import { AiFillStar } from "react-icons/ai";
import StoryCard from "./StoryCard";
import { useState } from "react";

const Stories = () => {
  const [numbers, setNumbers] = useState([
    "first",
    "second",
    "third",
    "first",
    "second",
    "third",
    "second",
    "third",
  ]);
  return (
    <div className={styles.cardDiv}>
      {numbers?.map((each, index) => (
        <StoryCard each={each} key={index}></StoryCard>
      ))}
    </div>
  );
};

export default Stories;
