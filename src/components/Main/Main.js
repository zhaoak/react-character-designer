import React from 'react';
import { useState } from 'react';
import './Main.css';
import PartSelector from '../PartSelector/PartSelector';

export default function Main() {
  // state variables stored here
  const [head, setHead] = useState('beau');
  const [torso, setTorso] = useState('beau');
  const [bottoms, setBottoms] = useState('beau');
  // Ask a TA component state stored in its own component

  return (
    <main className="halves-container">
      <section className="left-sect">
        <PartSelector setHead={setHead} setTorso={setTorso} setBottoms={setBottoms} />
      </section>
      <section className="right-sect"></section>
    </main>
  );
}
