import React,{ useState}  from 'react';

const Search = () => {

    const [search, setSearch] = useState("");

    const updateSearch = (e)=>{
        setSearch(e.target.value);
        }
        
    return (
        <div>
            <form className='search-form'>
                <input type="text" 
                className='search-bar'
                value={search}
                placeholder="Search for Countries"
                onChange={updateSearch}
                />
                <button>Clear Search</button>
            </form>
            
        </div>
    );
};

export default Search;