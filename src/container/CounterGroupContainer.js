import {connect} from 'react-redux'
import CounterGroup from '../component/CounterGroup/index'
import {setNumber,reset,increaseTotal,decreaseTotal} from '../redux/actions'

function mapStateToProps(state) {
  return {
    number : state.number,
    total: state.total
  }
}

const mapDispatchToProps = dispatch => {
    return {
      increase: () => {
        dispatch(increaseTotal())
      },
      decrease: () => {
        dispatch(decreaseTotal())
      },
      setNum: (e) =>{
        dispatch(setNumber(e.target.value == '' ? 0 : parseInt(e.target.value)))
      }
    }
  }

const CounterGroupContainer=connect(mapStateToProps,mapDispatchToProps)(CounterGroup);
 export default CounterGroupContainer;