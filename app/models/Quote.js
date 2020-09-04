export default class Quote {
  constructor(data){
    this.quote = data

  }

  get Template () {
    return `
      <div class="text-light text-shadow h6">
          <p>${this.quote}</p>
      </div>
    `
  }
}