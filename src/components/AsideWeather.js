const AsideWeather = () => {
    function toggleMenu(){
        const btn = document.getElementById("search-box");
        btn.classList.toggle("hidden");
    }

    return (
        <div className="main-weather col-md-6">
            <button className="btn" onClick={toggleMenu}>Search for places</button>
            <button className="btn"><i className="fa-solid fa-location-crosshairs"></i></button>
        </div>
    );
}

export default AsideWeather;