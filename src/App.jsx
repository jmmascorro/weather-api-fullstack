import './App.scss';
import { useState } from "react";
import WeatherContainer from './components/WeatherContainer/WeatherContainer';
import HistoricalWeatherContainer from './components/HistoricalWeatherContainer/HistoricalWeatherContainer';

function App() {

    const [cityName, setCityName] = useState();

    const [weather, setWeather] = useState();

    const [ historicalWeather, setHistoricalWeather ] = useState(); 

    const handleChange = (event) => {
      const cityName = event.target.value.toLowerCase().charAt(0).toUpperCase() + event.target.value.slice(1);
      setCityName(cityName);
    }

    const apiKey = "0c1c49bf7391fcb59e7e2d68bb06cae2";

    const base = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=imperial`;

    const handleSubmit = (event) => {
      event.preventDefault();
      fetch(base)
      .then((response) => {
        return response.json();
      })
      .then(data => {
       setWeather(data)
       fetch("http://localhost:3002/api/weather", {
        method: 'POST',
        headers: {'Content-Type':'application/json; charset=UTF-8'},
        body: JSON.stringify({
          name: data.name,
          temp: data.main.temp,
          feels_like: data.main.feels_like,
          description: data.weather[0].description,
          temp_max: data.main.temp_max,
          temp_min: data.main.temp_min,
          humidity: data.main.humidity
        })
      })
      fetch("http://localhost:3002/api/weather")
      .then((response) => {
        return response.json();
      })
      .then(data => {
        setHistoricalWeather(data)
      })
      })
      .catch(err => {
        alert(err)
      })  
    }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to the Weather</h1>
      </header>
      <section className="search-weather">
        <form className="search-box" onSubmit={handleSubmit} method='POST'>
            <label className="search-box__label"></label>
            <input type="text" id="input_weather" autoComplete="off" 
            value={cityName || ""} onChange={handleChange} name="name" 
            placeholder="Search City" className="form-control text-muted form-rounded p-4 shadow-sm"/><br></br>
        </form>
      </section>
      <section className="weather">
        <div className="weather-cards">
       {weather && <WeatherContainer weather={weather}/>}
       {historicalWeather && <HistoricalWeatherContainer historicalWeather={historicalWeather} weather={weather}/>}
       </div> 
      </section>
    </div>
  );
}

export default App;
