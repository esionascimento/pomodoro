import React from "react";

import Timer from '../components/Timer';

export function Pomodoro() {
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
            <Timer />
          </div>
        </div>
      </div>
      <footer className="rodape">
        rodape
      </footer>
    </div>
  );
}