import "./theme/index.css";

/** Initialization home page. */
function initHomePage(): void {
  console.log("initHomePage");
}

window.addEventListener("DOMContentLoaded", initHomePage);
window.addEventListener("popstate", () => window.history.go());
