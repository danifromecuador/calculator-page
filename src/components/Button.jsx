import PropTypes from 'prop-types';
import '../styles/Button.css';

const Button = ( {symbol, onClick, aditionalClassName} ) => {
  const className = `button ${aditionalClassName}`;
  return (
    <input type="button" value={symbol} className={className} onClick={onClick}/>
  )
}

Button.propTypes = {
  symbol: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  aditionalClassName: PropTypes.string,
};

export default Button;