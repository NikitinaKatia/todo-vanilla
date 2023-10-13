import { todos, Todo } from "../../services/todo.service";
import { getDomElement } from "../general";
import { createListItem } from "./list";

export function showActiveTodos() {
  const filteredTodos = todos.filter((todo) => todo.completed === false);

  updateTodos(filteredTodos);
}

export function showAllTodos() {
  updateTodos(todos);
}

export function showCompletedTodos() {
  const filteredTodos = todos.filter((todo) => todo.completed === true);
  updateTodos(filteredTodos);
}

function updateTodos(todos: Todo[]) {
  const todoList = getDomElement(".todo-list");
  todoList.innerHTML = "";

  todos.forEach((todo) => {
    const todoItem = createListItem(todo);
    todoList.append(todoItem);
  });
}
