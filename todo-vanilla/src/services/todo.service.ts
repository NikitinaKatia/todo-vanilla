import { db } from "./db";
import { mapToTodoIndexDB, mapToTodo } from "../mappers/todo.mapper";

export interface Todo {
  id: string;
  title: string;
  completed: boolean;
}

export interface TodoIndexDB {
  id: string;
  title: string;
  completed: 1 | 0;
}

export function addTodoDB(todo: Todo): void {
  const todoIndexDB = mapToTodoIndexDB(todo);
  db.todos.add(todoIndexDB);
}

export function deleteTodoFromDb(id: string) {
  db.todos.delete(id);
}

export function updateTodo(todo: Todo): void {
  const todoIndexDB = mapToTodoIndexDB(todo);
  db.todos.put(todoIndexDB);
}

export async function getTodos(completed?: boolean): Promise<Todo[]> {
  const query =
    completed === undefined
      ? db.todos
      : db.todos.where({ completed: completed ? 1 : 0 });
  const todosIndexDB = await query.toArray();
  return todosIndexDB.map((todo) => mapToTodo(todo));
}
