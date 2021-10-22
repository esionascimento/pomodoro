import React, { useEffect, useState } from "react";

export default function Timer() {
  const [segundos, setSegundos] = useState(5);
  const [timer, setTimer] = useState();
  const [disabledButtonInferior, setDisabledButtonInferior] = useState(true);
  
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
      setSegundos(5);
      setDisabledButtonInferior(true);
    }
  }, [segundos, timer]);
  
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
      <div className="div-direita">
        <div>
          <button name="5" onClick={startTempo}>5 Min</button>
          <button name="10" onClick={startTempo}>10 Min</button>
          <button name="15" onClick={startTempo}>15 Min</button>
        </div>
        <div>
          {segundos}
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