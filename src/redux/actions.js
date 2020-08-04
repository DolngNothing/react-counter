import {INCREASE,DECREASE,INCRE_TOTAL,SETNUM,RESET,DECRE_TOTAL} from './actionType'

//包含所有的action creator
export const increaseCount = () =>({type:INCREASE})
export const decreseCount = () => ({type:DECREASE})
export const increaseTotal = () => ({type:INCRE_TOTAL})
export const decreaseTotal = () => ({type:DECRE_TOTAL})
export const reset = () => ({type:RESET})
export const setNumber = (value) => ({
    value,
    type:SETNUM})

export const increaseTotalAsync = () =>{
    return dispatch =>{
        setTimeout(()=>{
            dispatch(increaseTotal())
        },200);
    }
}