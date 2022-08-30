const HistoricalWeatherCard = ({ cityName, temp, feelsLike, createdAt }) => {

    return(
        <div className="weather-card">
            <h2 className="weather-card__cityname">{cityName}</h2>
            <h2 className="weather-card__temp">Temp: {temp}°</h2> 
            <h2 className="weather-card__feelslike">Feels Like: {feelsLike}°</h2>
            <h2 className="weather-card__createdAt">{createdAt}</h2>
        </div>
    )
}
export default HistoricalWeatherCard;