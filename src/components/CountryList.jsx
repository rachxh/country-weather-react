import React, {useEffect, useState} from 'react';
import axios from 'axios';
import CountryCard from './CountryCard';

const CountryList = () => {
    const [countries, setCountries] = useState([]);
    const [search, setSearch] = useState("");
    const [loading, setLoading]= useState(false);
    const [filterCountries,setFilterCountries]=useState([]);
     
    // const CountryInfo={
    //     name: "",
    //     currencies:"",
    //     capital:"",
    //     language:"",
    //     flags:"",
    //     maps:"",
    //     timezone:""
    //  }

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
                id={country.name.common}
                name={country.name.official}
                population={1}
                region={country.region}
                flag={country.flags.svg}
                capital={country.capital}
                //code={country.cca3}
                />
            ))

            }
            {/* {Object.values(CountryInfo).map((value,index)=>{
                return(
                    <>
                    { <CountryCard/>   }
                    </>
                )
            })} */}

           </div>
        </div>
    );
};

export default CountryList;