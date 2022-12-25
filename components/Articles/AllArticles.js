import React, { useState } from 'react';
import Article from './Article';
import styles from "./Articles.module.css";

const AllArticles = () => {
    const [cards,setCards]=useState([1,2,3,1])
    return (
        <div style={{ margin: "102px" }}>
        <h2 style={{ textAlign: "end", marginBottom: "15px" }}>Articles</h2>
          <div className={styles.article_div}>
        {
            cards?.map(card=><Article card={card}></Article>)
        }
          </div>
        </div>
    );
};

export default AllArticles;