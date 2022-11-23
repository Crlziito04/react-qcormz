import React from 'react';
import './style.css';

import PerillaCicloVida from './components/PerillaCicloVida/PerillaCicloVida';
import Sumador from './components/Sumador';
import Perilla from './components/Perilla';

export default function App() {
  return (
    <div>
      <PerillaCicloVida />
      {/*
      <hr />
      <Sumador />
      <hr />
      <Perilla />
      */}
    </div>
  );
}
