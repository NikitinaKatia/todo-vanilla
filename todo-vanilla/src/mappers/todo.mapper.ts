import { IS_COMPLETED_TODO, IS_NOT_COMPLETED_TODO } from "src/core/constants";
import { Todo, TodoIndexDB } from "src/services/todo.service";

export function mapToTodoIndexDB(todo: Todo): TodoIndexDB {
  const todoIndexDb: TodoIndexDB = {
    id: todo.id,
    title: todo.title,
    completed: todo.completed ? IS_COMPLETED_TODO : IS_NOT_COMPLETED_TODO,
  };
  return todoIndexDb;
}

export function mapToTodo(todoIndexDb: TodoIndexDB) {
  const todo = {
    id: todoIndexDb.id,
    title: todoIndexDb.title,
    completed: todoIndexDb.completed === IS_COMPLETED_TODO ? true : false,
  };
  return todo;
}
