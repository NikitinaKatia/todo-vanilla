import { setValue } from "src/services/local-storage.service";
import { getTodos, Todo } from "src/services/todo.service";
import { getDomElement } from "../general";
import { createListItem } from "./list";




export async function showActiveTodos() {
  
  setValue("filter", "active");
  
  const todos = await getTodos();
  // const filteredTodos = await db.table('todos').where({completed: 0}).toArray()
  const filteredTodos = todos.filter((todo) => todo.completed === false);

  updateTodos(filteredTodos);
}

export async function showAllTodos() {
  setValue("filter", "all");

  const todos = await getTodos();
  updateTodos(todos);
}

export async function showCompletedTodos() {
  setValue("filter", "completed");
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
