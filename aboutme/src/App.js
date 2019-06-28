import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>About me</h1>
        <p>by Brian Becker</p>
        <li>Bio</li>
        <p>I prefer a team oriented workspace.</p>

        <li>Why Helio?</li>
        <p>Why not?</p>

        <a
          //className="App-link"
          href="WorkExperience.js"
        // target="_blank"
        //rel="noopener noreferrer"
        >
          Work Experience
        </a>
      </header>
    </div>
  );
}

export default App;
