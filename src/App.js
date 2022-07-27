import './App.css';
import AsideWeather from './components/AsideWeather';
import SearchBox from './components/SerachBox';

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
