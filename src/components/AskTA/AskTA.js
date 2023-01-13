import React from 'react';
import { useState } from 'react';
import './AskTA.css';

const generic_quotes = [
  "It's a booger.",
  'Did you put the error message in your help request?',
  "Alchemy isn't a cult! I wouldn't be a TA if Alchemy was a cult.",
  "Yeah, it's just a typo.",
  'Oh, you missed a semicolon.',
  'Woooooooowwww',
  "No Ma'am, mmmnnn, no ma'am",
  "What's supposed to happen?",
];

export default function AskTA({ head }) {
  const [chatLog, setChatLog] = useState([]);
  const submitQuestion = () => {
    // grab what the user typed
    const textInput = document.getElementById('user-question-input');
    // append it to the state, which in this case does nothing but stores it
    addToLog(textInput.value);
    // pick a random TA response, add it to log

    // create and append new message bubbles with question and response to area for them
  };

  const addToLog = (thingToAdd) => {
    // high quality computer programming done dirt cheap
    const temp = chatLog;
    temp.push(thingToAdd);
    setChatLog(temp);
  };

  return (
    <section className="ask-a-ta">
      <div className="ask-ta-input-area">
        <h4>Ask A TA</h4>
        <textarea id="user-question-input" />
        <button onClick={submitQuestion}>please help me!</button>
      </div>
      <hr />
      <div className="ask-ta-chat-area"></div>
    </section>
  );
}
