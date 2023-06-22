import '../styles/Button.css';

const Button = ( {symbol} ) => {
  return (
    <input type="button" value={symbol} className='button'/>
  )
}

export default Button;