import HistoricalWeatherCard from "../HistoricalWeatherCard/HistoricalWeatherCard";

const HistoricalWeatherContainer = (props) => {

    const { historicalWeather, weather } = props;

        if(historicalWeather.some(historicalWeather => historicalWeather.name === weather.name) === true)
             {

            const filteredWeather = historicalWeather.filter((data) => {
        
                return data.name.includes(weather.name)
            })
        
            const filteredHistoricalWeather = filteredWeather.slice(-1);
            
                 return (
                    <div>
                    <HistoricalWeatherCard cityName={filteredHistoricalWeather[0].name} 
                        temp={Math.round(filteredHistoricalWeather[0].temp)} feelsLike={Math.round(filteredHistoricalWeather[0].feels_like)}
                        createdAt={filteredHistoricalWeather[0].createdAt}/>
                    </div>
                 )
        }else {
    
            return <h1>New Entry</h1>
            
        }
}

export default HistoricalWeatherContainer;