import React from "react";
import Link from "next/link";
import styles from "../posts.module.css";
export default function PostHeader({ post }) {
  return (
    <div className={styles["post-header"]}>
      <Link href="/posts/page/1">Back to posts list</Link>
      <h2 className={styles["post-header-title"]}>{post.title}</h2>
    </div>
  );
}
