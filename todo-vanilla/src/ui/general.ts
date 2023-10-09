/** Слой, где будет происходить работа с UI. Динамическая отрисовка списка todo и т.п. */

import { todos, Todo } from "../services/todo.service";

export function getDomElement<T extends Element>(
  selector: string): T {
  const element = document.querySelector<T>(selector);
  if (element !== undefined && element !== null) {
    return element;
  }

  throw new Error(`Element not found by selector ${selector}`);
}

export function createListItem(text: string) {
  const listItem = document.createElement("li");
  const input = document.createElement("input");
  const span = document.createElement("span");
  
  
  input.type = "checkbox";
  input.addEventListener('change', (event) => {
    let idTodo: number = 0;
    const todoItem: Todo = {
      id: idTodo +=1,
      title: text,
      completed: (<HTMLInputElement>event.target).checked,
    }
    if(event.target.checked === true) {
      span.style.textDecoration = 'line-through'
    }
    todos.push(todoItem);
  })
  
  span.textContent = text;
  listItem.appendChild(input);
  listItem.appendChild(span);
  return listItem;
}

export function createAddTodoClick() {
  const todoList = getDomElement('.todo-list');
  const btnAddTodoElement = getDomElement('.add-todo');
  const input: HTMLInputElement = getDomElement('.addInput');

  btnAddTodoElement.addEventListener('click', () => {
    const todoItemElement = createListItem(input.value)
    todoList.append(todoItemElement);
    input.value = '';
  })
}
