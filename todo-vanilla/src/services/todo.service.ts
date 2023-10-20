import { db } from "./db";

export interface Todo {
  id: string;
  title: string;
  completed: boolean;
}

export function addTodoDB(todo: Todo): void {
  db.table("todos").add(todo);
}

export async function deleteTodoFromDb(id: string): Promise<void> {
  await db.table("todos").delete(id);
}

export function updateTodo(todoItem: Todo): void {
  db.table("todos").put(todoItem)
}

export async function getTodos(): Promise<Todo[]> {
  const todos: Todo[] = await db.table("todos").toArray();
  
  return todos;
}
