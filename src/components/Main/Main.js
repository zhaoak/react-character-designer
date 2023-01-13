import React from 'react';
import { useState } from 'react';
import './Main.css';
import PartSelector from '../PartSelector/PartSelector';
import CharDisplay from '../CharDisplay/CharDisplay';
import AskTA from '../AskTA/AskTA';

export default function Main() {
  // state variables stored here
  const [head, setHead] = useState('generic');
  const [torso, setTorso] = useState('generic');
  const [bottoms, setBottoms] = useState('generic');
  // Ask a TA component state stored in its own component

  return (
    <main className="halves-container">
      <section className="left-sect">
        <PartSelector setHead={setHead} setTorso={setTorso} setBottoms={setBottoms} />
        <AskTA />
      </section>
      <section className="right-sect">
        <CharDisplay head={head} torso={torso} bottoms={bottoms} />
      </section>
    </main>
  );
}
