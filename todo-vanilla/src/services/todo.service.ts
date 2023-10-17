import { db } from "./db";

export interface Todo {
  id: string;
  title: string;
  completed: boolean;
}

export const todos: Todo[] = [];

export function addTodoDB(todo: Todo) {
  db.table("todos").add(todo);
}

export async function deleteTodoFromDb(id: string) {
  await db.table("todos").delete(id);
}

export function updateTodoCheckbox(todoItem: Todo) {
  todoItem.completed
    ? db.table("todos").put(todoItem)
    : db.table("todos").put(todoItem);
}

export async function getTodos() {
  const todos = await db.table("todos").toArray();
  return todos;
}
