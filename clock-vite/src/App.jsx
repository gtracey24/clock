import Clock from "./components/clock"
import UploadForm from "./components/UploadForm"
import FileUploadSingle from "./components/FileUploadSingle"
import DailyQuote from "./components/DailyQuote"
import RandomFox from "./components/RandomFox"
import BackgroundImage from "./components/BackgroundImage"
import SideImage from "./components/SideImage"
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
        <div style={{
      backgroundImage: `url(${foxImage})`,
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      height: '100vh',
      width: '100vw'
    }}>
{/* 11/1 TODO-Create a side image card. Currently not displaying card correctly */}
      <SideImage />
      <Clock />
    </div>
    </>
  )
}

export default App
