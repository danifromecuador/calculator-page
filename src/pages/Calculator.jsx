import '../styles/Calculator.css';
import { useState } from 'react';
import Button from '../components/Button';
import Display from '../components/Display';

const Calculator = () => {
  const [previousResult, setPreviousResult] = useState('0');
  const [operation, setOperation] = useState('');
  const [result, setResult] = useState('0');
  
  const numberBtn = (event) => {
    if (result === '0') setResult(event.target.value);
    else setResult(result + event.target.value);
    console.log(result);
  };

  const acBtn = () => {
    setResult('0');
  };

  const delBtn = () => {
    if (result.length === 1) setResult('0');
    else setResult(result.slice(0, -1));
  };

  const addBtn = () => {
    setPreviousResult(result);
    setResult('0');
    setOperation('+');
    console.log(previousResult + result);
    // return previousResult + result;
  };

  const equalBtn = (event) => {
    if (operation === '+') setResult(parseFloat(previousResult) + parseFloat(result));
  };

  return (
    <div className="calculator-container">
      <Display result={result}/>
      <div className="buttons">
        <div className="row">
          <Button symbol="AC" onClick= {acBtn} aditionalClassName="AC"/>
          <Button symbol="%"/>
          <Button symbol="+/-"/>
          <Button symbol="DEL" onClick={delBtn} aditionalClassName="DEL"/>
        </div>

        <div className="row">
          <Button symbol="7" onClick={numberBtn} />
          <Button symbol="8" onClick={numberBtn} />
          <Button symbol="9" onClick={numberBtn} />
          <Button symbol="&divide;"/>
        </div>
        <div className="row">
          <Button symbol="4" onClick={numberBtn} />
          <Button symbol="5" onClick={numberBtn} />
          <Button symbol="6" onClick={numberBtn} />
          <Button symbol="&times;"/>
        </div>
        <div className="row">
          <Button symbol="1" onClick={numberBtn} />
          <Button symbol="2" onClick={numberBtn} />
          <Button symbol="3" onClick={numberBtn} />
          <Button symbol="&minus;"/>
        </div>
        <div className="row">
          <Button symbol="0" onClick={numberBtn} />
          <Button symbol="&middot;"/>
          <Button symbol="=" onClick={equalBtn}/>
          <Button symbol="+" onClick={addBtn}/>
        </div>
      </div>
    </div>
  )
}

export default Calculator