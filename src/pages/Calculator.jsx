import '../styles/Calculator.css';
import { useState } from 'react';
import Button from '../components/Button';
import Display from '../components/Display';

const Calculator = () => {
  const [result, setResult] = useState('0');
  const [previousResult, setPreviousResult] = useState('0');
  
  const numberClickHandler = (event) => {
    if (result === '0') setResult(event.target.value);
    else setResult(result + event.target.value);
    console.log(result);
  };

  const acFunction = () => {
    setResult('0');
  };

  const delFunction = () => {
    if (result.length === 1) setResult('0');
    else setResult(result.slice(0, -1));
  };

  const addFunction = () => {
    setPreviousResult(result);
    setResult('0');
    console.log(previousResult + result);
  };


  return (
    <div className="calculator-container">
      <Display result={result}/>
      <div className="buttons">
        <div className="row">
          <Button symbol="AC" onClick={acFunction} aditionalClassName="AC"/>
          <Button symbol="%"/>
          <Button symbol="+/-"/>
          <Button symbol="DEL" onClick={delFunction} aditionalClassName="DEL"/>
        </div>

        <div className="row">
          <Button symbol="7" onClick={numberClickHandler} />
          <Button symbol="8" onClick={numberClickHandler} />
          <Button symbol="9" onClick={numberClickHandler} />
          <Button symbol="&divide;"/>
        </div>
        <div className="row">
          <Button symbol="4" onClick={numberClickHandler} />
          <Button symbol="5" onClick={numberClickHandler} />
          <Button symbol="6" onClick={numberClickHandler} />
          <Button symbol="&times;"/>
        </div>
        <div className="row">
          <Button symbol="1" onClick={numberClickHandler} />
          <Button symbol="2" onClick={numberClickHandler} />
          <Button symbol="3" onClick={numberClickHandler} />
          <Button symbol="&minus;"/>
        </div>
        <div className="row">
          <Button symbol="0" onClick={numberClickHandler} />
          <Button symbol="&middot;"/>
          <Button symbol="="/>
          <Button symbol="+" onClick={addFunction}/>
        </div>
      </div>
    </div>
  )
}

export default Calculator