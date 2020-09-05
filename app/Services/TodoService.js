import { ProxyState } from "../AppState.js";
import { api } from "../Services/AxiosService.js";
import Todo from "../Models/Todo.js";

// TODO you will need to change 'YOURNAME' to your actual name or all requests will be rejected
let url = 'matthewhufft/todos/'


class TodoService {
  async getTodos() {
    //TODO Handle this response from the server
    console.log("Getting the Todo List");
    let res = await api.get(url);
    ProxyState.todos = res.data.data.map(t => new Todo(t))
    console.log(ProxyState.todos)
  }
  
  async addTodo(todo) {
    //TODO Handle this response from the server
    let res = await api.post(url, todo);
    ProxyState.todos = [...ProxyState.todos, new Todo(res.data.data)]
    console.log(ProxyState.todos)
  }

  async toggleTodoStatus(todoId) {
    let todo = await ProxyState.todos.find(todo => todo.id == todoId);
    //TODO Make sure that you found a todo,
    //		and if you did find one
    //		change its completed status to whatever it is not (ex: false => true or true => false)

    let res = await api.put(url + todoId, todo);
    //TODO how do you trigger this change
  }

  async removeTodo(todoId) {
    //TODO Work through this one on your own
    //		what is the request type
    //		once the response comes back, how do you update the state
    let res = await api.delete(`${url}${todoId}`)
    ProxyState.todos = ProxyState.todos.filter(t => t.id !== todoId)
  }
}

const todoService = new TodoService();
export default todoService;