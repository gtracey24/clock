import React, { useState, useEffect } from "react";
import Card from "react-bootstrap/Card";

const endpoint = 'https://api.weatherstack.com/current?access_key=cf9647fb5ee5cbba78fa3992f9a76608&query=St. Louis';;

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

  const genWeather = weather.current(temperature);

  return (
    <>
      <Card style={{ width: "18rem" }}>
        <Card.Title>Random Password</Card.Title>
        <Card.Text>{genWeather}</Card.Text>
      </Card>
    </>
  );
};

export default WeatherCard;
