import HistoricalWeatherCard from "../HistoricalWeatherCard/HistoricalWeatherCard";
import "./HistoricalWeatherContainer.scss";
import moment from "moment";

const HistoricalWeatherContainer = (props) => {

    const { historicalWeather, weather } = props;

        if(historicalWeather.some(historicalWeather => historicalWeather.name === weather.name) === true)
             {

            const filteredWeather = historicalWeather.filter((data) => {
        
                return data.name.includes(weather.name)
            })
        
            const filteredHistoricalWeather = filteredWeather.slice(-1);
            
                 return (
                    <div className="hist-weather-card">
                        <h1>Historical Forecast</h1>
                        <div className="card-weather">
                    <HistoricalWeatherCard cityName={filteredHistoricalWeather[0].name} condition={filteredHistoricalWeather[0].description}
                        temp={Math.round(filteredHistoricalWeather[0].temp)} feelsLike={Math.round(filteredHistoricalWeather[0].feels_like)}
                        createdAt={moment(filteredHistoricalWeather[0].createdAt).format('MM-DD-YY / LT')} high={filteredHistoricalWeather[0].temp_max} low={filteredHistoricalWeather[0].temp_min}
                        humidity={filteredHistoricalWeather[0].humidity}/>
                        </div>
                    </div>
                 )
        }else {
    
            return <h1></h1>
            
        }
}

export default HistoricalWeatherContainer;