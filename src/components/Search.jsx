import React from 'react';
import style from "./Search.module.css"
import { FaSearch} from "react-icons/fa";

const Search = (props) => {

    const updateSearch = (e) => {
        props.onSearch(e.target.value);
    }
    const clearSearch=(e)=>{
        props.onClear('')
        
    }
    return (
        <div >
            <form className={style.search_form}>
            <div className={style.search_bar}>
                <span >
                <FaSearch />
              </span>
                <input  type="search" 
                placeholder="Search for Countries"
                onChange={updateSearch}
                /> 
            </div>
                <button className={style.clear_btn} onClick={clearSearch}>Clear Search</button>
            </form>
            
        </div>
    );
};

export default Search;