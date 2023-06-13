import React from "react";
import PostHeader from "./header";
import { getPostById, getPosts } from "@/services/posts.service";
import { getUsers } from "@/services/users.service";
export default async function PostDetailLayout({
  children,
  params: { postid },
}) {
  const posts = await getPosts(100, 0);
  const users = await getUsers(100, 0);
  const spotLightPosts = posts.slice(0, 10);
  const spotLightUsers = users.slice(0, 10);
  const post = await getPostById(postid);
  return (
    <>
      <PostHeader post={post}/>
      {children}
    </>
  );
}
