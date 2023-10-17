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

export function updateTodoCheckbox(todoItem: Todo) {
  todoItem.completed
    ? db.table("todos").put(todoItem)
    : db.table("todos").put(todoItem);
}
