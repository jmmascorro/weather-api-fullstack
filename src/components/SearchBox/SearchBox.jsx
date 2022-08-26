import "./SearchBox.scss";
import { useState } from "react";

const SearchBox = (props) => {

    const [searchTerm, setSearchTerm] = useState();
    const [weather, setWeather] = useState();

    const handleChange = (event) => {
        const cityName = event.target.value.toLowerCase();
        setSearchTerm(cityName);
    }

    const apiKey = "0c1c49bf7391fcb59e7e2d68bb06cae2";

    const base = `https://api.openweathermap.org/data/2.5/weather?q=${searchTerm}&appid=${apiKey}&units=imperial`;

    const handleSubmit = (event) => {
      event.preventDefault();
      fetch(base)
      .then(res => res.json())
      .then(data => {
        setWeather(data);
      })
      .catch(err => {
        console.log(err)
      })
  }
   
    return (
        <form className="search-box" name="form" onClick={handleSubmit}>
            <label className="search-box__label"></label>
            <input type="text" placeholder="Search City" onChange={handleChange}
            value={searchTerm || ""} className="search-box__input"/>
            <input type="submit" value="Search Weather" />
        </form>
    )
}

export default SearchBox;