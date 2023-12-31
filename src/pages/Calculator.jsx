import '../styles/Calculator.css';
import { useState } from 'react';
import Button from '../components/Button';
import Display from '../components/Display';

const Calculator = () => {
  const [previousResult, setPreviousResult] = useState('0');
  const [operation, setOperation] = useState('');
  const [result, setResult] = useState('0');

  const numberBtn = (event) => {
    if (result.length < 10) { //I'm using this condition to avoid large numbers
      if (result === '0') setResult(event.target.value);
      else setResult(result + event.target.value);
    }
  };

  const dotBtn = () => {
    if (result.includes('.')) setResult(result);
    else setResult(result + '.');
  };

  const acBtn = () => {
    setResult('0');
    setOperation('');
  };

  const delBtn = () => {
    if (result.length === 1) setResult('0');
    else setResult(result.slice(0, -1));
  };

  const addBtn = () => {
    setPreviousResult(result);
    setResult('0');
    setOperation('+');
  };

  const subtractBtn = () => {
    setPreviousResult(result);
    setResult('0');
    setOperation('-');
  };

  const multiplyBtn = () => {
    setPreviousResult(result);
    setResult('0');
    setOperation('*');
  };

  const divideBtn = () => {
    setPreviousResult(result);
    setResult('0');
    setOperation('/');
  };

  const percentBtn = () => {
    setPreviousResult(result);
    setResult('0');
    setOperation('%');
  };

  const positiveNegativeBtn = () => {
    setResult((parseFloat(result) * -1).toString());
  };

  const equalBtn = () => {
    if (operation === '+') {
      const bigResult = (parseFloat(previousResult) + parseFloat(result)).toString()
      if (bigResult.length > 8) setResult(parseFloat(bigResult).toFixed(8).toString());
      else setResult(bigResult);
    }
    if (operation === '-') {
      const bigResult = (parseFloat(previousResult) - parseFloat(result)).toString()
      if (bigResult.length > 8) setResult(parseFloat(bigResult).toFixed(8).toString());
      else setResult(bigResult);
    }
    if (operation === '*') {
      const bigResult = (parseFloat(previousResult) * parseFloat(result)).toString()
      if (bigResult.length > 8) setResult(parseFloat(bigResult).toFixed(8).toString());
      else setResult(bigResult);
    }
    if (operation === '/') {
      const bigResult = (parseFloat(previousResult) / parseFloat(result)).toString()
      if (bigResult.length > 8) setResult(parseFloat(bigResult).toFixed(8).toString());
      else setResult(bigResult);
    }
    if (operation === '%') setResult(((parseFloat(previousResult)/100) * parseFloat(result)).toString());
  };

  return (
    <div className="calculator-container">
      <Display result={result} />
      <div className="buttons">
        <div className="row">
          <Button symbol="AC" onClick={acBtn} aditionalClassName="AC" />
          <Button symbol="%" onClick={percentBtn}/>
          <Button symbol="+/-" onClick={positiveNegativeBtn}/>
          <Button symbol="DEL" onClick={delBtn} aditionalClassName="DEL" />
        </div>

        <div className="row">
          <Button symbol="7" onClick={numberBtn} />
          <Button symbol="8" onClick={numberBtn} />
          <Button symbol="9" onClick={numberBtn} />
          <Button symbol="&divide;" onClick={divideBtn} aditionalClassName="operator" />
        </div>
        <div className="row">
          <Button symbol="4" onClick={numberBtn} />
          <Button symbol="5" onClick={numberBtn} />
          <Button symbol="6" onClick={numberBtn} />
          <Button symbol="&times;" onClick={multiplyBtn} aditionalClassName="operator" />
        </div>
        <div className="row">
          <Button symbol="1" onClick={numberBtn} />
          <Button symbol="2" onClick={numberBtn} />
          <Button symbol="3" onClick={numberBtn} />
          <Button symbol="&minus;" onClick={subtractBtn} aditionalClassName="operator" />
        </div>
        <div className="row">
          <Button symbol="0" onClick={numberBtn} />
          <Button symbol="&middot;" onClick={dotBtn} />
          <Button symbol="=" onClick={equalBtn} />
          <Button symbol="+" onClick={addBtn} aditionalClassName="operator"  />
        </div>
      </div>
    </div>
  )
}

export default Calculator