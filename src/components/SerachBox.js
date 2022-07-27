import { useEffect, useState } from "react";

const SearchBox = () => {
    // const dirApi = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=206a73512f32dfa611eccd13c89d9fef`
    const [location, setLocation] = useState(null);
    const [locationData, setLocationData] = useState(null) ;

    const handleClick = async(event) => {
        event.preventDefault();
        event.target.reset();
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=206a73512f32dfa611eccd13c89d9fef`);
        const result = await response.json();
        setLocationData(result);
        console.log(result);
    }

    const handleInputChange = (event) => {
        setLocation(event.target.value);
    }

    function toggleMenu() {
        const btn = document.getElementById("search-box");
        btn.classList.toggle("hidden");
    }

    return (
        <>
            <div className="control">
                <button className="btn" id="btn-close" onClick={toggleMenu}><i className="fa-solid fa-xmark fa-lg"></i></button>
            </div>
            <form onSubmit={handleClick} className="input-group mb-3">
                <input type="text" name="place" onChange={handleInputChange} className="form-control" placeholder="Place" aria-label="Place" aria-describedby="button-addon2" />
                <button className="btn btn-outline-secondary" type="submit" id="button-addon2">Buscar</button>
            </form>
        </>
    );
}

export default SearchBox;