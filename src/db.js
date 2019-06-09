const users = [
  {
    id: "1",
    name: "Alex",
    email: "alex@mail.ru"
  },
  {
    id: "2",
    name: "Cahekec",
    email: "cahekec@mail.ru"
  },
  {
    id: "3",
    name: "sara",
    email: "sara@mail.ru"
  }
];

const posts = [
  {
    id: "11",
    title: "Graphql title 11",
    body: "This is body of post",
    published: true,
    author: "1"
  },
  {
    id: "12",
    title: "Graphql title 12",
    body: "This is body of post",
    published: true,
    author: "2"
  },
  {
    id: "13",
    title: "Graphql title 13",
    body: "This is body of post",
    published: false,
    author: "3"
  },
  {
    id: "14",
    title: "Graphql title 14",
    body: "This is body of post",
    published: true,
    author: "1"
  }
];

const comments = [
  {
    id: "101",
    text: "First comment",
    author: "1",
    post: "12"
  },
  {
    id: "102",
    text: "Second comment",
    author: "2",
    post: "12"
  },
  {
    id: "103",
    text: "Third comment",
    author: "2",
    post: "12"
  },
  {
    id: "104",
    text: "Fouth comment",
    author: "3",
    post: "12"
  }
];

const db = {
  users,
  posts,
  comments
};

export { db as default };
