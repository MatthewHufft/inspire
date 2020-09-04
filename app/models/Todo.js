export default class Todo {
  constructor({ id, completed, user, description }) {
    this.id = id;
    this.completed = completed
    this.user = user
    this.description = description
  }

  get Template () {
    return `
      <li class="list-group-item d-flex justify-content-between darker-bg no-select"> 
        <div class="custom-control custom-checkbox">
          <input type="checkbox" class="custom-control-input" id="${this.id}">
          <label class="custom-control-label" for="${this.id}">${this.description}</label>
        </div>
        <span> <i class="fa fa-times-circle-o" aria-hidden="true"></i> </span>
      </li> `
  }
}