import React from 'react';
// import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';

const CountrySingle = () => {
    const [country,setCountry]=useState({});
   
    useEffect(()=>{
        axios.get('https://restcountries.com/v3.1/name/{name}').then((res)=>{
            setCountry(res.data)
        })
    },)

    return (
        <div>
            <h1>{country.name}</h1>
            
        </div>
    );
};

export default CountrySingle;