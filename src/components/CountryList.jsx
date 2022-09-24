import React, { useEffect, useState } from "react";
import axios from "axios";
import CountryCard from "./CountryCard";
import Search from "./Search";
// import sort from './sort';

const CountryList = () => {
  const [countries, setCountries] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const [sort, setSort] = useState([]);
  const getArray = JSON.parse(localStorage.getItem("favorites") || "0");

  useEffect(() => {
    // setLoading(true);
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
    return <p>Loading</p>;
}

const handleSearch = (searchValue) => {
    setSearch(searchValue)
};

const handleSort = (e) => {
    const sort = [...countries];
    switch (e.target.value) {
        case "AToZ":
            setSort(
                sort.sort((countryA, countryB) => (countryA.name.common > countryB.name.common ? 1 : -1))
            );
            break;
        case "ZToA":
            setSort(
                sort.sort((countryA, countryB) => (countryA.name.common > countryB.name.common ? -1 : 1))
            );
            break;
        default:
            // Empty the sort and show original order.
            setSort(
                sort
            )
            break;
    }
};

const setFavorite = (favoriteCountryName) => {
    let favoriteArray = window.localStorage.getItem("favoriteArray")
    // Check if favoriteArray exists. If not create an empty array.
    favoriteArray = (favoriteArray === null) ? [] : JSON.parse(favoriteArray);

    let index = favoriteArray.findIndex((countryName) => countryName === favoriteCountryName)

    if (index === -1) {
        // countryName is not a favorite yet! Add it to the favorites.
        favoriteArray.push(favoriteCountryName)
    } else {
        // countryName is already a favorite! Remove it from the favorites.
        favoriteArray.splice(index, 1);
    }

    window.localStorage.setItem("favoriteArray", JSON.stringify(favoriteArray));
};

return (
    <main>
        <div>
            <Search onSearch={handleSearch} />
            <select onChange={handleSort}>
                <option>Sort</option>
                <option value="AToZ">A-Z</option>
                <option value="ZToA">Z-A</option>
            </select>

            <div className="country-list">
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
                    />
                ))
            }
            </div>
        </div>
    </main>
);
};

export default CountryList;
