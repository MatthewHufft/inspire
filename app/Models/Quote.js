export default class Quote {
  constructor(data){
    this.quote = data.body
    this.author = data.author
  }

  get Template () {
    return `
      <div class="text-light h6 myToolTip trans-container rounded p-2">
          <p>${this.quote} <span class="myToolTiptext">- ${this.author}</span></p>
      </div>
    `
  }
}