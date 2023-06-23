import PropTypes from 'prop-types';
import '../styles/Display.css';
const Display = ( {result} ) => {
  return (
    <div className="display">{result}</div>
  )
}

Display.propTypes = {
  result: PropTypes.string.isRequired,
};

export default Display