/** Сервис для взаимодействия с Todo: получения данных, обновление данных, удаление и т.п. */
// const TODOS_URL: string = 'https://jsonplaceholder.typicode.com/todos/1';

export async function fetchTodos(url: string) {
  const response = await fetch(url);
  const data = await response.json();
  console.log(data);
}

export async function fetchTodo(url: string) {
    const response = await fetch(url);
    const data = await response.json()
    console.log(data);
    
}

