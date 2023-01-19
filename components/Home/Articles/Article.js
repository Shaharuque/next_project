import React from "react";
import Link from "next/link";
import styles from "./Articles.module.css";
import { GoCommentDiscussion } from "react-icons/go";
import { AiOutlineClockCircle } from "react-icons/ai";

const Article = ({ card }) => {
  const { id, title, description, thumbnail_image, created_at } = card;
  return (
    <Link href={`/articles/${id}`} className={styles.card}>
      <div className={styles.imageStyle}>
        <img
          src={`https://www.flagedu.com/${thumbnail_image}`}
          alt="Avatar"
          style={{ width: "100%", height: "180px", borderRadius: "5px" }}
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
            {created_at?.slice(0, 10)}
          </p>
          <AiOutlineClockCircle
            style={{ fontSize: "20px", color: "#000000", marginLeft: "5px" }}
          />
        </div>
        <p
          style={{
            fontSize: "15px",
            textAlign: "end",
            fontWeight: "bold",
            marginBottom: "7px",
          }}
        >
          {title}
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
