/*import React from 'react';
//import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

*/
import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './App.css';
function Home() {
  return <h2>Home</h2>;
}

function Author() {
  return <h2>Author</h2>;
}

function Books() {
  return <h2>Books</h2>;
}

function AppRouter() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/Author/">Author</Link>
            </li>
            <li>
              <Link to="/Books/">Books</Link>
            </li>
          </ul>
        </nav>
        <div><label for={search}></label></div>
        <Route path="/" exact component={Home} />
        <Route path="/Author/" component={Author} />
        <Route path="/Books/" component={Books} />
      </div>
    </Router>
  );
}

export default AppRouter;