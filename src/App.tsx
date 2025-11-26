import { useEffect, useState } from "react";
import "./App.css";
import { SearchDrawer } from "./components/search/SearchDrawer/SearchDrawer.tsx";
import { CurrentWeather } from "./components/weather/CurrentWeather/CurrentWeather.tsx";
import { WeatherCard, WeatherHeader } from "./components/weather/WeatherCard/WeatherCard.tsx";
import { WeatherDetails } from "./components/weather/WeatherDetails/WeatherDetails.tsx";
import { SearchQuery, useWeather } from "./hooks/useWeather.tsx";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const { data, loading, setSearchQuery, setUnits, units } = useWeather();

  useEffect(() => {
    if (!data) return;

    const isNight = data.weather[0].icon.includes("n");

    document.documentElement.classList.toggle("night", isNight);
  }, [data]);

  const toggleMenu = () => setIsOpen(!isOpen);

  const handleParamsChange = (changes: Partial<SearchQuery>) => {
    setSearchQuery(prev => ({
      ...prev,
      ...changes
    } as SearchQuery));
  };

  return (
    <div className="weather-app">
      <div className="weather-widget">
        <h1 className="sr-only">Weather App</h1>

        <WeatherCard
          isShifted={isOpen}
          header={
            <WeatherHeader
              data={data}
              onChange={handleParamsChange}
              onToggleMenu={toggleMenu}
              onUnitChange={setUnits}
              units={units}
              isOpen={isOpen}
              isLoading={loading}
            />
          }
        >
          <CurrentWeather
            condition={data?.weather[0].main}
            icon={data?.weather[0].icon}
            unit={units === "metric" ? "C" : "F"}
            temp={data?.main.temp}
            isLoading={loading}
          />

          <WeatherDetails
            data={data}
            units={units}
            isLoading={loading}
          />
        </WeatherCard>

        <SearchDrawer
          isOpen={isOpen}
          onClose={toggleMenu}
          onSubmit={handleParamsChange}
          isLoading={loading}
        />
      </div>
    </div>
  );
}

export default App;
