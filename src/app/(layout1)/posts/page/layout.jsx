import React from "react";
import PostListHeader from "./header";
import PostSlide from "../PostSlide";
import { getPosts } from "@/services/posts.service";
import { getUsers } from "@/services/users.service";
import { bootstrapContainer, bootstrapRow, bootstrapCol } from "../bootstrap";

export default async function PostListLayout({ children }) {
  const posts = await getPosts(100, 0);
  const users = await getUsers(100, 0);
  const spotLightPosts = posts.slice(0, 10);
  const spotLightUsers = users.slice(0, 10);
  return (
    <>
      <PostListHeader />
      <div className="container">
        <PostSlide data={spotLightPosts} users={spotLightUsers} />
        {children}
      </div>
    </>
  );
}
