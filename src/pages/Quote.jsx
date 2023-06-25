import '../styles/Quote.css';
import { useState } from 'react';
const Quote = () => {
  const [quoteString, setQuoteString] = useState("no changes");
  const handleClick = async () => {
    const response = await fetch('https://api.api-ninjas.com/v1/quotes?category=happiness', {
      headers: { 'X-Api-Key': 'nezpEokeOVTwP1C5NwtGEQ==h62LjJXfJNexoQfy' }
    })
    const data = await response.json();
    const quote = data[0].quote;
    setQuoteString(quote);
  };



  return (
    <div className="quote-container">holiwis
      <button type="button" onClick={handleClick} className='quoteBtn'>Get your daily quote!!!</button>
      <p>
        {quoteString}
      </p>

    </div>
  );
}

export default Quote;
