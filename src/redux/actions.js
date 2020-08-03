import {INCREASE,DECREASE,TOTAL} from './actionType'

//包含所有的action creator
export const increaseCount = () =>({type:INCREASE})
export const decreseCount = () => ({type:DECREASE})
export const calculateTotal = () => ({type:TOTAL})
