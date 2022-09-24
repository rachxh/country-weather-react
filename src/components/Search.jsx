import React from 'react';

const Search = (props) => {

    const updateSearch = (e) => {
        props.onSearch(e.target.value);
    }
        
    return (
        <div>
            <form className='search-form'>
                <input type="text" 
                className='search-bar'
                placeholder="Search for Countries"
                onChange={updateSearch}
                />
                <button>Clear Search</button>
            </form>
            
        </div>
    );
};

export default Search;