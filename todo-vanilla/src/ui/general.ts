/** Слой, где будет происходить работа с UI. Динамическая отрисовка списка todo и т.п. */

import { fetchTodos } from "../services/todo.service";

export function getDomElement(selector: string): Element {
  const element = document.querySelector(selector);
  if (element !== undefined && element !== null) {
    return element;
  }
  throw new Error(`Element not found by selector ${selector}`);
}

export function createListItem(text: string) {
  const listItem = document.createElement("li");
  const input = document.createElement("input");
  const span = document.createElement("span");
  input.type = "checkbox";
  span.textContent = text;
  listItem.appendChild(input);
  listItem.appendChild(span);
  return listItem;
}

export async function renderTodos() {
  const todos = await fetchTodos();
  const todoListElement = getDomElement(".todo-list");

  todos.map((todo) => {
    const listItem = createListItem(todo.title);
    todoListElement.append(listItem);
  });
}
