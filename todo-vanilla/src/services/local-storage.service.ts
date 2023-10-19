import {
  showAllTodos,
  showActiveTodos,
  showCompletedTodos,
} from "src/ui/todos/filter";

export function getValue<T>(key: string): T | null {
  const localValue = localStorage.getItem(key);
  return JSON.parse(localValue ? localValue : "null");
}

export function setValue<T>(key: string, value: T): void {
  localStorage.setItem(key, JSON.stringify(value));
}

export function initRender() {
  const filterValue = getValue("filter");
  if (filterValue === "all") {
    showAllTodos();
  }
  if (filterValue === "active") {
    showActiveTodos();
  }
  if (filterValue === "completed") {
    showCompletedTodos();
  }
}
