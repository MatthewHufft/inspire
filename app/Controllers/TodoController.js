import todoService from "../Services/TodoService.js";
import { ProxyState } from "../AppState.js";
import Todo from "../Models/Todo.js";

//TODO Create the draw function
function _drawTodos() {
  let template = ''
  let todos = ProxyState.todos
  todos.forEach(t => template += t.Template)
  document.getElementById('listItems').innerHTML = template
 }


export default class TodoController {
  constructor() {
    //TODO Remember to register your subscribers
    ProxyState.on("todos", _drawTodos)
    todoService.getTodos();
  }

  getTodos() {
    try {
      todoService.getTodos()
    } catch (error) {
      console.error(error)
    }
  }
  //TODO build the todo object from the data that comes into this method
  addTodo(event) {
    event.preventDefault();
    var form = event.target;
    var todo = {
      id:"",
      completed: false,
      user: true,
      description: form.description.value
    }

    try {
      todoService.addTodo(todo);
    } catch (error) {
      console.error(error)
    }
  }

  /**
 * This method takes in an id of the Todo that should be togggled as complete
 * @param {string} todoId 
 */
  toggleTodoStatus(todoId) {
    try {
      todoService.toggleTodoStatus(todoId);
    } catch (error) {
      console.error(error)
    }
  }

  /**
   * This method takes in an id of the Todo that should be removed
   * @param {string} todoId 
   */
  removeTodo(todoId) {
    console.log("remove controller working")
    try {
      todoService.removeTodo(todoId);
    } catch (error) {
      console.error(error)
    }
    
  }
}