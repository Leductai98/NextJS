import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { getPosts } from "@/services/posts.service";
import { getUsers } from "@/services/users.service";
import styles from "../../posts.module.css";
import Link from "next/link";
import PostItem from "../../PostItem";

export default async function PostList({ params: { pageid } }) {
  const posts = await getPosts(100, 0);
  const totalPage = Math.ceil(posts.length / 12);
  const users = await getUsers(100, 0);
  let limit = 12;
  const skip = (pageid - 1) * 12;
  if (skip > 88) {
    limit = 100 - skip;
  }
  const data = await getPosts(limit, skip);
  return (
    <>
      <PostItem data={data} users={users} skip={skip} />

      <div className={styles["page-button"]}>
        {Array(totalPage)
          .fill(null)
          .map((item, index) => (
            <Link
              href={`/posts/page/${index + 1}`}
              className={`${styles["btn-page"]} ${
                pageid == index + 1 ? `${styles.active}` : ""
              }`}
            >
              {index + 1}
            </Link>
          ))}
      </div>
    </>
  );
}
