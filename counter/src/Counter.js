import React from 'react'
import { connect } from 'react-redux'
import { addAction } from './redux/actions'

import './App.css';

/*const counterDisplay = ({ count }) => {
    return (
        <h1>(count)</h1>
    )
}
*/
class Counter extends React.Component {


    componentDidMount() {

    }



    increment = () => {
        this.props.dispatch(addAction(1))
    };

    decrement = () => {
        this.props.dispatch(addAction(-1))
    };



    render() {

        return (

            <div>
                <button className='inc' onClick={this.increment}>Increment!</button>
                <button className='dec' onClick={this.decrement}>Decrement!</button>
                <h1>Current Count: {this.state.count}</h1>

            </div>
        )
    }

};

const mapStateToProps = state => {
    return {
        count: state.count
    }

}

export default connect(mapStateToProps)(Counter)