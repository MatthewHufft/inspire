export default class Weather {
  constructor(data) {
    console.log('[RAW WEATHER API DATA]', data);
    //NOTE Have you ever wanted to know the temperature measured in kelvin? 
    //      That is what this data returns! data.main.temp is the temperature in Kelvin


    //TODO You should convert the temperature data to either F or C
    //      check out the other data that comes back and see if there is anything you want to try

    this.city = data.name
    this.kelvin = data.main.temp
    this.icon = data.weather[0].icon 
  }

  get Template() {
    return `
    <div class="card style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">${this.kelvin}</h5>
    <h6 class="card-subtitle mb-2 text-muted">${this.city}</h6>
    <p class="card-text">Maybe some other info here later</p>
  </div>
</div>
    `
  }
}