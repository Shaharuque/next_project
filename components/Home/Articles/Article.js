import React from "react";
import Link from "next/link";
import styles from "./Articles.module.css";
import { GoCommentDiscussion } from "react-icons/go";
import { AiOutlineClockCircle } from "react-icons/ai";

const Article = ({ card }) => {
  return (
    <Link href={`/articles/1`} className={styles.card}>
      <div className={styles.imageStyle}>
        <img
          src="https://media.istockphoto.com/id/1370822454/photo/apocalyptic-city-war-zone.jpg?b=1&s=170667a&w=0&k=20&c=Mqr9Pz6FvZbT4sSNhWdXkWTOfYIwE2fKr623oWm0sIk="
          alt="Avatar"
          style={{ width: "100%", borderRadius: "5px" }}
        />
      </div>
      <div style={{ marginTop: "10px" }}>
        <div className={styles.timeDiv}>
          <p
            style={{
              color: "gray",
              fontSize: "12px",
            }}
          >
            24 July,2020
          </p>
          <AiOutlineClockCircle
            style={{ fontSize: "20px", color: "#000000", marginLeft: "5px" }}
          />
        </div>
        <p
          style={{
            fontSize: "21px",
            textAlign: "end",
            fontWeight: "bold",
            marginBottom: "7px",
          }}
        >
          {card?.name}
        </p>
        <div className={styles.paragraph}>
          <p
            style={{
              fontSize: "14px",
              fontWeight: "bold",
              color: "#717171",
              fontSize: "14px",
            }}
          >
            Comments
          </p>
          <GoCommentDiscussion
            style={{ fontSize: "22px", color: "#000000", marginLeft: "7px" }}
          />
        </div>
      </div>
    </Link>
  );
};

export default Article;
