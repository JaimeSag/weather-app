import "./AsideWeather.css";

const AsideWeather = (props) => {
  let location = props.data;

  function toggleMenu() {
    document.getElementById("search-box").classList.toggle("hidden");
    document.querySelector(".main-weather").classList.toggle("translate");
  }

  return (
    <div className="main-weather">
      <div className="container">
        <div className="actions">
          <button className="btn" onClick={toggleMenu}>
            Search for places
          </button>
          <button className="btn">
            <i className="fa-solid fa-location-crosshairs"></i>
          </button>
        </div>

        {location ? (
          <>
            {location.weather[0].icon.includes("n")
              ? document.documentElement.setAttribute("data-theme", "night")
              : document.documentElement.setAttribute("data-theme", "day")}
            <div className="weather-icon">
              <img
                src={`http://openweathermap.org/img/wn/${location.weather[0].icon}@4x.png`}
                alt="Weather icon"
              />
            </div>
            <div className="main-data">
              <div className="temp">{`${location.main.temp}°`}</div>
              <p className="location">{`${location.name}, ${location.sys.country}`}</p>
              <div className="additional-info">
                <div>
                  <h3>Wind speed</h3>
                  <span>{location.wind.speed}</span>
                </div>
                <div>
                  <h3>Humidity</h3>
                  <span>{`${location.main.humidity}`}</span>
                </div>
                <div>
                  <h3>Pressure</h3>
                  <span>{`${location.main.pressure}`}</span>
                </div>
              </div>
            </div>
          </>
        ) : null}
      </div>
    </div>
  );
};

export default AsideWeather;
