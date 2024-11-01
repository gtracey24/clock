import React from "react";

async function ImageDisplay() {

    const url = 'https://api.thecatapi.com/v1/images/search';

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const json = await response.json();
    console.log(json);
  } catch (error) {
    console.error(error.message);
  }



    return (
        <>
        
        </>
    )
}

export default ImageDisplay;