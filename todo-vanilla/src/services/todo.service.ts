/** Сервис для взаимодействия с Todo: получения данных, обновление данных, удаление и т.п. */

export async function fetchTodos() : Promise<object> {
  const response = await fetch('https://jsonplaceholder.typicode.com/todos');
  const data : object = await response.json();
  return data
}

export async function fetchTodoById(id: number) : Promise<object> {
    const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`);
    const data : object = await response.json()
    return data
}

