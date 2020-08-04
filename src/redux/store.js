import {createStore} from 'redux'
import calculateTotal  from './reducer'
//生成store对象
const store = createStore(
    
    calculateTotal,window.__REDUX_DEVTOOLS_EXTENSION__&& window.__REDUX_DEVTOOLS_EXTENSION__()
)

export default store