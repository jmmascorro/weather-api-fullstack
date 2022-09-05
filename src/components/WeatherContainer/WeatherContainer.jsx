import WeatherCard from "../WeatherCard/WeatherCard";
import "./WeatherContainer.scss";

const WeatherContainer = (props) => {

    const { weather } = props;
    
    if(weather !== undefined) {

     return (
        <div className="current-weather-card">
            <h1>Current Forecast</h1>
            <div className="card-weather">
        <WeatherCard  cityName={weather.name} temp={Math.round(weather.main.temp)} condition={weather.weather[0].description}
        feelsLike={Math.round(weather.main.feels_like)} high={Math.round(weather.main.temp_max)} low={Math.round(weather.main.temp_min)}
        humidity={weather.main.humidity} />
        </div>
        </div>
     ) 
    }

}
export default WeatherContainer;