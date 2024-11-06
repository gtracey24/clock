import Clock from "./components/Clock"
import 'bootstrap/dist/css/bootstrap.min.css';
import UploadForm from "./components/UploadForm"
import FileUploadSingle from "./components/FileUploadSingle"
import DailyQuote from "./components/DailyQuote"
import RandomFox from "./components/RandomFox"
import PasswordCard from "./components/PasswordCard";
import WeatherCard from "./components/WeatherCard";
import BackgroundImage from "./components/BackgroundImage"
import SideImage from "./components/SideImage"
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { useState, useEffect } from "react"
import React from "react"

const endpoint = "https://randomfox.ca/floof/";

function App() {


  const [image, setImage] = useState([]);

  useEffect(() => {
      (async () => {
        try {
          const response = await fetch(endpoint);
          const data = await response.json();
          setImage(data);
          console.log(data);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      })();
    }, []);

    const foxImage = image.image;

  return (
    <>
{/* 11/1 TODO-Create a side image card. Currently not displaying card correctly */}
      <Clock />
      <RandomFox />
      <PasswordCard />
      <WeatherCard />
    </>
  )
}

export default App
