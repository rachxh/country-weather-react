import React from 'react';
import { Link } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import IconButton from '@mui/material/IconButton';
import { GrCurrency } from "react-icons/gr";
import { IoIosPeople } from "react-icons/io";
import { GrLanguage} from "react-icons/gr";



const CountryCard = ({country,countries}) => {
    const {name,languages,flags,population} =country;
    // console.log(country);
    // console.log(languages);
    return (
        <>
            <Card sx={{ maxWidth: 450, minHeight: 430
            }}>
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
            <Typography variant="div" color="text.secondary">
            <div className='country-info'>
            <div className='info-title'>
            <span><GrLanguage/></span>
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
            <span> <GrCurrency/></span>
            <h4>CURRENCY</h4>
            <ul>
            {Object.values(country?.currencies || {}).map((currency, i) => (
            <li key={i}>{currency.name}</li>
            ))}
            </ul>
            </div>
            <div className='info-title'>
            <h2><IoIosPeople/></h2>
            <h4>POPULATION</h4>
        
            <span> {population}</span>
            </div>
            </div>
            </Typography>
        </CardContent>
        </CardActionArea>
    <CardActions>
        <Link 
        to={`countries/:${name.common}` }
        state={{ country:country }}
        >
        <Button size="small" color="primary">
            See More
        </Button>
        </Link>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        </CardActions>
        </Card>
        </>


    );
};

export default CountryCard;