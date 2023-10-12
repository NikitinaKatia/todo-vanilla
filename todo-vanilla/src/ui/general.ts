/** Слой, где будет происходить работа с UI. Динамическая отрисовка списка todo и т.п. */
import {v4 as uuidv4} from 'uuid';

import { todos, Todo } from "../services/todo.service";

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

export function createListItem(todoItem: Todo) {
  const listItem = document.createElement("li");
  const input = document.createElement("input");
  const span = document.createElement("span");
  
  input.type = "checkbox";
  input.checked = todoItem.completed
  
  const deleteBtn = createDeleteBtn(listItem, todoItem.id)
  

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
  
  span.textContent = todoItem.title;
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
    const todoItem: Todo = {
      id: uuidv4(),
      title: input.value,
      completed: input.checked,
    }
    const todoItemElement = createListItem(todoItem)
    todos.push(todoItem);
    todoList.append(todoItemElement);
    input.value = '';
  })

  input.addEventListener('change', () => {

      if(input.value.trim() === '') {
        return
      }

      const todoItem: Todo = {
        id: uuidv4(),
        title: input.value,
        completed: input.checked,
      }
      const todoItemElement = createListItem(todoItem)
      todos.push(todoItem);
      
      todoList.append(todoItemElement);
      input.value = '';
  })
}

 export function showActiveTodos() {
  
  const filteredTodos = todos.filter(todo => {
    if(todo.completed === false) {
      return true
    }
  })
  
  updateTodos(filteredTodos)
}

export function showAllTodos() {

  updateTodos(todos)

}

export function showCompletedTodos() {
  const filteredTodos = todos.filter(todo => {
    if(todo.completed === true) {
      return true
    }
  })

  updateTodos(filteredTodos)
}

function updateTodos(arrayTodos: Todo[]) {
  const todoList = getDomElement('.todo-list');
  todoList.innerHTML = '';

  arrayTodos.forEach(todo => {
    const newTodoItem = createListItem(todo);
    todoList.append(newTodoItem)
  })
}





