import { setValue } from "src/services/local-storage.service";
import { getTodos, Todo } from "src/services/todo.service";
import { getDomElement } from "../general";
import { createListItem } from "./list";
import { FILTER_TODO_KEY } from "src/core/constants";

export async function showActiveTodos(): Promise<void> {
  const todos = await getTodos(false);

  setValue(FILTER_TODO_KEY, "active");
  updateTodos(todos);
}

export async function showAllTodos(): Promise<void> {
  const todos: Todo[] = await getTodos();

  setValue(FILTER_TODO_KEY, "all");
  updateTodos(todos);
}

export async function showCompletedTodos(): Promise<void> {
  const todos = await getTodos(true);

  setValue(FILTER_TODO_KEY, "completed");
  updateTodos(todos);
}

function updateTodos(todos: Todo[]): void {
  const todoList: Element = getDomElement(".todo-list");
  todoList.innerHTML = "";

  todos.forEach((todo) => {
    const todoItem: HTMLLIElement = createListItem(todo);
    todoList.append(todoItem);
  });
}
