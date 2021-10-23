import React from "react";

import './Timer.css';

export default function Timer() {
  return (
    <div>
      <div class="circular">
        <div class="inner"></div>
        <div class="circle">
          <div data-js="card" class="bar left">
            <div class="progress"></div>
          </div>
          <div data-js="card" class="bar right">
            <div class="progress"></div>
          </div>
        </div>
      </div>
    </div>
  );
}