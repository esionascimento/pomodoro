import { useEffect, useRef, useState } from 'react';

import './Timer.css';

export function Timer() {
  const [timerDias, setTimerDias] = useState('00');
  const [timerHoras, setTimerHoras] = useState('00');
  const [timerMinutos, setTimerMinutos] = useState('00');
  const [timerSegundos, setTimerSegundos] = useState('00');

  let intervalo = useRef();

  

  useEffect(() => {
    console.log('useEffect value :', time);
    const timeInterval = setInterval(() => {
      setTime((oldState) => oldState.time - 1)
    }, 10000);
    return () => {
      clearInterval(timeInterval);
    };
  }, [time])

  const handleStart = (value) => {
    console.log('handleStart value :', value);
    setTime({ time: value })
  }

  /* const handleStart = () => {
    setInterval(() => {
      setTime((oldState) => {
        return oldState - 1
      })
    }, 1000)
    return () => {
      clearInterval(handleStart)
    }
  }; */

  /* function stopCrono() {
    clearInterval(handleStart);
  } */

  const onClick = (value) => {
    console.log('onClick value :', value);
    console.log('time :', time);
    setTime({ time: value });

    handleStart(value);
  }

  useEffect(() => {
    clearInterval();
  });

  return (
    <div className="body-app">
      <header className="header">
        <ul>
          <li>Login</li>
        </ul>
      </header>
      <div className="box-on">
        <div className="box-in">
          <div className="div-esquerda">
            <p>Configurações</p>
          </div>
          <div className="div-direita">
            <div>
              <button onClick={() => onClick(5)}>5 Min</button>
              <button onClick={() => onClick(10)}>10 Min</button>
              <button onClick={() => onClick(15)}>15 Min</button>
            </div>
            <div>
              {time}
            </div>
            <div className="buttons">
              <button onClick={() => handleStart}>Iniciar</button>
              <button>Pausar</button>
              {/* <button onClick={stopCrono}>Reiniciar</button> */}
            </div>
          </div>
        </div>
      </div>
      <footer className="rodape">
        rodape
      </footer>
    </div>
  );
}
