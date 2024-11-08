import React, { useState, useEffect } from "react";
import Card from "react-bootstrap/Card";

const endpoint = 'https://api.weather.gov/gridpoints/LSX/96,74/forecast';;

const WeatherCard = () => {
  const [weather, setWeather] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const response = await fetch(endpoint);
        const data = await response.json();
        setWeather(data);
        console.log(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    })();
  }, []);

  const detailedForecast = weather.properties.periods[0].detailedForecast;


  return (
    <>
      <Card style={{ width: "18rem" }}>
        <Card.Text>{detailedForecast}</Card.Text>
      </Card>
    </>
  );
};

export default WeatherCard;
