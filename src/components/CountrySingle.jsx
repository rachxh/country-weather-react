import React from "react";
import { useLocation } from "react-router-dom";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea, CardActions } from "@mui/material";
import { FcCurrencyExchange } from "react-icons/fc";
import { FcLandscape } from "react-icons/fc";
import { FcGlobe } from "react-icons/fc";
import axios from "axios";
import { useState, useEffect } from "react";
import styles from "./CountrySingle.module.css";
import Header from "./Header";
import Footer from "./Footer";

const CountrySingle = () => {
  const location = useLocation();
  const [loading, setLoading]= useState(true);
  // const [degree, setDegree] = useState('');
  const [weather, setWeather] = useState("");

  const API_key = process.env.REACT_APP_OPENWEATHER_KEY;
  // console.log(location);
  // const navigate = useNavigate();

  const countryInfo = location.state.country;
  // console.log(countryInfo);
  const countryName = countryInfo.name.common;
  // const countries = location.state.countries;
  // const [country,setCountry]=useState('');
  const lat = countryInfo.latlng[0];
  const lon = countryInfo.latlng[1];

  useEffect(() => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${API_key}&units=metric`
      )
      .then((res) => {
        // setDegree(res.data)
        setWeather(res.data);
        setLoading(false);
        // console.log(res.data);
      })
      .catch((err) => {setLoading(true);
        console.log(err)});

  }, []);

  if (loading) {
    return <p>Loading</p>;
    }
  // const degree = weather.list.main.temp;
  // const weatherState = weather.list.weather.main;
   console.log(weather.list);
  return (
    <>
    <Header/>
    <div className={styles.container}>
      <Card sx={{ maxWidth: 450, minHeight: 430 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="250"
            image={countryInfo.flags.svg}
            alt={countryName}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              <h2>{countryName}</h2>
            </Typography>
            <Typography variant="" color="text.secondary">
              <p>
                Right now it is  {weather.list[0].main.temp}°C and {weather.list[0].weather[0].description} in {countryName}
              </p>
              <img src={`http://openweathermap.org/img/wn/${weather.list[0].weather[0].icon}@2x.png`} alt="weather state"/>
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <h2>
            <FcCurrencyExchange />
          </h2>
        </CardActions>
        <CardActions>
          <h2>
            <FcLandscape />
          </h2>
        </CardActions>
        <CardActions>
          <h2>
            <FcGlobe />
          </h2>
        </CardActions>
      </Card>
    </div>
    <Footer/>
    </>
  );
};

export default CountrySingle;
