import "./theme/index.css";
import { createAddTodoClick, showActiveTodos, showAllTodos, getDomElement, showCompletedTodos } from "./ui/general";

/** Initialization home page. */
function initHomePage(): void {
  const activeTodosBtn = getDomElement('.active-todos');
  const allTodosBtn = getDomElement('.all-todos');
  const completedTodosBtn = getDomElement('.completed-todos')
  console.log("initHomePage");

  createAddTodoClick()
  activeTodosBtn?.addEventListener('click', showActiveTodos);
  allTodosBtn?.addEventListener('click', showAllTodos);
  completedTodosBtn?.addEventListener('click', showCompletedTodos)
}

window.addEventListener("DOMContentLoaded", initHomePage);
window.addEventListener("popstate", () => window.history.go());
