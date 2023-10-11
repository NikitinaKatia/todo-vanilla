// import { Todo } from './todo.service';
/** Сервис для взаимодействия с Todo: получения данных, обновление данных, удаление и т.п. */

export interface Todo {
  id: string;
  title: string;
  completed: boolean;
}

export const todos: Todo[] = [];
