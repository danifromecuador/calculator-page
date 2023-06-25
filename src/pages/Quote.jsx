import '../styles/Quote.css';
import { useState, useEffect } from 'react';

const Quote = () => {
  const [quote, setQuote] = useState('no quote');
  const [author, setAuthor] = useState('no author');
  
  const fetchQuote = async () => {
    const response = await fetch('https://api.api-ninjas.com/v1/quotes?category=happiness', {
      headers: { 'X-Api-Key': 'nezpEokeOVTwP1C5NwtGEQ==h62LjJXfJNexoQfy' }
    });
    const data = await response.json();
    const {quote, author} = data[0];
    setQuote(quote);
    setAuthor(author);
  };

  useEffect(() => {
    console.log("Component rendered");     
      fetchQuote();
  }, []);

  return (
    <div className="quote-container">
      <p>{quote}</p>
      <p>{author}</p>
    </div>
  );
};

export default Quote;
