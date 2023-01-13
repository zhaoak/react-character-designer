import React from 'react';
import { useState } from 'react';

import './PartSelector.css';

export default function PartSelector({
  setHead,
  setTorso,
  setBottoms,
  setChangeCounter,
  changeCounter,
}) {
  const [headChangeCounter, setHeadChangeCounter] = useState(0);
  const [torsoChangeCounter, setTorsoChangeCounter] = useState(0);
  const [bottomsChangeCounter, setBottomsChangeCounter] = useState(0);

  const changeHead = (event) => {
    setHead(event.target.value);
    setHeadChangeCounter(headChangeCounter + 1);
  };

  const changeTorso = (event) => {
    setTorso(event.target.value);
    setTorsoChangeCounter(torsoChangeCounter + 1);
  };
  const changeBottoms = (event) => {
    setBottoms(event.target.value);
    setBottomsChangeCounter(bottomsChangeCounter + 1);
  };

  return (
    <section className="part-selector">
      <label>
        head ({headChangeCounter} changes)
        <select onChange={changeHead}>
          <option value={'generic'}>generic</option>
          <option value={'beau'}>Beau</option>
          <option value={'delaney'}>Delaney</option>
        </select>
      </label>

      <label>
        torso ({torsoChangeCounter} changes)
        <select onChange={changeTorso}>
          <option value={'generic'}>generic</option>
          <option value={'beau'}>Beau</option>
          <option value={'delaney'}>Delaney</option>
        </select>
      </label>

      <label>
        bottoms ({bottomsChangeCounter} changes)
        <select onChange={changeBottoms}>
          <option value={'generic'}>generic</option>
          <option value={'beau'}>Beau</option>
          <option value={'delaney'}>Delaney</option>
        </select>
      </label>
    </section>
  );
}
