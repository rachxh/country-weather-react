import React, {useEffect, useState} from 'react';
import axios from 'axios';
import CountryCard from './CountryCard';
import Search from './Search';
// import Filter from './Filter';

const CountryList = () => {
    const [countries, setCountries] = useState([]);
    const [search, setSearch] = useState("");
    const [loading, setLoading]= useState(true);
    const [filterCountries,setFilterCountries]=useState([]);
    const [favorites,setFavorites] = useState([]);
    const getArray = JSON.parse(localStorage.getItem('favorites')||'0');


    useEffect(()=>{
        if(getArray!==0){
            setFavorites([...getArray])
        }
        // setLoading(true);
        axios.get("https://restcountries.com/v3.1/all").then(
            (res) => {
                //console.log(res.data);
                setCountries(res.data);
                setLoading(false);
                setFilterCountries(res.data);
                // localStorage.setItem('Detail', JSON.stringify(res.data));
            }
        ).catch(error=>{
            setLoading(true);
            console.error()});
    },[])

      // conditional rendering
    if (loading) {
    return <p>Loading</p>;
    }
 
     localStorage.setItem('Detail', JSON.stringify(countries));
     var storage = JSON.parse(localStorage.getItem(countries));


    // const updateSearch = (e)=>{
    // setSearch(e.target.value);
    // }
     const addFav=()=>{
        let array = favorites;
        let addArray = true;
        array.map((item, key)=>{
            if(item===countries.i){
                array.splice(key,1);
                addArray = false;
            }
        });
        if (addArray){
            array.push(countries.i);
        }
        setFavorites([...array])
     }
      
      localStorage.setItem('favorites', JSON.stringify(favorites));

      var storage = localStorage.getItem('favItem'+(countries.i) || '0')
      if(storage == null){
        localStorage.setItem(('favItem'+(countries.i)),JSON.stringify(countries.items));
      }else{
        localStorage.removeItem('favItem'+(countries.i))
      }
      

    return (
        <main>
        <div>
            {/* <form className='search-form'>
                <input type="text" 
                className='search-bar'
                value={search}
                placeholder="Search for Countries"
                onChange={updateSearch}
                />
            </form> */}
        
            <Search/>
            
            <div className='country-list'>
            {filterCountries.filter((country)=>
                country.name.common.toLowerCase().includes(search.toLowerCase())
            ).map((country)=>(
                <CountryCard
                key={country.name.common}
                country={country}
                countries={countries}          
                />
            ))

            }

            </div>
        </div>
        </main>
    );
};

export default CountryList;