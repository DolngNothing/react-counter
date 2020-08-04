import React from 'react';
import Counter from '../Counter/counter';
import store from '../../redux/store'
import { setNumber, reset, increaseTotal, decreaseTotal } from '../../redux/actions'


class CounterGroup extends React.Component {
    constructor(props) {
        super(props)
        this.state = { number: 3, total: 0, childs: [] }
        //store.subscribe(this.storeChange);
        console.log(store.getState());
    }

    storeChange = () => {
        // this.setState({total:store.getState().total});
        //this.setState({ number: store.getState().number })
        console.log("成功调用")
    }

    enterNumber = (e) => {
        console.log(e.target.value)
        this.props.setNum(e);
        store.dispatch(reset())
    }

    totalIncrease = (result) => {
        this.props.increase();
        //store.dispatch(increaseTotal())
    }

    totalDecrease = (result) => {
        this.props.decrease();
    }


    render() {
        const {total,number} = this.props;

        return (
            <div>
                <div>
                    number of counters:<input value={number} onChange={this.enterNumber}></input>
                </div>
                <div>
                    total: {total}
                </div>
                {new Array(number).fill().map((value, key) => <Counter key={key}
                    increaseTotal={this.totalIncrease}
                    decreaseTotal={this.totalDecrease}
                    input={number} />)}
            </div>
        );
    }
}

export default CounterGroup;