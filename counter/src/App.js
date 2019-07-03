import React from 'react';

import './App.css';
import { ENGINE_METHOD_STORE } from 'constants';

function App() {
  class Counter extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        count: 0
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

      //      reset = ()=> {
      //      this.setState({
      //          this.state.count: 0
      //  }
      //  }

    }
    render() {
      let { count }: this.state
      return (

        <div>
          <button className='inc' onClick={this.increment}>Increment!</button>
          <button className='dec' onClick={this.decrement}>Decrement!</button>
          <button className='reset' onClick={this.reset}>Reset</button>
          <h1>Current Count: {this.state.count}</h1>

        </div>

      );
    };
  };

  export default Counter;
}
export default App;
