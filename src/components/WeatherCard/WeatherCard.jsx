import "./WeatherCard.scss";

const WeatherCard = ({ cityName, temp, feelsLike }) => {

    return(
        <div className="weather-card">
            <h2 className="weather-card__cityname">City: {cityName}</h2>
            <h2 className="weather-card__temp">Temp: {temp}°</h2> 
            <h2 className="weather-card__feelslike">Feels Like: {feelsLike}°</h2>
        </div>
    )
}

export default WeatherCard;