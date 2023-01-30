import Link from "next/link";
import React from "react";
import styles from "../News.module.css";

const SingleNews = ({ each }) => {
  const { title, thumbnail_image, id } = each || {};
  return (
    <div>
      <Link href={`/news/${id}`} className={styles.card}>
        <div className={styles.imageStyle}>
          <img
            src={`https://backend.flagedu.com/${thumbnail_image}`}
            alt="Avatar"
            style={{ width: "100%", height: "200px", borderRadius: "5px" }}
          />
        </div>
        <div style={{ marginTop: "10px" }}>
          <p
            style={{
              color: "gray",
              fontSize: "12px",
              textAlign: "end",
              marginBottom: "7px",
            }}
          >
            24 July,2020
          </p>
          <p
            style={{
              fontSize: "14px",
              textAlign: "end",
              fontWeight: "bold",
              marginBottom: "7px",
            }}
          >
            {title}
          </p>
          <p
            style={{
              fontSize: "14px",
              textAlign: "end",
              fontWeight: "bold",
              marginBottom: "7px",
            }}
          >
            Comments
          </p>
        </div>
      </Link>
    </div>
  );
};

export default SingleNews;
