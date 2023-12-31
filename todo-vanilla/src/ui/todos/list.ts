import { deleteTodoFromDb, Todo, updateTodo } from "src/services/todo.service";
import { getDomElement } from "../general";
import { getValue } from "src/services/local-storage.service";
import { showAllTodos, showActiveTodos, showCompletedTodos } from "./filter";
import { FILTER_TODO_KEY } from "src/core/constants";

export type FilterValueType = "all" | "active" | "completed";

function createDeleteBtn(
  listItem: HTMLLIElement,
  id: string,
): HTMLButtonElement {
  const deleteBtn = document.createElement("button");
  const todoList = getDomElement(".todo-list");
  deleteBtn.textContent = "X";
  deleteBtn.addEventListener("click", () => {
    todoList.removeChild(listItem);
    deleteTodoFromDb(id);
  });
  return deleteBtn;
}

export function createListItem(todoItem: Todo): HTMLLIElement {
  const todoList: Element = getDomElement(".todo-list");
  const listItem: HTMLLIElement = document.createElement("li");
  const input: HTMLInputElement = document.createElement("input");
  const span: HTMLSpanElement = document.createElement("span");
  const deleteBtn: HTMLButtonElement = createDeleteBtn(listItem, todoItem.id);

  span.style.textDecoration = todoItem.completed ? "line-through" : "none";
  span.textContent = todoItem.title;
  input.type = "checkbox";
  input.checked = todoItem.completed;

  input.addEventListener("change", (event) => {
    const filterValue = getValue<FilterValueType>(FILTER_TODO_KEY);
    const target = event.target as HTMLInputElement;

    todoItem.completed = target.checked;
    span.style.textDecoration = target.checked ? "line-through" : "none";

    if (filterValue === "active") {
      todoList.removeChild(listItem);
    }
    if (filterValue === "completed") {
      todoList.removeChild(listItem);
    }
    updateTodo(todoItem);
  });

  listItem.append(input, span, deleteBtn);
  return listItem;
}

export function initRender(): void {
  const filterValue = getValue<FilterValueType>(FILTER_TODO_KEY);

  const showFunctions = {
    all: showAllTodos,
    active: showActiveTodos,
    completed: showCompletedTodos,
  };

  if (filterValue === null) {
    showAllTodos();
    return;
  }

  const selectedShowFunction = showFunctions[filterValue] || showAllTodos;
  selectedShowFunction();
}
