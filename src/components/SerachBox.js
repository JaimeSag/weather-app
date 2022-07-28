import { useState } from "react";

const SearchBox = (props) => {
  const [location, setLocation] = useState(null);

  const handleClick = async (event) => {
    event.preventDefault();
    props.onSubmit(location);
    event.target.reset();
  };

  const handleInputChange = (event) => {
    setLocation(event.target.value);
  };

  function toggleMenu() {
    const btn = document.getElementById("search-box");
    btn.classList.toggle("hidden");
  }

  return (
    <>
      <div className="control">
        <button className="btn" id="btn-close" onClick={toggleMenu}>
          <i className="fa-solid fa-xmark fa-lg"></i>
        </button>
      </div>
      <form onSubmit={handleClick} className="input-group mb-3">
        <input
          type="text"
          name="place"
          onChange={handleInputChange}
          
          placeholder="Search location"
          aria-label="Search location"
        />
        <button
          className="btn btn-outline-secondary"
          type="submit"
        >
          <i className="fa-solid fa-magnifying-glass"></i>
        </button>
      </form>
    </>
  );
};

export default SearchBox;
