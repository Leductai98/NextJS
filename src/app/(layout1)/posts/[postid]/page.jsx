import { getPostById } from "@/services/posts.service";
import React from "react";
import styles from "./postdetail.module.css";
import { getUserById } from "@/services/users.service";
import { getPostCommentsById } from "@/services/postcomments.service";
export default async function DetailPage({ params: { postid } }) {
  const post = await getPostById(postid);
  const user = await getUserById(post.userId);
  const comments = await getPostCommentsById(postid);

  const arrId = comments.map((comment) => comment.user.id);
  const arrImg = [];
  for (let i = 0; i < arrId.length; i++) {
    const x = await getUserById(arrId[i]);
    arrImg.push(x.image);
  }
  console.log(arrImg);
  return (
    <div className="container">
      <div className={styles.author}>
        <span>Author: </span>
        <div className={styles["author-avatar"]}>
          <img src={user.image} alt="" />
        </div>
        <div className={styles["author-info"]}>
          <div className={styles["author-name"]}>
            {user.firstName} {user.lastName}
          </div>
          <div className="author-email">{user.email}</div>
          <div className="author-phone">{user.phone}</div>
        </div>
      </div>
      <div className={styles["tag-list"]}>
        <span>tags:</span>
        {post.tags.map((tag, index) => (
          <div className={styles["tag-item"]} key={index}>
            {tag}
          </div>
        ))}
      </div>
      <h5>Content</h5>
      <div className={styles["body"]}>
        <p>{post.body}</p>
      </div>
      <h5>Comments</h5>
      <div className="comment-list row">
        {comments.map((comment, commentIndex) => (
          <div
            className="col-12 col-sm-6 col-lg-4"
            style={{ display: "flex", justifyContent: "center" }}
            key={commentIndex}
          >
            <div className={styles["comment-item"]}>
              <div className={styles["comment-item-user"]}>
                <div className={styles["comment-item-avatar"]}>
                  <img src={arrImg[commentIndex]} alt="" />
                </div>
                <div className={styles["comment-item-info"]}>
                  <div className={styles["comment-item-name"]}>
                    {comment.user.username}
                  </div>
                </div>
              </div>
              <div className={styles["comment-item-body"]}>{comment.body}</div>
            </div>
          </div>
        ))}
      </div>
      <form action="">
        <h5>Nhập bình luận của bạn</h5>
        <div className={styles["user-info"]}>
          <div className={styles["user-avatar"]}>
            <img src="/cat.png" alt="" />
          </div>
          <div className={styles["user-name-comment"]}>
            <div className={styles["user-name"]}>
              <input type="text" name="user-name" placeholder="Name" />
            </div>{" "}
            <div className={styles["user-comment"]}>
              <textarea
                name="comment"
                id=""
                placeholder="Enter text here..."
              ></textarea>
            </div>
            <button type="submit" className={styles.submit}>
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
