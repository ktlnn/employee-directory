import React, { useContext } from 'react';
import './style.css'
import EmpDataContext from '../../utils/EmpDataContext';

function SearchBar() {

    const context = useContext(EmpDataContext);

    return (
        <div className="SearchBar">
            <form>
                <div className="input-group mb-3">
                    <input 
                    type="search" 
                    class="form-control" 
                    placeholder="Name" 
                    aria-label="Name" 
                    aria-describedby="button-addon2" 
                    onChange={name => context.handleSearch(name)}
                    />
                    <div className="input-group-append">
                        <button 
                        className="btn btn-outline-secondary" 
                        type="button" 
                        id="button-addon2">
                            Submit
                        </button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default SearchBar;