/** Сервис для взаимодействия с Todo: получения данных, обновление данных, удаление и т.п. */

import { db } from "./db";

export interface Todo {
  id: string;
  title: string;
  completed: boolean;
}

export const todos: Todo[] = [];

export function addTodoDB(obj: Todo) {
  db.table("todos").add(obj);
}

export function deleteTodoFromDb(id: string) {
  db.table("todos")
    .toArray()
    .then((response) => {
      response.forEach((todo) => {
        if (id === todo.id) {
          db.table("todos").delete(todo.id);
        }
      });
    });
}
