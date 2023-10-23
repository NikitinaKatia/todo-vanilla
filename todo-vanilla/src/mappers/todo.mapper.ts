import { Todo, TodoIndexDB } from "src/services/todo.service";

export function mapToTodoIndexDB(todo: Todo): TodoIndexDB {
  const todoIndexDb: TodoIndexDB = {
    id: todo.id,
    title: todo.title,
    completed: todo.completed ? 1 : 0,
  };
  return todoIndexDb;
}

export function mapToTodo(todoIndexDb: TodoIndexDB) {
  const todo = {
    id: todoIndexDb.id,
    title: todoIndexDb.title,
    completed: todoIndexDb.completed === 1 ? true : false,
  };
  return todo;
}
