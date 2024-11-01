import React, { useState, useEffect } from "react";

const endpoint = "https://randomfox.ca/floof/";

const RandomFox = () => {
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
    <img src={foxImage} alt="Image of a fox" />
    </>
    )
}

export default RandomFox;