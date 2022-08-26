import './App.scss';
import { useState } from "react";
import WeatherContainer from './components/WeatherContainer/WeatherContainer';

function App() {

    const [cityName, setCityName] = useState();

    const [weather, setWeather] = useState();

    const handleChange = (event) => {
      const cityName = event.target.value.toLowerCase();
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
      })
      .catch(err => {
      console.log(err)
      })
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to the Weather</h1>
      </header>
      <section className="search-weather">
        <form className="search-box" onSubmit={handleSubmit} >
            <label className="search-box__label"></label>
            <input type="text" value={cityName || ""} onChange={handleChange} name="name" placeholder="name"/><br></br>
            <input type="submit" value="Search Weather" />
        </form>
      </section>
      <section className="weather-card">
       {weather && <WeatherContainer weather={weather}/>} 
      </section>
    </div>
  );
}

export default App;
