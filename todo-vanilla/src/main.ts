import "./theme/index.css";
import {
  createAddTodoClick,
  showActiveTodos,
  showAllTodos,
  getDomElement,
  showCompletedTodos,
} from "./ui/general";

function initHomePage(): void {
  const activeTodosBtn = getDomElement(".active-todos");
  const allTodosBtn = getDomElement(".all-todos");
  const completedTodosBtn = getDomElement(".completed-todos");

  createAddTodoClick();
  activeTodosBtn?.addEventListener("click", showActiveTodos);
  allTodosBtn?.addEventListener("click", showAllTodos);
  completedTodosBtn?.addEventListener("click", showCompletedTodos);
}

window.addEventListener("DOMContentLoaded", initHomePage);
window.addEventListener("popstate", () => window.history.go());
