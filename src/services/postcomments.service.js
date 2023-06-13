export const getPostCommentsById = async (id) => {
  const res = await fetch(`https://dummyjson.com/posts/${id}/comments`);
  const data = await res.json();
  return data.comments;
};
