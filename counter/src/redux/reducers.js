import { combineReducers } from 'redux'

const countReducer = (state = 0, action) => {
    switch (action.type) {
        case 'Add_Actions':
            return state + action.amount
        default:
            return state

    }
}

export default combineReducers({ count: countReducer })