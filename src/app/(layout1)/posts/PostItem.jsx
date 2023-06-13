"use client";
import React from "react";
import Link from "next/link";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import styles from "./posts.module.css";
export default function PostItem({ data, users, skip }) {
  return (
    <div className={`${styles["post-list"]} row`}>
      {data.map((item, index) => (
        <div
          className="col-12 col-sm-6 col-lg-4"
          style={{ marginBottom: "30px" }}
        >
          <Link href={`/posts/${item.id}`} className={styles["post-item"]}>
            <div className={styles["post-picture"]}>
              <img src={users[index + skip].image} alt="" />
            </div>
            <div className={styles["post-title"]}>{item.title}</div>
            <div className={styles["post-author"]}>
              Author: {users[index + skip].lastName}
            </div>
            <div className={styles["post-reaction-tag"]}>
              <div className={styles["post-reaction"]}>
                <div className={styles["post-reaction-icon"]}>
                  {" "}
                  <img src="/like.png" alt="" />{" "}
                </div>
                <div className={styles["post-reaction-count"]}>
                  {item.reactions}
                </div>
              </div>
              <div className={styles["post-tag"]}>
                {item.tags.map((tag, indextag) => (
                  <div key={indextag} className={styles["post-tag-item"]}>
                    {tag}
                  </div>
                ))}
              </div>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
}
