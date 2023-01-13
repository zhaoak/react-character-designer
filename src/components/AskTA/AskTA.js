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
  // stretch goal: different responses based on whose head
  const [chatLog, setChatLog] = useState([]);
  const submitQuestion = () => {
    // grab what the user typed
    const textInput = document.getElementById('user-question-input');
    // append it to the state, which in this case does nothing but stores it
    addToLog(textInput.value);
    // pick a random TA response, add it to log
    const response = generic_quotes[Math.floor(Math.random() * generic_quotes.length)];
    addToLog(response);
    // create and append new message bubbles with question and response to area for them
    const questionBubble = document.createElement('p');
    const answerBubble = document.createElement('p');
    questionBubble.textContent = textInput.value;
    answerBubble.textContent = response;
    questionBubble.classList.add('user-question-message-bubble');
    answerBubble.classList.add('ta-response-message-bubble');
    const chatEl = document.getElementById('ask-ta-chat-area');
    chatEl.append(questionBubble);
    chatEl.append(answerBubble);
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
        <textarea id="user-question-input" rows="3" cols="40" />
        <button onClick={submitQuestion}>please help me!</button>
      </div>
      <hr />
      <div id="ask-ta-chat-area"></div>
    </section>
  );
}
