import React, { useEffect, useState } from "react";

import './Timer.css';

export default function Timer() {
  const [segundos, setSegundos] = useState(7);
  const [timer, setTimer] = useState();
  const [disabledButtonInferior, setDisabledButtonInferior] = useState(true);
  const [chave, setChave] = useState(true);
  const [seg, setSeg] = useState(25);
  const ati = document.querySelector('[data-js="ati-card"]');
  const int = document.querySelector('[data-js="int-card"]');
  
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
        ati.classList.remove('hover');
        int.classList.add('hover');
        setSegundos(5);
        setChave(false);
      } else {
        int.classList.remove('hover');
        ati.classList.add('hover');
        setSegundos(seg);
        setChave(true);
      }
      start();
      setDisabledButtonInferior(false);
    }
  }, [segundos, timer, chave, seg, ati, int]);
  
  const startTempo = (event) => {
    switch(event.target.name) {
      case '5': clearInterval(timer);
                setSeg(5);
                setSegundos(5);
                start();
                break;
      case '10': clearInterval(timer);
                  setSeg(10);
                  setSegundos(10);
                  start();
                  break;
      case '15': clearInterval(timer);
                  setSeg(15);
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
    setSegundos(seg)
  }

  const iniciar = () => {
    start();
  }

  return (
    <div className="body-app">
      <div className="box">
        <div class="circular">
          <div class="inner"></div>
          <div class="number">100%</div>
          <div class="circle">
            <div data-js="card" class="bar left">
              <div class="progress"></div>
            </div>
            <div data-js="card" class="bar right">
              <div class="progress"></div>
            </div>
          </div>
        </div>
        <div>
          <button name="5" onClick={startTempo}>5 Seg</button>
          <button name="10" onClick={startTempo}>10 Seg</button>
          <button name="15" onClick={startTempo}>15 Seg</button>
        </div>
        <div className="box-timer">
          <div data-js="ati-card" className="box-segundos hover">
            {chave ? segundos : seg}
          </div>
          <div data-js="int-card" className="box-segundos">
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