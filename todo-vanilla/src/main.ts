import "./theme/index.css";
import { renderTodos, createAddTodoClick } from "./ui/general";

/** Initialization home page. */
function initHomePage(): void {
  console.log("initHomePage");

  renderTodos();
  createAddTodoClick()
}

window.addEventListener("DOMContentLoaded", initHomePage);
window.addEventListener("popstate", () => window.history.go());
