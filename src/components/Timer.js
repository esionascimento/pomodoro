import React, { useEffect, useState } from "react";

export function Timer() {
  const [segundos, setSegundos] = useState(0);
  const [timer, setTimer] = useState();
  const [disabledButtonInferior, setDisabledButtonInferior] = useState(true);
  const [pausado, setPausado] = useState(false);
  
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
    }
  }, [segundos, timer]);
  
  const startTempo = (event) => {
    switch(event.target.name) {
      case '5': setSegundos(5);
                start();
                break;
      case '10': setSegundos(10);
                  start();
                  break;
      case '15': setSegundos(15);
                  start();
                  break;
      default:
        break;
    }
  };

  const pausar = () => {
    setPausado(true);
    clearInterval(timer);
  }

  const parar = () => {
    setDisabledButtonInferior(true);
    clearInterval(timer);
    setSegundos(0)
  }

  const iniciar = () => {
    if (pausado)
      start();
  }

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
              <button name="5" onClick={startTempo}>5 Min</button>
              <button name="10" onClick={startTempo}>10 Min</button>
              <button name="15" onClick={startTempo}>15 Min</button>
            </div>
            <div>
              {segundos}
            </div>
            {disabledButtonInferior
              ? null
              : <div className="buttons">
                  <button onClick={iniciar}>Iniciar</button>
                  <button onClick={pausar}>Pausar</button>
                  <button onClick={parar}>Parar</button>
                </div>
            }
            
          </div>
        </div>
      </div>
      <footer className="rodape">
        rodape
      </footer>
    </div>
  );
}