import { todos, Todo } from "../../services/todo.service";
import { getDomElement } from "../general";

function createDeleteBtn(listItem: HTMLLIElement, id: string) {
  const deleteBtn = document.createElement("button");
  const todoList = getDomElement(".todo-list");
  deleteBtn.textContent = "X";

  deleteBtn.addEventListener("click", () => {
    todoList.removeChild(listItem);

    todos.forEach((todo, index) => {
      if (id === todo.id) {
        todos.splice(index, 1);
      }
    });
  });
  return deleteBtn;
}

export function createListItem(todoItem: Todo) {
  const listItem = document.createElement("li");
  const input = document.createElement("input");
  const span = document.createElement("span");
  const deleteBtn = createDeleteBtn(listItem, todoItem.id);

  span.textContent = todoItem.title;
  input.type = "checkbox";
  input.checked = todoItem.completed;

  input.addEventListener("change", (event) => {
    const target = event.target as HTMLInputElement;
    todoItem.completed = target.checked;
    span.style.textDecoration = target.checked ? "line-through" : "none";
  });

  listItem.append(input, span, deleteBtn);
  return listItem;
}
