// Shared script for login, register, and todos pages
const SERVER_URL = "http://localhost:8080";
const token = localStorage.getItem("token");

// Login page logic
function login() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  fetch(`${SERVER_URL}/auth/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password }),
  })
    .then(async (response) => {
      if (!response.ok) {
        // parse error response
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.message || "Login failed");
      }
      return response.json();
    })
    .then((data) => {
      localStorage.setItem("token", data.token);
      window.location.href = "todos.html";
    })
    .catch((error) => {
      alert(`Error: ${error.message}`);
    });
}

// Register page logic
function register() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  fetch(`${SERVER_URL}/auth/register`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password }),
  })
    .then(async (response) => {
      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.message || "Registration failed");
      }
      return response.json();
    })
    .then(() => {
      alert("Registration successful! Please log in.");
      window.location.href = "login.html";
    })
    .catch((error) => {
      alert(`Error: ${error.message}`);
    });
}


// Todos page logic
function createTodoCard(todo) {
  const card = document.createElement("div");
  card.className = "todo-card";

  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.checked = todo.iscompleted;

  const span = document.createElement("span");
  span.textContent = todo.title;

  // Apply initial styles
  if (todo.iscompleted) {
    span.style.textDecoration = "line-through";
    span.style.color = "#aaa";
  }

  // Checkbox toggle handler
  checkbox.addEventListener("change", function () {
    const updatedTodo = { ...todo, iscompleted: this.checked };
    updateTodoStatus(updatedTodo);

    // Update UI immediately
    if (this.checked) {
      span.style.textDecoration = "line-through";
      span.style.color = "#aaa";
    } else {
      span.style.textDecoration = "none";
      span.style.color = "inherit";
    }
  });

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";
  deleteBtn.onclick = function () {
    deleteTodo(todo.id);
    card.remove(); // remove from UI immediately
  };

  card.appendChild(checkbox);
  card.appendChild(span);
  card.appendChild(deleteBtn);
  return card;
}


function loadTodos() {
  if (!token) {
    alert("You must be logged in to view todos.");
    window.location.href = "login.html";
    return;
  }

  fetch(`${SERVER_URL}/api/v1/todo`, {
    method: "GET",
    headers: { Authorization: `Bearer ${token}` },
  })
    .then(async (response) => {
      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.message || "Failed to get todos");
      }
      return response.json();
    })
    .then((todos) => {
      const todoList = document.getElementById("todo-list");
      todoList.innerHTML = "";

      if (!todos || todos.length === 0) {
        todoList.innerHTML = `<p id="empty-message">No todos found. Add a new todo!</p>`;
      } else {
        todos.forEach((todo) => {
          const card = createTodoCard(todo);
          todoList.appendChild(card);
        });
      }
    })
    .catch((error) => {
      alert(`Error: ${error.message}`);
      document.getElementById("todo-list").innerHTML =
        `<p style="color:red" id="empty-message">Error loading todos.</p>`;
    });
}


function addTodo() {
  const input = document.getElementById("new-todo");
  const todotext = input.value.trim();

  if (!todotext) {
    alert("Todo text cannot be empty");
    return;
  }

  fetch(`${SERVER_URL}/api/v1/todo/create`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ title: todotext, iscompleted: false }),
  })
    .then(async (response) => {
      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.message || "Failed to add todo");
      }
      return response.json();
    })
    .then((newTodo) => {
      input.value = "";
      loadTodos(); // refresh list
    })
    .catch((error) => {
      alert(`Error: ${error.message}`);
    });
}


function updateTodoStatus(todo) {
  fetch(`${SERVER_URL}/api/v1/todo`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(todo),
  })
    .then(async (response) => {
      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.message || "Failed to update todo");
      }
      return response.json();
    })
    .then(() => loadTodos())
    .catch((error) => {
      alert(`Error: ${error.message}`);
    });
}


function deleteTodo(id) {
  fetch(`${SERVER_URL}/api/v1/todo/${id}`, {
    method: "DELETE",
    headers: { Authorization: `Bearer ${token}` },
  })
    .then(async (response) => {
      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.message || "Failed to delete todo");
      }

      // Some APIs return empty body for DELETE
      //return response.status !== 204 ? response.json() : {};
      return response.json();
    })
    .then(() => loadTodos())
    .catch((error) => {
      alert(`Error: ${error.message}`);
    });
}


// Page-specific initializations
document.addEventListener("DOMContentLoaded", function () {
  if (document.getElementById("todo-list")) {
    loadTodos();
  }
});
