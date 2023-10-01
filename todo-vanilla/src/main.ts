import "./theme/index.css";
import { renderTodos } from "./ui/general";

/** Initialization home page. */
function initHomePage(): void {
  console.log("initHomePage");

  renderTodos();
}

window.addEventListener("DOMContentLoaded", initHomePage);
window.addEventListener("popstate", () => window.history.go());
