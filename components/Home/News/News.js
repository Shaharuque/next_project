import React from "react";
import styles from "./News.module.css";

const News = () => {
  return (
    <div style={{ margin: "102px" }}>
      <h2 style={{ textAlign: "end", marginBottom: "15px" }}>News</h2>
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
          {/* 2nd */}
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
          {/* 3rd */}
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
          {/* 4th */}
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
        </div>
      </div>
    </div>
  );
};

export default News;
