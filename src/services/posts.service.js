export const getPosts = async (limit, skip) => {
  const res = await fetch(
    `https://dummyjson.com/posts?limit=${limit}&skip=${skip}`
  );
  const data = await res.json();
  return data.posts;
};

export const getPostById = async (id) => {
  const res = await fetch(`https://dummyjson.com/posts/${id}`);
  const data = await res.json();
  return data;
};
