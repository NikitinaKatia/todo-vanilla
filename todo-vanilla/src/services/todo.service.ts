/** Сервис для взаимодействия с Todo: получения данных, обновление данных, удаление и т.п. */

interface Todo{
  userId: number;
  id: number;
  title: string;
  completed: boolean
}

export async function fetchTodos() : Promise<object> {
  const response = await fetch('https://jsonplaceholder.typicode.com/todos');
  const data : Todo = await response.json();
  return data
}

export async function fetchTodoById(id: number) : Promise<object> {
    const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`);
    const data : Todo = await response.json()
    return data
}

