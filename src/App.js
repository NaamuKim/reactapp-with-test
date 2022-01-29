import { useCallback, useState } from 'react';
import './App.css';

function App() {
  const [counter, setCounter] = useState(0);
  const [disabled, setDisabled] = useState(false);
  const onClickPlus = useCallback(() => {
    setCounter((count) => count + 1);
  }, []);
  const onClickMinus = useCallback(() => {
    setCounter((count) => count - 1);
  }, []);
  const onClickOnOff = useCallback(() => {
    setDisabled((prev) => !prev);
  }, []);
  return (
    <div className='App'>
      <header className='App-header'>
        <h3 data-testid='counter'>{counter}</h3>
        <div>
          <button data-testid='minus-button' disabled={disabled} onClick={onClickMinus}>
            -
          </button>
          <button data-testid='plus-button' disabled={disabled} onClick={onClickPlus}>
            +
          </button>
          <button style={{ backgroundColor: 'blue' }} data-testid='on/off-button' onClick={onClickOnOff}>
            on/off
          </button>
        </div>
      </header>
    </div>
  );
}

export default App;
