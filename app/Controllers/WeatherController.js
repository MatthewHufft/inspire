import { ProxyState } from "../AppState.js";
import weatherService from "../Services/WeatherService.js";

function drawWeather() {
  let weather = ProxyState.weather
  document.getElementById('weather').innerHTML = weather.Template
}
export default class WeatherController {
  constructor() {
    //NOTE BELOW IS A LISTENER
    ProxyState.on("weather", drawWeather);
    this.getWeather()
  }

  getWeather() {
    try {
      weatherService.getWeather()
    }
    catch (e) {
      console.error(e)
    }
  }

  changeTempType(value) {
    try {
      weatherService.changeTempType(value)
    } catch(e) {
      console.error(e);
    }
  }
}