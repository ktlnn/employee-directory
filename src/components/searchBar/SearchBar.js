import React, { useContext } from 'react';
import './style.css'
import UserDataContext from "../../utils/UserDataContext";

function SearchBar() {

    const context = useContext(UserDataContext);

    return(
        <div className="SearchBar">
            <form>
                <input
                type="search"
                placeholder="name"
                aria-label="Search"
                onChange={name => context.handleSearchChange(name)}
                />
            <button className="btn btn-success" type="submit">
             Submit
            </button>
            </form>
        </div>
    )
}

export default SearchBar;