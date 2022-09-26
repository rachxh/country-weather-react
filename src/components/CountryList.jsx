import React, { useEffect, useState } from "react";
import axios from "axios";
import CountryCard from "./CountryCard";
import Search from "./Search";
import style from "./CountryList.module.css"
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';



const CountryList = () => {
    const [countries, setCountries] = useState([]);
    const [search, setSearch] = useState("");
    const [loading, setLoading] = useState(true);
    const [sort, setSort] = useState([]);
    // const [bookmark,setBookmark]=useState([]);
    

    useEffect(() => {
        axios
            .get("https://restcountries.com/v3.1/all")
            .then((res) => {
                localStorage.setItem("countryArray", JSON.stringify(res.data));
                setCountries(res.data);
                setLoading(false);
                setSort(res.data);
            })
            .catch((error) => {
                setLoading(true);
                console.error();
            });
    }, []);

    // conditional rendering
    if (loading) {
        return (
       <Box sx={{ display: 'flex' }}>
        <CircularProgress />
        <span>Loading...</span>
      </Box>
        )
       
    }

    const handleSearch = (searchValue) => {
        setSearch(searchValue);
    };
    const handleClearSearch = ()=>{
        setSearch()
    }

    const handleSort = (e) => {
        const sort = [...countries];
        switch (e.target.value) {
            case "AToZ":
                setSort(
                    sort.sort((countryA, countryB) =>
                        countryA.name.common > countryB.name.common ? 1 : -1
                    )
                );
                break;
            case "ZToA":
                setSort(
                    sort.sort((countryA, countryB) =>
                        countryA.name.common > countryB.name.common ? -1 : 1
                    )
                );
                break;
            default:
                // Empty the sort and show original order.
                setSort(sort);
                break;
        }
    };

    const setFavorite = (favoriteCountryName) => {
        let favoriteArray = window.localStorage.getItem("favoriteArray");
        // Check if favoriteArray exists. If not create an empty array.
        favoriteArray = favoriteArray === null ? [] : JSON.parse(favoriteArray);

        let index = favoriteArray.findIndex(
            (countryName) => countryName === favoriteCountryName
        );

        if (index === -1) {
            // countryName is not a favorite yet! Add it to the favorites.
            favoriteArray.push(favoriteCountryName);
        } else {
            // countryName is already a favorite! Remove it from the favorites.
            favoriteArray.splice(index, 1);
        }

        window.localStorage.setItem("favoriteArray", JSON.stringify(favoriteArray));
    };
    const checkIsBookmark = (CountryName) => {
        let favoriteArray = window.localStorage.getItem("favoriteArray");
        // Check if favoriteArray exists. If not create an empty array.
        favoriteArray = favoriteArray === null ? [] : JSON.parse(favoriteArray);

        let index = favoriteArray.findIndex(
            (favcountryName) => favcountryName === CountryName
        );
return (index>=0)

    };
    return (
        <main>
            <div className={style.sort_container}>
                <Search onSearch={handleSearch} onClear={handleClearSearch}/>
                <select onChange={handleSort} className={style.sort}>
                    <option>Sort</option>
                    <option value="AToZ">A-Z</option>
                    <option value="ZToA">Z-A</option>
                </select>
            </div>

                <div className={style.country_list}>
                    {sort
                        .filter((country) =>
                            country.name.common.toLowerCase().includes(search.toLowerCase())
                        )
                        .map((country) => (
                            <CountryCard
                                key={country.name.common}
                                country={country}
                                onClickFavorite={setFavorite}
                                showHeart={true}
                                isBookmarked={checkIsBookmark(country.name.common)}
                            />
                        ))}
                </div>
           
        </main>
    );
};

export default CountryList;
