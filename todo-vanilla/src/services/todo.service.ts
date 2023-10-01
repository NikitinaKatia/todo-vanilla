/** Сервис для взаимодействия с Todo: получения данных, обновление данных, удаление и т.п. */

export interface Todo{
  slice(arg0: number, arg1: number): unknown;
  userId: number;
  id: number;
  title: string;
  completed: boolean
}

export async function fetchTodos() : Promise<Todo> {
  const response = await fetch('https://jsonplaceholder.typicode.com/todos');
  const data : Todo = await response.json();
  return data
}

export async function fetchTodoById(id: Todo['id']) : Promise<Todo> {
    const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`);
    const data : Todo = await response.json()
    return data
}

