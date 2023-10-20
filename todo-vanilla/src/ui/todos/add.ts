import { v4 as uuidv4 } from "uuid";

import { Todo, addTodoDB } from "src/services/todo.service";
import { getDomElement } from "../general";
import { createListItem } from "./list";
import { checkFilter } from "./filter";

export function createAddTodoClick(): void {
  const btnAddTodoElement: Element = getDomElement(".add-todo");
  const input: HTMLInputElement = getDomElement(".addInput");

  btnAddTodoElement.addEventListener("click", () => {
    checkFilter();
  });

  input.addEventListener("change", () => {
    checkFilter();
  });
}

export function addCompletedTodos(input: HTMLInputElement): void {
  const todoItem: Todo = {
    id: uuidv4(),
    title: input.value,
    completed: input.checked,
  };

  addTodoDB(todoItem);
}

export function addTodos(todoList: Element, input: HTMLInputElement): void {
  if (input.value.trim() === "") {
    return;
  }
  const todoItem: Todo = {
    id: uuidv4(),
    title: input.value,
    completed: input.checked,
  };

  addTodoDB(todoItem);
  const todoItemElement: HTMLLIElement = createListItem(todoItem);

  todoList.append(todoItemElement);
  input.value = "";
}
