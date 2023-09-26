/** Сервис для взаимодействия с Todo: получения данных, обновление данных, удаление и т.п. */

export async function fetchTodos() {
  const response = await fetch('https://jsonplaceholder.typicode.com/todos');
  const data = await response.json();
  return data
}

export async function fetchTodoById(id: number) {
    const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`);
    const data = await response.json()
    console.log(data);
    
    return data
    
}

