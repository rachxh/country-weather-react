import React from "react";
import { Link } from "react-router-dom";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardMedia from "@mui/material/CardMedia";
import Checkbox from "@mui/material/Checkbox";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import { Button, CardActionArea, CardActions } from "@mui/material";
import { FaMoneyBillWave } from "react-icons/fa";
import { FaUsers } from "react-icons/fa";
import { FaLanguage } from "react-icons/fa";
import style from "./CountryCard.module.css";

const CountryCard = ({ country, showHeart, isBookmarked, onClickBookmark }) => {
  const { name, languages, flags, population } = country;

  const updateBookmark = (event) => {
    onClickBookmark(name.common);
  };

  return (
    <>
      <Card sx={{ maxWidth: 450, minHeight: 420 }}>
        <Link
          to={`/countries/${name.common}`}
          state={{ country: country }}
          className={style.card_link}
        >
          <CardActionArea>
            <CardMedia
              component="img"
              height="200"
              image={flags.svg}
              alt={name.common}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                <h5>{name.common}</h5>
                <h6>{name.official}</h6>
              </Typography>
              <Typography variant="div" color="text.secondary">
                <div className={style.country_info_container}>
                  <div className={style.info_title}>
                    <h4>
                      <span>
                        <FaLanguage />
                      </span>
                      LANGUAGE
                    </h4>

                    <ul>
                      {Object.values(languages || {}).map((language) => (
                        <li key={language}>{language}</li>
                      ))}
                    </ul>
                  </div>
                  <div className={style.info_title}>
                    <h4>
                      <span>
                        <FaMoneyBillWave />
                      </span>
                      CURRENCY
                    </h4>
                    <ul>
                      {Object.values(country?.currencies || {}).map(
                        (currency, i) => (
                          <li key={i}>{currency.name}</li>
                        )
                      )}
                    </ul>
                  </div>
                  <div className={style.info_title}>
                    <h4>
                      <span>
                        <FaUsers />
                      </span>
                      POPULATION
                    </h4>
                    <p> {population.toLocaleString()}</p>
                  </div>
                </div>
              </Typography>
            </CardContent>
          </CardActionArea>
        </Link>
        <CardActions>
          <Link to={`/countries/${name.common}`} state={{ country: country }}>
            <Button size="small" color="primary">
              See More
            </Button>
          </Link>
          {showHeart && (
            <Checkbox
              checked={isBookmarked}
              aria-label="add to Bookmarks"
              onChange={updateBookmark}
              icon={<BookmarkBorderIcon />}
              checkedIcon={<BookmarkIcon />}
            />
          )}
        </CardActions>
      </Card>
    </>
  );
};

export default CountryCard;
