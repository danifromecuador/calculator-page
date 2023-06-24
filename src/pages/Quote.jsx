import '../styles/Quote.css';
import { useState } from 'react';

const Quote = () => {
  const [somedata, resetSomedata] = useState('nel');
  fetch('https://api.api-ninjas.com/v1/quotes?category=happiness', {
    headers: { 'X-Api-Key': 'nezpEokeOVTwP1C5NwtGEQ==h62LjJXfJNexoQfy'},
    contentType: 'application/json'
  })
  .then(response => response.json())
  .then(data => console.log(data))
  return (
    <div className="quote-container">holiwis</div>
  );
}

export default Quote;
