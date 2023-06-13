export const getUsers = async (limit, skip) => {
  const res = await fetch(
    `https://dummyjson.com/users?limit=${limit}&skip=${skip}`
  );
  const data = await res.json();
  return data.users;
};

export const getUserById = async (id) => {
  const res = await fetch(`https://dummyjson.com/users/${id}`);
  const data = await res.json();
  return data;
};
