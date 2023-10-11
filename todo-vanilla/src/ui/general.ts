/** Слой, где будет происходить работа с UI. Динамическая отрисовка списка todo и т.п. */
import {v4 as uuidv4} from 'uuid';

import { todos, Todo } from "../services/todo.service";

let idTodo = uuidv4();

export function getDomElement<T extends Element>(
  selector: string): T {
  const element = document.querySelector<T>(selector);
  if (element !== undefined && element !== null) {
    return element;
  }

  throw new Error(`Element not found by selector ${selector}`);
}


function createDeleteBtn(listItem: HTMLLIElement, id: string) {
  const deleteBtn = document.createElement('button');
  deleteBtn.textContent = 'X';
  const todoList = getDomElement('.todo-list');
  
  deleteBtn.addEventListener('click', () => {
    todoList.removeChild(listItem);

    todos.forEach((todo, index) => {
      if(id === todo.id) {
        todos.splice(index, 1)
      }
    })
  })
  return deleteBtn
}


export function createListItem(text: string) {
  const listItem = document.createElement("li");
  const input = document.createElement("input");
  const span = document.createElement("span");
  
  input.type = "checkbox";
  
  const todoItem: Todo = {
    id: idTodo +=1,
    title: text,
    completed: input.checked,
  }

  const deleteBtn = createDeleteBtn(listItem, todoItem.id)
  
  console.log(todos);
  
  
  todos.push(todoItem);

  input.addEventListener('change', (event) => {
    const target = event.target as HTMLInputElement
    
    if(target.checked === true) {
      span.style.textDecoration = 'line-through'
      todoItem.completed = true
    }

    if(target.checked === false) {
      span.style.textDecoration = 'none'
      todoItem.completed = false
    }
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
    if(input.value.trim() === '') {
      return
    }
    const todoItemElement = createListItem(input.value)


    todoList.append(todoItemElement);
    input.value = '';
  })

  input.addEventListener('change', () => {
    const todoItemElement = createListItem(input.value)

      if(input.value.trim() === '') {
        return
      }
      
      todoList.append(todoItemElement);
      input.value = '';
  })
}
