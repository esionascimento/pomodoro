import React from "react";

import Timer from '../components/Timer';
import './Pomodoro.css';

export function Pomodoro() {
  return (
    <div className="body-app">
      <div className="box-on">
        <div className="div-direita">
          <Timer />
        </div>
      </div>
      <footer className="rodape">
        rodape
      </footer>
    </div>
  );
}