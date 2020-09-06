import { ProxyState } from "../AppState.js";
import Weather from "../models/Weather.js";
import { api } from "./AxiosService.js";

class WeatherService {
  changeTempType(value) {
    let weather = ProxyState.weather
    if(value){
      weather.isFahrenheit = false
    } else {
      weather.isFahrenheit = true
    }
    ProxyState.weather = ProxyState.weather
  }
  async getWeather() {
    console.log("Calling the Weatherman");
    let res = await api.get('weather');
    ProxyState.weather = new Weather(res.data);
  }
}

const weatherService = new WeatherService();
export default weatherService;