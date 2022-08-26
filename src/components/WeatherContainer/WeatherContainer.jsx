import WeatherCard from "../WeatherCard/WeatherCard";

const WeatherContainer = (props) => {

    const { weather } = props;

    if(weather !== undefined) {

     return (

        <WeatherCard cityName={weather.name} temp={Math.round(weather.main.temp)} feelsLike={Math.round(weather.main.feels_like)}/>
     ) 
    }

}
export default WeatherContainer;