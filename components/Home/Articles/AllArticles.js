import React, { useEffect, useState } from "react";
import Article from "./Article";
import styles from "./Articles.module.css";

const AllArticles = () => {
  const [cards, setCards] = useState([1, 2, 3, 1]);
  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    fetch("https://www.flagedu.com/api/article/list/")
      .then((res) => res.json())
      .then((data) => {
        console.log("article list", data?.success);
        setCards(data?.success);
      });
  }, []);
  // useEffect(() => {
  //   fetch("https://flagedu.com/api/news/list/")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       console.log("news list", data);
  //     });
  // }, []);

  useEffect(() => {
    fetch(
      "https://hotel-booking-app-server-production-15de.up.railway.app/api/hotels"
    )
      .then((res) => res.json())
      .then((result) => setData(result));
  }, []);

  if (isLoading) return <p className="text-center">Loading...</p>;
  if (!data) return <p>No profile data</p>;
  console.log(data);
  return (
    <div style={{ margin: "102px" }}>
      <h2 style={{ textAlign: "end", marginBottom: "15px" }}>Articles</h2>
      {/* <div
        className="text-end mb-2"
        dangerouslySetInnerHTML={{ __html: data?.success[1]?.description }}
      ></div> */}
      <div className={styles.article_div}>
        {cards?.map((card, index) => (
          <Article key={index} card={card}></Article>
        ))}
      </div>
    </div>
  );
};

export default AllArticles;
