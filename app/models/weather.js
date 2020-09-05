
function convertFahrenheit(kelvin){
  let fahrenheit = ((kelvin - 273.15) * 1.8)+32;
  return fahrenheit.toFixed()
}

function convertCelcius(kelvin){
  let celcius = kelvin - 273.15;
  return celcius.toFixed()
}

export default class Weather {
  constructor(data) {
    console.log('[RAW WEATHER API DATA]', data);
    //NOTE Have you ever wanted to know the temperature measured in kelvin? 
    //      That is what this data returns! data.main.temp is the temperature in Kelvin


    //TODO You should convert the temperature data to either F or C
    //      check out the other data that comes back and see if there is anything you want to try

    this.city = data.name
    this.kelvin = data.main.temp
    this.fahrenheit = convertFahrenheit(this.kelvin)
    this.celcius = convertCelcius(this.kelvin)
    this.isFahrenheit = false;
    this.icon = data.weather[0].icon 
  }

  get Template() {
    if(this.isFahrenheit) {
      return `
        <div class="style="width: 18rem;">
          <div class="weather-container rounded px-3 py-1" onclick="app.weatherController.changeTempType('${this.isFahrenheit}')">
            <p class="card-title font-size-40">${this.fahrenheit}°F</p>
            <p class="card-title mb-2 font-size-40">${this.city}</p>
          </div>
        </div> `
    } else {
      return `
        <div class="style="width: 18rem;">
          <div class="weather-container rounded px-3 py-1" onclick="app.weatherController.changeTempType(${this.isFahrenheit})">
            <p class="card-title font-size-40">${this.celcius}°C</p>
            <p class="card-title mb-2 font-size-40">${this.city}</p>
          </div>
        </div> `
    }
  }
}

