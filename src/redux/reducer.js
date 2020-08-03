import {INCREASE,DECREASE,TOTAL,SETNUM} from './actionType'
import {combineReducers} from 'redux'

const defaultState = {count:0}

function counter(state=defaultState,action){ //形参默认值
    switch(action.type){
        case INCREASE:
            ++state.count
            return state;
        case DECREASE:
            --state.count
            return state;
        default:
            return state
    }
}

const totalState = {number:0,total:0}
function calculateTotal(state=totalState,action){
    switch(action.type){
        case TOTAL:
            ++state.total
            return state;
        case SETNUM:
            state.number=action.value
            return state;
        default:
            return state;
    }
}

export const finalReducer = combineReducers({
    counter,calculateTotal
})
