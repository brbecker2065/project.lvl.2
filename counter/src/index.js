import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import * as serviceWorker from './serviceWorker'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import rootReducer from './redux/reducers';

const store = createStore(rootReducer);





ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();


class Counter extends React.Component {
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
            <body>
                <div>
                    <button className='inc' onClick={this.increment}>Increment!</button>
                    <button className='dec' onClick={this.decrement}>Decrement!</button>

                    <h1>Current Count: {this.state.count}</h1>

                </div>
            </body>
        );
    };
};

export default Counter;