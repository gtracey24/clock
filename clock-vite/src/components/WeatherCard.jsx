import React, { useState, useEffect } from "react";
import Card from "react-bootstrap/Card";

const endpoint = 'https://api.weather.gov/gridpoints/LSX/96,74/forecast';

const WeatherCard = () => {
  const [weather, setWeather] = useState([]);

  useEffect(() => {
    fetch(endpoint)
        .then((response) => {
          return response.json();
        })
        .then((weather) => {
          setWeather(weather)
        console.log(weather);
    });
  }, []);

  const detailedForecast = weather.geometry.type;


  return (
    <>
      <Card style={{ width: "18rem" }}>
        <Card.Text>{detailedForecast}</Card.Text>
      </Card>
    </>
  );
};

export default WeatherCard;
