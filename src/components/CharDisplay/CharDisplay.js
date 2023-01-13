import React from 'react';
import './CharDisplay.css';

export default function CharDisplay({ head, torso, bottoms }) {
  return (
    <section className="char-display-container">
      <img className="head" src={`./assets/${head}_head.png`} />
      <img className="torso" src={`./assets/${torso}_torso.png`} />
      <img className="bottoms" src={`./assets/${bottoms}_bottoms.png`} />
    </section>
  );
}
