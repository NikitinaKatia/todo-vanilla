import { getValue, setValue } from "src/services/local-storage.service";
import { getTodos, Todo } from "src/services/todo.service";
import { getDomElement } from "../general";
import { createListItem } from "./list";
import { addTodos, addCompletedTodos } from "./add";

export async function showActiveTodos(): Promise<void> {
  const todos = await getTodos();
  const filteredTodos = todos.filter((todo) => todo.completed === false);

  setValue("filter", "active");
  updateTodos(filteredTodos);
}

export async function showAllTodos(): Promise<void> {
  const todos: Todo[] = await getTodos();

  setValue("filter", "all");
  updateTodos(todos);
}

export async function showCompletedTodos(): Promise<void> {
  const todos = await getTodos();
  const filteredTodos = todos.filter((todo) => todo.completed === true);

  setValue("filter", "completed");
  updateTodos(filteredTodos);
}

function updateTodos(todos: Todo[]): void {
  const todoList: Element = getDomElement(".todo-list");
  todoList.innerHTML = "";

  todos.forEach((todo) => {
    const todoItem: HTMLLIElement = createListItem(todo);
    todoList.append(todoItem);
  });
}

export function checkFilter(): void {
  const input: HTMLInputElement = getDomElement(".addInput");
  const todoList: Element = getDomElement(".todo-list");
  const filterValue: string | null = getValue("filter");

  if (filterValue === "all") {
    addTodos(todoList, input);
  }
  if (filterValue === "active") {
    addTodos(todoList, input);
  }
  if (filterValue === "completed") {
    addCompletedTodos(input);
    input.value = "";
  }
}
