import React from 'react';
import CountryCard from './CountryCard';

const Favorites = () => {
    var favList = [{}]
    const getArray = JSON.parse(localStorage.getItem('favorites')||'0');
    for (var i=0; i<getArray.length; i++){
        let x = getArray[i];
        favList[i] = JSON.parse(localStorage.getItem('favItem' + [x])||'');
    }
    // const titles = Object.keys(favList[0])
   
    return (
        <div>
            <h1>My favorite coutries</h1>
            {favList.map((item, i)=>(
             <CountryCard
            //  key={country.name.common}
            //  country={country}
            //  countries={countries}          
            />
            ))}
        </div>
    );
};

export default Favorites;