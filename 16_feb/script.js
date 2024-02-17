async function fetchData(url) {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`HTTP error! Status: ${response.status}`);
  }
  return response.json();
}

async function fetchAndRenderData() {
  try {
    const [users, posts, todos] = await Promise.all([
      fetchData("https://jsonplaceholder.typicode.com/users"),
      fetchData("https://jsonplaceholder.typicode.com/posts"),
      fetchData("https://jsonplaceholder.typicode.com/todos"),
    ]);

    renderUsers(users.slice(0, 2));
    renderPosts(posts.slice(0, 2));
    renderTodos(todos.slice(0, 2));
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

function renderUsers(users) {
  const usersContainer = document.getElementById("users");
  usersContainer.innerHTML = "<h2>Users:</h2>";
  users.forEach((user) => {
    usersContainer.innerHTML += `<p>${user.name}</p>`;
  });
}

function renderPosts(posts) {
  const postsContainer = document.getElementById("posts");
  postsContainer.innerHTML = "<h2>Posts:</h2>";
  posts.forEach((post) => {
    postsContainer.innerHTML += `<p>${post.title}</p>`;
  });
}

function renderTodos(todos) {
  const todosContainer = document.getElementById("todos");
  todosContainer.innerHTML = "<h2>Todos:</h2>";
  todos.forEach((todo) => {
    todosContainer.innerHTML += `<p>${todo.title}</p>`;
  });
}

// Fetch and render data on page load
fetchAndRenderData();
