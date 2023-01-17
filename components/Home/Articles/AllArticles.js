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
        console.log(data);
      });
  }, []);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => console.log("fake data", data));
  }, []);

  useEffect(() => {
    fetch(`https://test-prod.therapypms.com/api/v1/admin/ac/staff/info/${31}`, {
      method: "GET",
      headers: {
        "content-type": "Application/json",
        Authorization:
          "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiI1IiwianRpIjoiNGRjOGIyZGE3NjllYzViM2QxNTYxNWNkNWRmYjE0Yzg1MTNiMmFlODk5NTUxNTRiMDFkNDFkYzg1ZDlhMjUzNWRlMmIyMmI5MWUwYWEzMmIiLCJpYXQiOjE2NzM5NTkzNjcuMjE5MjE3LCJuYmYiOjE2NzM5NTkzNjcuMjE5MjE5LCJleHAiOjE3MDU0OTUzNjcuMjE3NTQ1LCJzdWIiOiIxIiwic2NvcGVzIjpbXX0.GdGsy8FJLqf1LKoLUKrXPDhpL_55ev22gxg9pepTpSahXTX4zgPccYdaGGinGK-4i1L7GlcE2M3_S_LWd7x6yQPMTU8QannCraCW0y-JF13NrS06GDhtJUACBcVMVvAmxhMIAMPu97dLDoq6Md0W17m0vGuordXqLtmyjuMVEUMivX1BKgOGJJX9DiNgDzxL9yxqb3le1IeKIpas0n9MSCTYgYwLMOZpRlFvqTToFMdCSpNhicR6S2f4RSkAZyyuYJKhf10OeRNyNge6GMW8xtj2aruyiBcohKlV7z2D8ys-35Kc-v4aQLlJxbiOo1PRlxHVtZrYqyOY22edKxsdUreTjiSgm3W9sHkmlnceGT4hgBgFdrxWbJayYRlma7GaznlsEMYDwAx9zRDAYIZ5vkkeuDGo8fiB13PpX6buyetzgNxKqLeKQUBjvCCtIrgsbtmsdWUpsWugsvQocUpyO5ipBFr3oybJKNvWBk-FiEd-DCAqGJJgF9EUDhhoq-NjWCZnk8cC-LoAEN4wg9SaE1tAc8pWBU9sqmS8giE0DbNJujF4EG2b5hsRuImrDqf0X219KBp8sDcbgEyNOtWtTLEfrVyzVlZHmLYyz2uAPhsKWyvuPPUkqBH3vSia9lh-L3baHKfNc1GcODhgHW9i44VLRmBeN4r4CbkRkVEs5jA",
      },
    })
      .then((res) => res.json())
      .then((data) => console.log("tpms", data));
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
