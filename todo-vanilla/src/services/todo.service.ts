import { db } from "./db";
import { mapToTodoIndexDB, mapToTodo } from '../mappers/todo.mapper'

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
  const todoIndexDB = mapToTodoIndexDB(todo)
  db.todos.add(todoIndexDB);
}

export function deleteTodoFromDb(id: string) {
  db.todos.delete(id);
}

export function updateTodo(todo: Todo): void {
  const todoIndexDB = mapToTodoIndexDB(todo)
  db.todos.put(todoIndexDB);
}

export async function getTodos(): Promise<Todo[]> {
  const todosIndexDB = await db.todos.toArray();
  const todos = todosIndexDB.map(todo => mapToTodo(todo))
  return todos;
}
