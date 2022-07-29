import { useEffect, useState } from "react";
import "./App.css";
import AsideWeather from "./components/AsideWeather/AsideWeather";
import SearchBox from "./components/SearchBox/SerachBox";

function App() {
  const [inputValue, setInputValue] = useState("Svalbard");
  const [locationData, setLocationData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${inputValue}&appid=206a73512f32dfa611eccd13c89d9fef&units=metric`
      );
      const result = await response.json();
      if (result.cod === 200) {
        setLocationData(result);
      }
    };

    fetchData();
  }, [inputValue]);

  const getData = (data) => {
    setInputValue(data);
  };

  return (
    <div className="App">
      <div className="widget">
        <AsideWeather data={locationData} />
        <div id="search-box" className="search-box hidden">
          <SearchBox onSubmit={getData} />
        </div>
      </div>
    </div>
  );
}

export default App;
