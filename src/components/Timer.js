import React, { useEffect, useState } from "react";

export function Timer() {
  const [segundos, setSegundos] = useState(1);
  const [timer, setTimer] = useState();

  const start = () => {
    const intervalTimer = setInterval(() => {
      setSegundos((segundos) => segundos - 1);
    }, 1000);
    setTimer(intervalTimer);
  };

  useEffect(() => { // segundos === 0 desmonta o setInterval
    if (segundos === 0) {
      clearInterval(timer);
    }
  }, [segundos, timer]);

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
            {segundos}
          </div>
          <div className="div-direita">
            <div>
              <button>5 Min</button>
              <button>10 Min</button>
              <button>15 Min</button>
            </div>
            <div>
            </div>
            <div className="buttons">
              <button onClick={start}>Iniciar</button>
              <button>Pausar</button>
              <button>Reiniciar</button>
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