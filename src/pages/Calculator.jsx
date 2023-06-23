import '../styles/Calculator.css';
import { useState } from 'react';
import Button from '../components/Button';
import Display from '../components/Display';

const Calculator = () => {
  const [result, setResult] = useState('0');
  const numberClickHandler = (event) => {
    if (result === '0') setResult(event.target.value);
    else setResult(result + event.target.value);
    console.log(result);
  };

  const acFunction = () => {
    setResult('0');
  };


  return (
    <div className="calculator-container">
      <Display result={result}/>
      <div className="buttons">
        <div className="row">
          <Button symbol="AC" onClick={acFunction} aditionalClassName="AC"/>
          <Button symbol="%"/>
          <Button symbol="+/-"/>
          <Button symbol="DEL" aditionalClassName="DEL"/>
        </div>

        <div className="row">
          <Button symbol="7" onClick={numberClickHandler} />
          <Button symbol="8"/>
          <Button symbol="9"/>
          <Button symbol="&divide;"/>
        </div>
        <div className="row">
          <Button symbol="4"/>
          <Button symbol="5"/>
          <Button symbol="6"/>
          <Button symbol="&times;"/>
        </div>
        <div className="row">
          <Button symbol="1"/>
          <Button symbol="2"/>
          <Button symbol="3"/>
          <Button symbol="&minus;"/>
        </div>
        <div className="row">
          <Button symbol="0"/>
          <Button symbol="&middot;"/>
          <Button symbol="="/>
          <Button symbol="+"/>
        </div>
      </div>
    </div>
  )
}

export default Calculator