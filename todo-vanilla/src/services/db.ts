import Dexie from "dexie";
import { Todo } from "./todo.service";



export class TodosDatabase extends Dexie {
  todos!: Dexie.Table<Todo, string>;

  constructor() {
    super("TodosDatabase");
    this.version(1).stores({
      todos: "id, title, completed",
    });
  }
}
export const db = new TodosDatabase();
