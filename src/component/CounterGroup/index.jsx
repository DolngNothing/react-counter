import React from 'react';
import Counter from '../Counter/counter';
import store from '../../redux/store'
import {calculateTotal,setNumber} from '../../redux/actions'


class CounterGroup extends React.Component {
    constructor(props) {
        super(props)
        this.state = { number: 3 ,total:0,childs:[]}
        store.subscribe(this.storeChange);
    }

    storeChange = () =>{
        this.setState(store.getState().calculateTotal);
        console.log("成功调用")
    }

    enterNumber = (e) => {
        store.dispatch(setNumber(e.target.value.length==0?0:parseInt(e.target.value)))
        this.setState({total:0})
    }

    totalIncrease = (result) => {
        store.dispatch(calculateTotal())
    }

    totalDecrease = (result) => {
        this.setState({total:this.state.total-1})
    }

    sendInput = () => {
        return this.state.number;
    }


    render() {
        return (
            <div>
                <div>
                    number of counters:<input value={this.state.number} onChange={this.enterNumber}></input>
                </div>
                <div>
                    total: {this.state.total}
                </div>
                {new Array(this.state.number).fill().map((value, key) => <Counter key={key} parent={ this } input={this.sendInput}/>)}
            </div>
        );
    }
}

export default CounterGroup;