import './App.scss';
import SearchBox from "./components/SearchBox/SearchBox";

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to the Weather</h1>
      </header>
      <section className="search-weather">
        <SearchBox />
      </section>
    </div>
  );
}

export default App;
