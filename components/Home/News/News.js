import React, { useEffect, useState } from "react";
import styles from "./News.module.css";
import SingleNews from "./SingleNews/SingleNews";

const News = () => {
  const [news, setNews] = useState([]);
  //news api call
  useEffect(() => {
    fetch("http://backend.flagedu.com/api/news/list/")
      .then((res) => res.json())
      .then((result) => setNews(result?.success));
  }, []);
  console.log("new list", news);
  return (
    <div style={{ margin: "102px" }}>
      <h2 className="text-end mb-4 font-bold">News</h2>
      <div className={styles.news_div}>
        {/* Left side cards */}
        <div className={styles.card}>
          <div className={styles.imageStyle}>
            <img
              src="https://cdn.dribbble.com/users/2556278/screenshots/7409304/loveclip_still_2x.gif?compress=1&resize=400x300"
              alt="Avatar"
              style={{ width: "100%", borderRadius: "5px" }}
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
              Lorem ipsum dolor sit amet.
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
        </div>

        {/* Right side cards */}
        <div className={styles.news_div_right}>
          {news?.map((each, index) => (
            <SingleNews key={index} each={each}></SingleNews>
          ))}
        </div>
      </div>
    </div>
  );
};

export default News;
