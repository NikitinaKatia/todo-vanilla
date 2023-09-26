import "./theme/index.css";
import { fetchTodos,fetchTodo } from './services/todo.service';
import { TODOS_URL } from './core/constants'

/** Initialization home page. */
function initHomePage(): void {
  console.log("initHomePage");
  fetchTodos(TODOS_URL)
  fetchTodo(TODOS_URL + '/1')
}

window.addEventListener("DOMContentLoaded", initHomePage);
window.addEventListener("popstate", () => window.history.go());
