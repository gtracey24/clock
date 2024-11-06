import React, { useState, useEffect } from "react";
import Card from "react-bootstrap/Card";

const endpoint = "https://api.genratr.com/?length=8&uppercase&lowercase&special&numbers";

const PasswordCard = () => {
  const [password, setPassword] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const response = await fetch(endpoint);
        const data = await response.json();
        setPassword(data);
        console.log(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    })();
  }, []);

  const genPassword = password.password;

  return (
    <>
      <Card style={{ width: "18rem" }}>
        <Card.Title>Random Password</Card.Title>
        <Card.Text>{genPassword}</Card.Text>
      </Card>
    </>
  );
};

export default PasswordCard;
