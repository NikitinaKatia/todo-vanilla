import { db } from "./db";

export interface Todo {
  id: string;
  title: string;
  completed: boolean;
}

export function addTodoDB(todo: Todo): void {
  db.table("todos").add(todo);
}

export function deleteTodoFromDb(id: string) {
  db.table("todos").delete(id);
}

export function updateTodo(todoItem: Todo): void {
  db.table("todos").put(todoItem);
}

export async function getTodos(): Promise<Todo[]> {
  const todos = await db.table<Todo>("todos").toArray();
  return todos;
}
