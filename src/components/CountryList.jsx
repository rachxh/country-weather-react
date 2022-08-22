import React, {useEffect, useState} from 'react';
import axios from 'axios';
import CountryCard from './CountryCard';

const CountryList = () => {
    const [countries, setCountries] = useState([]);
    const [search, setSearch] = useState("");
    const [loading, setLoading]= useState(false);
    const [filterCountries,setFilterCountries]=useState([]);

    useEffect(()=>{
        // setLoading(true);
        axios.get("https://restcountries.com/v3.1/all").then(
            (res) => {
                //console.log(res.data);
                setCountries(res.data);
                setLoading(false);
                setFilterCountries(res.data);
            }
        ).catch(error=>console.error());
    },[])
      // conditional rendering
    if (loading) {
    return <p>Loading</p>;
    }

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
            </form>
            <div className='country-list'>
            {filterCountries.filter((country)=>
                country.name.common.toLowerCase().includes(search.toLowerCase())
            ).map((country)=>(
                /*<pre
                key={countries.id}>{JSON.stringify(countries)}</pre>*/
                <CountryCard
                key={country.name.common}
                country={country}
                countries={countries}          
                />
            ))

            }

            </div>
        </div>
    );
};

export default CountryList;