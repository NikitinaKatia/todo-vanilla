import "./theme/index.css";
import { getDomElement } from './ui/general';
import { fetchTodos, Todo} from './services/todo.service';
// import { headersInfo,  addHeaderInfo, HeaderInfo} from './services/fake.service';

/** Initialization home page. */
function initHomePage(): void {
  console.log("initHomePage");
   async function getData() {
     const response = await fetchTodos();
     console.log(response, 'response');
     
     const tenTodos = response.slice(0, 10);
     return tenTodos
   }
  const ul = getDomElement('.todo-list');
  const btn = getDomElement('.btn');

  function renderTodoElement(todo: Todo) {
    const newTodoElement = document.createElement('li');
    newTodoElement.textContent = todo.title
    ul.append(newTodoElement)
  }

  btn.addEventListener('click', async () => {

    const response = await getData()
    response.map((el: Todo) => {
      renderTodoElement(el)
    })
  })
  

  // btn.addEventListener('click' , () => {
  //   headersInfo.forEach(el => {
  //     console.log(el);
      
  //     renderTodoElement(el)
  //   })
  // })


  // function renderTodoElementTest(todo: HeaderInfo) {
  //   const todoElement = document.createElement('li');
  //   todoElement.textContent = todo.title
  //   ul.append(todoElement)
  // }

  // headersInfo.forEach(el => {
  //   renderTodoElementTest(el)
  // })
  
  

  // const headerElement = getDomElement('.header');
  
  // const renderHeaderInfo = (headerInfo: HeaderInfo) => {
  //   const headerInfoElement = document.createElement('div');
  //   headerInfoElement.textContent = headerInfo.title;
  //   headerElement.append(headerInfoElement)
  // }

  // headersInfo.forEach(el => {
  //   renderHeaderInfo(el)
  // })
  // btn.addEventListener('click', () => {
  //   const el = {
  //     id: 1,
  //     title: '1234',
  //     path: "1234"
  //   }
  //   renderHeaderInfo(el)
  // })
}

window.addEventListener("DOMContentLoaded", initHomePage);
window.addEventListener("popstate", () => window.history.go());
