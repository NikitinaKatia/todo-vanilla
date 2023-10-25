import Dexie from "dexie";

import { TodoIndexDB } from "./todo.service";

export class TodosDatabase extends Dexie {
  todos!: Dexie.Table<TodoIndexDB, string>;

  constructor() {
    super("TodosDatabase");
    this.version(1).stores({
      todos: "id, title, completed",
    });
  }
}
export const db = new TodosDatabase();
