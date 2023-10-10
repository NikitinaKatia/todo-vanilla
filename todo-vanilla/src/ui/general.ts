/** Слой, где будет происходить работа с UI. Динамическая отрисовка списка todo и т.п. */

import { todos, Todo } from "../services/todo.service";

let idTodo: number = 0;

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
  const deleteBtn = document.createElement('button');
  deleteBtn.textContent = 'X'
  input.type = "checkbox";

  const todoItem: Todo = {
    id: idTodo +=1,
    title: text,
    completed: input.checked,
  }

  input.addEventListener('change', (event) => {
    
    if((<HTMLInputElement>event.target).checked === true) {
      span.style.textDecoration = 'line-through'
    }

    if((<HTMLInputElement>event.target).checked === false) {
      span.style.textDecoration = 'none'
    }
    
    todos.push(todoItem);
  })
  
  span.textContent = text;
  listItem.appendChild(input);
  listItem.appendChild(span);
  listItem.appendChild(deleteBtn);
  return listItem;
}


export function createAddTodoClick() {
  const todoList = getDomElement('.todo-list');
  const btnAddTodoElement = getDomElement('.add-todo');
  const input: HTMLInputElement = getDomElement('.addInput');

  btnAddTodoElement.addEventListener('click', () => {
    const todoItemElement = createListItem(input.value)
    
    if(!input.value) {
      return
    } else {
      input.value.trim()
    }
    
    todoList.append(todoItemElement);
    input.value = '';
  })
}
