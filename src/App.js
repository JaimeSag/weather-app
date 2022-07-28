import { useEffect, useState } from "react";
import "./App.css";
import AsideWeather from "./components/AsideWeather/AsideWeather";
import SearchBox from "./components/SerachBox";

function App() {
  const [inputValue, setInputValue] = useState("Ecatepec");
  const [locationData, setLocationData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${inputValue}&appid=206a73512f32dfa611eccd13c89d9fef`
      );
      const result = await response.json();
      if (result.cod === 200) {
        setLocationData(result);
      }
    }

    fetchData();
  }, [inputValue]);

  const getData = (data) => {
    setInputValue(data);
  };

  return (
    <div className="App">
      <div id="search-box" className="search-box col-md-6 bg-light">
        <SearchBox onSubmit={getData} />
      </div>
      <div className="widget row m-0">
        <AsideWeather data={locationData}/>
      </div>
    </div>
  );
}

export default App;
