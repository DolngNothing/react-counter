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
function calculateTotal(state = totalState, action) {
    switch (action.type) {
        case INCRE_TOTAL:
            ++state.total
            return state;
        case DECRE_TOTAL:
            --state.total
            return state;
        case RESET:
            state.total = 0;
            return state;
        case SETNUM:
            state.number=action.value;
            return state;
        default:
            return state;
    }
}

export const finalReducer = combineReducers({
    calculateTotal
})
