import React, { useEffect, useState } from "react";

import Circulo from './Circulo';
import './Timer.css';
import './Circulo.css';

var teste = new Audio();
teste.src = 'https://www.soundjay.com/buttons/sounds/beep-08b.mp3';

export const Timer = () => {
  const ati = document.querySelector('[data-js="ati-card"]');
  const int = document.querySelector('[data-js="int-card"]');
  const [segundos, setSegundos] = useState(25);
  const [timer, setTimer] = useState();
  const [disabledButtonSuperior, setDisabledButtonSuperior] = useState(false);
  const [disabledButtonInferior, setDisabledButtonInferior] = useState(true);
  const [chave, setChave] = useState(true);
  const [circulo, setCirculo] = useState(false);
  const [seg, setSeg] = useState(25);
  
  const start = () => {
    setDisabledButtonSuperior(false);
    document.documentElement.style.setProperty('--main-color', '#4158d0');
    document.documentElement.style.setProperty('--main-segundos', seg+'s');
    setCirculo(false);
    setCirculo(true);
    setDisabledButtonInferior(false);
    const intervalTimer = setInterval(() => {
      setSegundos((segundos) => segundos - 1);
    }, 1000);
    setTimer(intervalTimer);
  };


  useEffect(() => { // segundos === 0 desmonta o setInterval
    console.log('segundos :', segundos);
    if (segundos === 0) {
      setCirculo(false);
      teste.play()
      clearInterval(timer);
      if (chave) {
        ati.classList.remove('hover');
        int.classList.add('hover');
        setSegundos(5);
        setChave(false);
      } else {
        setDisabledButtonSuperior(true);
        int.classList.remove('hover');
        ati.classList.add('hover');
        setSegundos(seg);
        setChave(true);
      }
      setDisabledButtonInferior(true);
    }
  }, [segundos, timer, chave, seg, ati, int]);
  
  const startTempo = (event) => {
    switch(event.target.name) {
      case '5': clearInterval(timer);
                parar();
                setSeg(5);
                setSegundos(5);
                setCirculo(true);
                start();
                break;
      case '10': clearInterval(timer);
                  setSeg(10);
                  setSegundos(10);
                  setCirculo(true);
                  parar();
                  start();
                  break;
      case '15': clearInterval(timer);
                  setSeg(15);
                  setSegundos(15);
                  setCirculo(true);
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
    setSegundos(seg);
    if (!chave) {
      int.classList.remove('hover');
      ati.classList.add('hover');
    }
    setChave(true);
    setCirculo(false);
    setDisabledButtonSuperior(true);
  }

  const iniciar = () => {
    setCirculo(true);
    start();
  }

  return (
    <div className="body-app">
      <div className="box">
        <div>
            {disabledButtonSuperior ?
              <div>
                <button name="5" onClick={startTempo}>5 Seg</button>
                <button name="10" onClick={startTempo}>10 Seg</button>
                <button name="15" onClick={startTempo}>15 Seg</button>
              </div> : null
            }
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
        <div className="circulo">
          {circulo ? 
            <Circulo /> : null
          }
        </div>
      </div>
    </div>
  );
};