import "./theme/index.css";
import { createAddTodoClick } from "./ui/general";

/** Initialization home page. */
function initHomePage(): void {
  console.log("initHomePage");

  createAddTodoClick()
}

window.addEventListener("DOMContentLoaded", initHomePage);
window.addEventListener("popstate", () => window.history.go());
