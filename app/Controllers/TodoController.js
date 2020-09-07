import todoService from "../Services/TodoService.js";
import { ProxyState } from "../AppState.js";

function _drawTodos() {
  let template = ''
  let todos = ProxyState.todos
  todos.forEach(t => template += t.Template)
  document.getElementById('listItems').innerHTML = template
  _getItemCount()
 }

function _getItemCount(){
   let todos = ProxyState.todos
   let count = todos.length
   for (let i = 0; i < todos.length; i++) {
     const todo = todos[i];
     if(todo.completed == true){
       count--
     }
   }
   if(count >= 1){
     document.getElementById('toDoHeader').innerHTML = `${count} things on your agenda`
   } else if (count == 0){
     document.getElementById('toDoHeader').innerHTML = `You've finished all your tasks!`
   }
 }

export default class TodoController {
  constructor() {
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
    try {
      todoService.removeTodo(todoId);
    } catch (error) {
      console.error(error)
    }
    
  }
}