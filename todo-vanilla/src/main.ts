import "./theme/index.css";
import { fetchTodos, fetchTodoById } from './services/todo.service';

/** Initialization home page. */
function initHomePage(): void {
  console.log("initHomePage");
  fetchTodos()
  fetchTodoById(10)
}

window.addEventListener("DOMContentLoaded", initHomePage);
window.addEventListener("popstate", () => window.history.go());
