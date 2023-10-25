import { v4 as uuidv4 } from "uuid";

import { Todo, addTodoDB } from "src/services/todo.service";
import { getDomElement } from "../general";
import { FilterValueType, createListItem } from "./list";
import { getValue } from "src/services/local-storage.service";
import { FILTER_TODO_KEY } from "src/core/constants";

export function createAddTodoClick(): void {
  const btnAddTodoElement: Element = getDomElement(".add-todo");
  const input: HTMLInputElement = getDomElement(".addInput");
  const todoList: Element = getDomElement(".todo-list");

  btnAddTodoElement.addEventListener("click", () => {
    addTodos(todoList, input);
  });

  input.addEventListener("change", () => {
    addTodos(todoList, input);
  });
}

function addTodos(todoList: Element, input: HTMLInputElement): void {
  if (input.value.trim() === "") {
    return;
  }
  const filteredValue = getValue<FilterValueType>(FILTER_TODO_KEY);
  const todoItem: Todo = {
    id: uuidv4(),
    title: input.value,
    completed: input.checked,
  };

  if (filteredValue === "completed") {
    addTodoDB(todoItem);
  } else {
    addTodoDB(todoItem);
    const todoItemElement = createListItem(todoItem);
    todoList.append(todoItemElement);
  }
  input.value = "";
}
