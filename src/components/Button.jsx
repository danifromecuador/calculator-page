import '../styles/Button.css';

const Button = ( {symbol, onClick, aditionalClassName} ) => {
  const className = `button ${aditionalClassName}`;
  return (
    <input type="button" value={symbol} className={className} onClick={onClick}/>
  )
}

export default Button;