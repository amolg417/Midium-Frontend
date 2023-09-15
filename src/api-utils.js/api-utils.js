let SERVER_URL = "https://midiumlite.onrender.com";

function getPost(page, category) {
  return fetch(
    `${SERVER_URL}/blog/posts?page=${page}&category=${category || ""}`
  ).then((res) => res.json());
}

function getCategory() {
  return fetch(`${SERVER_URL}/blog/categories`).then((res) => res.json());
}

function getPopularPost() {
  return fetch(`${SERVER_URL}/blog/popular`).then((res) => res.json());
}
function getUserPickedPost() {
  return fetch(`${SERVER_URL}/blog/userPicked`).then((res) => res.json());
}
function getSinglePost(postId) {
  return fetch(`${SERVER_URL}/blog/post/${postId}`).then((res) => res.json());
}
function getAllComments(postId) {
  return fetch(`${SERVER_URL}/blog/comments/${postId}`).then((res) =>
    res.json()
  );
}

function userLogin(user) {
  return fetch(`${SERVER_URL}/user/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      accept: "application/json",
    },
    body: JSON.stringify(user),
  }).then((res) => res.json());
}

function userRegister(UserData) {
  return fetch(`${SERVER_URL}/user/register`, {
    method: "POST",
    body: UserData,
  }).then((res) => res.json());
}

function createPost(Post, token) {
  return fetch(`${SERVER_URL}/blog/posts`, {
    method: "POST",
    headers: {
      authorization: `Bearer ${token}`,
    },
    body: Post,
  }).then((res) => res.json());
}

function createComment(comment, postId, token) {
  return fetch(`${SERVER_URL}/blog/comments/${postId}`, {
    method: "POST",
    headers: {
      authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(comment),
  }).then((res) => res.json());
}

export {
  getPost,
  getCategory,
  getPopularPost,
  getUserPickedPost,
  getSinglePost,
  getAllComments,
  userLogin,
  userRegister,
  createPost,
  createComment,
};
