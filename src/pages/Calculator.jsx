import '../styles/Calculator.css';
import Button from '../components/Button';
import Display from '../components/Display';

const Calculator = () => {
  return (
    <div className="calculator-container">
      <Display />
      <div className="buttons">
        <div className="row">
          <Button />
          <Button />
          <Button />
          <Button />
        </div>
        <div className="row">
          <Button />
          <Button />
          <Button />
          <Button />
        </div>
        <div className="row">
          <Button />
          <Button />
          <Button />
          <Button />
        </div>
        <div className="row">
          <Button />
          <Button />
          <Button />
          <Button />
        </div>
      </div>
    </div>
  )
}

export default Calculator