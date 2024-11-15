import React from "react";
import { useState, useEffect } from "react";
import Card from "react-bootstrap/Card";

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

  let greeting;

  if (hours >= 12 && hours <= 17) {
    greeting = "Good Afternoon";
  } else if (hours <= 11) {
    greeting = "Good Morning";
  } else greeting = "Good Evening";

  return (
    <>
      <div className="clock">
        <h1>{calendarDate}</h1>
        <h1>{clockDisplay}</h1>
        <p>{greeting}</p>
      </div>
    </>
  );
};

export default Clock;
