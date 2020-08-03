import {INCREASE,DECREASE,TOTAL,SETNUM} from './actionType'

//包含所有的action creator
export const increaseCount = () =>({type:INCREASE})
export const decreseCount = () => ({type:DECREASE})
export const calculateTotal = () => ({type:TOTAL})
export const setNumber = (value) => ({
    value,
    type:SETNUM})

export const calculateTotalAsync = () =>{
    return dispatch =>{
        setTimeout(()=>{
            dispatch(calculateTotal())
        },200);
    }
}