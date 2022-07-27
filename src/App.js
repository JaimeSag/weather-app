import './App.css';
import AsideWeather from './components/AsideWeather';
import SearchBox from './components/SerachBox';

const dirApi = `https://api.openweathermap.org/data/2.5/weather?q={cityName}&appid=206a73512f32dfa611eccd13c89d9fef`

function App() {
    return (
        <div className="App">
            <div id="search-box" className="search-box col-md-6 bg-light">
                <SearchBox />
            </div>
            <div className="row m-0">
                <AsideWeather />
                <div className="col-md-6">
                    Right
                </div>
            </div>
        </div>
    );
}

export default App;
