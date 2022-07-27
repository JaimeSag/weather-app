const SearchBox = () => {
    function toggleMenu() {
        const btn = document.getElementById("search-box");
        btn.classList.toggle("hidden");
    }
    
    return (
        <>
            <div className="control">
                <button className="btn" id="btn-close" onClick={toggleMenu}><i className="fa-solid fa-xmark fa-lg"></i></button>
            </div>
            <form className="input-group mb-3">
                <input type="text" className="form-control" placeholder="Place" aria-label="Place" aria-describedby="button-addon2" />
                <button className="btn btn-outline-secondary" type="button" id="button-addon2">Buscar</button>
            </form>
        </>
    );
}

export default SearchBox;