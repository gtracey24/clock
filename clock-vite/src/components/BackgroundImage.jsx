import React, { useEffect, useState } from 'react';

const endpoint = "https://randomfox.ca/floof/";

const BackgroundImage = () => {
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
    <div style={{
      backgroundImage: `url(${foxImage})`,
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      height: '100vh',
      width: '100%'
    }}>
      {/* Your content here */}
    </div>
  );
};

export default BackgroundImage;
