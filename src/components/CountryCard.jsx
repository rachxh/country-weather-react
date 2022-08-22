import React from 'react';
import { Link } from 'react-router-dom';


const CountryCard = ({name,population,region,flag,capital}) => {
    return (
        <div className='card'>
            <Link to="/countrySingle">
                <img className='flag' src={flag} alt={name} width="32" />
                <p className='card-name'>{name}</p>
                <div>
                    <span>Population:</span>
                    <span>{population}</span>
                </div>
                <div>
                    <span>Region:</span>
                    <span>{region}</span>
                </div>
                <div>
                    <span>Capital:</span>
                    <span>{capital}</span>
                </div>
            </Link>
        </div>
    );
};

export default CountryCard;