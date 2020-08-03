import {INCREASE,DECREASE,TOTAL} from './actionType'
import {combineReducers} from 'redux'

const defaultState = {count:0}

function counter(state=defaultState,action){ //形参默认值
    switch(action.type){
        case INCREASE:
            return ++state.count;
        case DECREASE:
            return --state.count;
        default:
            return state.count
    }
}
function calculateTotal(state=defaultState,action){
    switch(action.type){
        case TOTAL:
            return --state.count;
        default:
            return state.count;
    }
}

export const finalReducer = combineReducers({
    counter,calculateTotal
})
