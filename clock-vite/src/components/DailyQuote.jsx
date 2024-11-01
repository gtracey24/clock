import React, { useEffect, useState } from 'react';

const endpoint = 'https://official-joke-api.appspot.com/jokes/random';

const DailyQuote = () => {
  const [quote, setQuote] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const response = await fetch(endpoint);
        const data = await response.json();
        setQuote(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    })();
  }, []);

const setup = quote.setup;
const punch = quote.punchline;
  // Render your component here (e.g., display users in a list)
  // ...

  return (
    <div>
      <h3>{setup}</h3>
      <h3>{punch}</h3>
    </div>
  );
};

export default DailyQuote;
