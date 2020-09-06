import { ProxyState } from "../AppState.js";
import { api } from "../Services/AxiosService.js";
import Todo from "../Models/Todo.js";

let url = 'matthewhufft/todos/'


class TodoService {
  async getTodos() {
    let res = await api.get(url);
    ProxyState.todos = res.data.data.map(t => new Todo(t))
    console.log(ProxyState.todos)
  }
  
  async addTodo(todo) {
    let res = await api.post(url, todo);
    ProxyState.todos = [...ProxyState.todos, new Todo(res.data.data)]
    console.log(ProxyState.todos)
  } 

  async toggleTodoStatus(todoId) {
    let todo = ProxyState.todos.find(todo => todo.id == todoId);
      if(todo.completed) {
        todo.completed = false;
      } else {
        todo.completed = true;
      }
      ProxyState.todos = ProxyState.todos
    let res = await api.put(`${url}${todoId}`, {completed: todo.completed});
  }

  async removeTodo(todoId) {
    let res = await api.delete(`${url}${todoId}`)
    ProxyState.todos = ProxyState.todos.filter(t => t.id !== todoId)
  }
}

const todoService = new TodoService();
export default todoService;