import { db } from "./db";

export interface Todo {
  id: string;
  title: string;
  completed: boolean;
}

export function addTodoDB(todo: Todo) {
  db.table("todos").add(todo);
}

export async function deleteTodoFromDb(id: string) {
  await db.table("todos").delete(id);
}

export function updateTodo(todoItem: Todo) {
  db.table("todos").put(todoItem)
}

export async function getTodos() {
  const todos = await db.table("todos").toArray();
  return todos;
}
