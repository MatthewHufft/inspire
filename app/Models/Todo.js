export default class Todo {
  constructor({ id, completed, user, description, _id }) {
    this.id = id || _id;
    this.completed = completed
    this.user = user
    this.description = description || "no description"
  }

  get Template () {

    if(this.completed) {
      return `
        <li class="d-flex justify-content-between my-1 mx-2 darker-bg "> 
          <div class="custom-control custom-checkbox" onclick="app.todoController.toggleTodoStatus('${this.id}')">
            <input type="checkbox" class="custom-control-input" id="${this.id}"  checked>
            <label class="custom-control-label " for="${this.id}"><span class="line-through">${this.description}</span></label>
          </div>
          <span> <i class="fa fa-times-circle-o" aria-hidden="true" role="button" onclick="app.todoController.removeTodo('${this.id}')"></i> </span>
        </li> `
    } else {
      return `
      <li class="d-flex justify-content-between my-1 mx-2 darker-bg "> 
        <div class="custom-control custom-checkbox" onclick="app.todoController.toggleTodoStatus('${this.id}')">
          <input type="checkbox" class="custom-control-input" id="${this.id}">
          <label class="custom-control-label" for="${this.id}">${this.description}</label>
        </div>
        <span> <i class="fa fa-times-circle-o" aria-hidden="true" role="button" onclick="app.todoController.removeTodo('${this.id}')"></i> </span>
      </li> `
    }
  }
} 