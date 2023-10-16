/** Сервис для взаимодействия с Todo: получения данных, обновление данных, удаление и т.п. */

import { db } from "./db";

export interface Todo {
  id: string;
  title: string;
  completed: boolean;
}

export const todos: Todo[] = [];

export function addTodoDB(obj: Todo) {
  db.table('todos').add(obj)
}
