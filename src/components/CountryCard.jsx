import React from 'react';
import { Link } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';


const CountryCard = ({country,countries}) => {
    const {name,languages,flags,population} =country;
    // console.log(country);
    console.log(languages);
    return (
        <>
            <Card sx={{ maxWidth: 450, minHeight: 430}}>
        <CardActionArea>
            <CardMedia
            component="img"
            height="200"
            image={flags.svg}
            alt={name.common}
            />
        <CardContent>
            <Typography gutterBottom variant="h5" component="div">
            {name.common}
            <h6>{name.official}</h6>
            </Typography>
            <Typography variant="body2" color="text.secondary">
            <div className='country-info'>
            <div className='info-title'>
            <h4>LANGUAGE</h4>
            <span> 
                <ul>
                {Object.values(languages || {}).map(language =>(
                    <li key={language}>{language}</li>

                ))}
                </ul>
                </span> 
            </div>
            <div className='info-title'>
            <h4>Currency</h4>
            <ul>
            {Object.values(country?.currencies || {}).map((currency, i) => (
            <li key={i}>{currency.name}</li>
            ))}
            </ul>
            </div>
            <div className='info-title'>
            <h4>POPULATION</h4>
            <span> {population}</span>
            </div>
            </div>
            </Typography>
        </CardContent>
        </CardActionArea>
    <CardActions>
        <Link to="/countrySingle">
        <Button size="small" color="primary">
            Learn More
        </Button>
        </Link>
        </CardActions>
        </Card>
        </>


    );
};

export default CountryCard;