import { useEffect, useState } from "react";
import "./App.css";
import AsideWeather from "./components/AsideWeather/AsideWeather";
import SearchBox from "./components/SearchBox/SerachBox";

function App() {
  const [inputValue, setInputValue] = useState("Svalbard");
  const [locationData, setLocationData] = useState(null);
  const [units, setUnits] = useState('metric');
  const API_KEY = process.env.REACT_APP_API_KEY;

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${inputValue}&appid=${API_KEY}&units=${units}`
      );
      const result = await response.json();
      if (result.cod === 200) setLocationData(result);
    };

    fetchData();
  }, [inputValue, units]);

  const getData = (data) => setInputValue(data);
  const getUnits = (units) => setUnits(units);

  return (
    <div className="App">
      <div className="widget">
        <AsideWeather data={locationData} onChange={getUnits} units={units} />
        <div id="search-box" className="search-box hidden">
          <SearchBox onSubmit={getData} />
        </div>
      </div>
    </div>
  );
}

export default App;
