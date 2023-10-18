import { Todo, getTodos } from "../../services/todo.service";
import { getDomElement } from "../general";
import { createListItem } from "./list";

export async function showActiveTodos() {
  const todos = await getTodos();
  const filteredTodos = todos.filter((todo) => todo.completed === false);
  updateTodos(filteredTodos);
}

export async function showAllTodos() {
  const todos = await getTodos();
  updateTodos(todos);
}

export async function showCompletedTodos() {
  const todos = await getTodos();
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
