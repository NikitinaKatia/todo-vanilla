import { v4 as uuidv4 } from "uuid";

import { Todo, addTodoDB } from "../../services/todo.service";
import { getDomElement } from "../general";
import { createListItem } from "./list";

export function createAddTodoClick() {
  const btnAddTodoElement = getDomElement(".add-todo");
  const todoList = getDomElement(".todo-list");
  const input: HTMLInputElement = getDomElement(".addInput");

  btnAddTodoElement.addEventListener("click", () => {
    addTodos(todoList, input);
  });

  input.addEventListener("change", () => {
    addTodos(todoList, input);
  });
}

function addTodos(todoList: Element, input: HTMLInputElement) {
  if (input.value.trim() === "") {
    return;
  }
  const todoItem: Todo = {
    id: uuidv4(),
    title: input.value,
    completed: input.checked,
  };
  addTodoDB(todoItem);
  const todoItemElement = createListItem(todoItem);

  todoList.append(todoItemElement);
  input.value = "";
}
