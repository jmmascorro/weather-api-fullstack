import "./WeatherCard.scss";

const WeatherCard = ({ cityName, temp, feelsLike, condition, high, low, humidity }) => {

    return(
        <div className="weather-card">
            <h2 className="weather-card__cityname">{cityName}</h2>
            <div className="card-body">
                <div className="card-mid row">
                    <div className="weather-card__temp">
                      <span>{temp}°F</span>  
                    </div>
                    <div className="weather-card__condition-temp">
                        <p className="condition"><i>{condition}</i></p>
                        <p className="high">High: {high}°F</p>
                        <p className="low">Low: {low}°F</p>
                    </div>
                </div>
                <div className="weather-card__card-bottom">
                  <div className="weather-card__feels-like">
                      <p className="feels-like">{feelsLike}°F</p>
                      <span>Feels Like</span>
                  </div>  
                    <div className="weather-card__humidity">
                        <p className="humidity">{humidity}%</p>
                        <span>Humidity</span>
                    </div> 
                </div>
                </div>
        </div>
    )
}

export default WeatherCard;