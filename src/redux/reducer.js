import { INCRE_TOTAL, DECREASE, TOTAL, SETNUM, RESET,DECRE_TOTAL } from './actionType'
import { combineReducers } from 'redux'

const defaultState = { count: 0 }
/*
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
*/
const totalState = { total: 0 ,number:3}
const calculateTotal = (state = totalState, action) => {
    switch (action.type) {
        case INCRE_TOTAL:
            return {...state, total: state.total+1};
        case DECRE_TOTAL:
            return {...state, total: state.total-1};
        case RESET:
            return {...state, total: 0};
        case SETNUM:
            return {...state, number: action.value};
        default:
            return state;
    }
}

export default calculateTotal;