import React from "react";
import CountryCard from './CountryCard';

const FavoritePage = () => {
    const countryArrayJson = window.localStorage.getItem("countryArray");
    const countryArray = (countryArrayJson === null) ? [] : JSON.parse(countryArrayJson);
    
    const favoriteArrayJson = window.localStorage.getItem("favoriteArray")
    // Check if favoriteArray exists. If not create an empty array.
    const favoriteArray = (favoriteArrayJson === null) ? [] : JSON.parse(favoriteArrayJson);

    const favoriteCountryArray = [];

    favoriteArray.forEach((favorite) => {
        const country = countryArray.find((country) => country.name.common === favorite);

        if (country !== null) {
            favoriteCountryArray.push(country);
        }
    })
    

    return (
        <div>
            <h1>My favorite coutries</h1>
            {favoriteCountryArray.map((country) => (
                <CountryCard
                    key={country.name.common}
                    country={country}         
                />
            ))}
        </div>
    );
};

export default FavoritePage;