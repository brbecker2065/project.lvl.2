import React from 'react'
import Counter from './Counter';
import './App.css';

function App() {
  return (
    <div className="App">
      <Counter />
    </div>
  );
};



/*const counterDisplay = ({ count }) => {
  return (
    <h1>(count)</h1>
  )
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    }

  }

  increment = () => {
    this.setState({
      count: this.state.count + 1

    });

  }
  decrement = () => {
    this.setState({
      count: this.state.count - 1
    });
  };


  render() {

    return (

      <div>
        <button className='inc' onClick={this.increment}>Increment!</button>
        <button className='dec' onClick={this.decrement}>Decrement!</button>
        <h1>Current Count: {this.state.count}</h1>

      </div>
    );
  };
}
*/export default App;
