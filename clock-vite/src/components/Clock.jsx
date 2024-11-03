import React from "react";
import { useState, useEffect } from "react";
import Card from 'react-bootstrap/Card';
import Button from "react-bootstrap/Button"

const Clock = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timeInterval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timeInterval);
  }, []);

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  let hours = time.getHours().toLocaleString("en-US");
  let minutes = time.getMinutes();
  let seconds = time.getSeconds();
  let monthName = months[time.getMonth()];
  let day = time.getDate();
  let year = time.getFullYear();

  let calendarDate = monthName + " " + day + ", " + year;
  let clockDisplay = hours + ":" + minutes + ":" + seconds;

  return (
    <>
      <Card style={{ width: '18rem' }}>
        <Card.Title className="clock-position">{calendarDate}</Card.Title>
        <Card.Title>{clockDisplay}</Card.Title>
        <Card.Body>Good Evening</Card.Body>
      </Card>
    </>
  );
};

export default Clock;
