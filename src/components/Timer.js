import React, { useEffect, useState } from "react";

import './Timer.css';

export default function Timer() {
  const [segundos, setSegundos] = useState(25);
  const [timer, setTimer] = useState();
  const [disabledButtonInferior, setDisabledButtonInferior] = useState(true);
  const [chave, setChave] = useState(true);
  
  const start = () => {
    setDisabledButtonInferior(false);
    const intervalTimer = setInterval(() => {
      setSegundos((segundos) => segundos - 1);
    }, 1000);
    setTimer(intervalTimer);
  };
  
  useEffect(() => { // segundos === 0 desmonta o setInterval
    console.log('segundos :', segundos);
    if (segundos === 0) {
      clearInterval(timer);
      if (chave) {
        setSegundos(5);
        setChave(false);
      } else {
        setSegundos(25);
        setChave(true);
      }
      start();
      setDisabledButtonInferior(true);
    }
  }, [segundos, timer, chave]);
  
  const startTempo = (event) => {
    switch(event.target.name) {
      case '5': clearInterval(timer);
                setSegundos(5);
                start();
                break;
      case '10': clearInterval(timer);
                  setSegundos(10);
                  start();
                  break;
      case '15': clearInterval(timer);
                  setSegundos(15);
                  start();
                  break;
      default:
        break;
    }
  };

  const pausar = () => {
    setDisabledButtonInferior(true);
    clearInterval(timer);
  }

  const parar = () => {
    setDisabledButtonInferior(true);
    clearInterval(timer);
    setSegundos(0)
  }

  const iniciar = () => {
    start();
  }

  return (
    <div className="body-app">
      <div className="box">
        <div>
          <button name="5" onClick={startTempo}>5 Seg</button>
          <button name="10" onClick={startTempo}>10 Seg</button>
          <button name="15" onClick={startTempo}>15 Seg</button>
        </div>
        <div className="box-timer">
          <div className="atividade">
            {chave ? segundos : '25'}
          </div>
          <div className="intervalo">
            {chave ? '5' : segundos}
          </div>
        </div>
        {disabledButtonInferior
          ? <button onClick={iniciar}>Iniciar</button>
          : <div className="buttons">
              <button onClick={pausar}>Pausar</button>
              <button onClick={parar}>Parar</button>
            </div>
        }
        
      </div>
    </div>
  );
}