import { v4 as uuidv4 } from "uuid";

import { Todo, addTodoDB } from "src/services/todo.service";
import { getDomElement } from "../general";
import { createListItem } from "./list";
import { getValue } from "src/services/local-storage.service";

export function createAddTodoClick() {
  const btnAddTodoElement = getDomElement(".add-todo");
  const todoList = getDomElement(".todo-list");
  const input: HTMLInputElement = getDomElement(".addInput");
  
  btnAddTodoElement.addEventListener("click", () => {
    const filterValue: string | null = getValue('filter');
    
    if(filterValue === 'all') {
      addTodos(todoList, input);
    }
    if(filterValue === 'active') {
      addTodos(todoList, input);
    }
    if(filterValue === 'completed') {
      addCompletedTodos(input);
      input.value=''
    }
    
  });
  input.addEventListener("change", () => {
    const filterValue: string | null = getValue('filter');
    
    if(filterValue === 'all') {
      addTodos(todoList, input);
    }
    if(filterValue === 'active') {
      addTodos(todoList, input);
    }
    if(filterValue === 'completed') {
      addCompletedTodos(input);
      input.value=''
    }
  });
}

function addCompletedTodos(input: HTMLInputElement) {
  const todoItem: Todo = {
    id: uuidv4(),
    title: input.value,
    completed: input.checked,
  };
  
  addTodoDB(todoItem);
}

function addTodos(todoList: Element, input: HTMLInputElement) {
  if (input.value.trim() === "") {
    return;
  }
  const todoItem: Todo = {
    id: uuidv4(),
    title: input.value,
    completed: input.checked,
  };
  
  addTodoDB(todoItem);
  const todoItemElement = createListItem(todoItem);

  todoList.append(todoItemElement);
  input.value = "";
}
