import Clock from "./components/clock"
import UploadForm from "./components/UploadForm"
import FileUploadSingle from "./components/FileUploadSingle"
import FetchTest from "./components/FetchTest"
import React from "react"

function App() {



  async function fetchData() {
    try {
        const response = await fetch('https://dog.ceo/api/breeds/image/random');
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error(error.message);
    }
    return dogImage;
}

fetchData();

  return (
    <>

    <Clock />
    </>
  )
}

export default App
