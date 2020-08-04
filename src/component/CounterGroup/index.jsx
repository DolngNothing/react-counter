import React from 'react';
import Counter from '../Counter/counter';
import store from '../../redux/store'
import {setNumber,reset,increaseTotal,decreaseTotal} from '../../redux/actions'


class CounterGroup extends React.Component {
    constructor(props) {
        super(props)
        this.state = { number: 3 ,total:0,childs:[]}
        store.subscribe(this.storeChange);
        console.log(store.getState());
    }

    storeChange = () =>{
        this.setState({total:store.getState().calculateTotal.total});
        this.setState({number:store.getState().calculateTotal.number})
        console.log("成功调用")
    }

    enterNumber = (e) => {
        console.log(e.target.value)
        store.dispatch(setNumber(e.target.value==''?0:parseInt(e.target.value)))
        store.dispatch(reset())
    }

    totalIncrease = (result) => {
        store.dispatch(increaseTotal())
    }

    totalDecrease = (result) => {
        store.dispatch(decreaseTotal())
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