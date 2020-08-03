import {createStore} from 'redux'
import {finalReducer } from './reducer'
//生成store对象
const store = createStore(
    
    finalReducer,window.__REDUX_DEVTOOLS_EXTENSION__&& window.__REDUX_DEVTOOLS_EXTENSION__()
)

export default store