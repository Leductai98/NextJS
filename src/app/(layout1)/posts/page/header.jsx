import React from "react";
import styles from "../posts.module.css";
export default function PostListHeader() {
  return (
    <div className={styles["post-header"]}>
      <h2 className={styles["post-header-title"]}>Post List</h2>
    </div>
  );
}
