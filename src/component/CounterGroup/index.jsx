import React from 'react';
import Counter from '../Counter/counter';


class CounterGroup extends React.Component {
    constructor(props) {
        super(props)
        this.state = { number: 3 ,total:0,childs:[]}
    }

    enterNumber = (e) => {
        this.setState({total:0})
        this.setState({ number: e.target.value.length==0?0:parseInt(e.target.value) })
    }

    totalIncrease = (result) => {
        this.setState({total:this.state.total+1})
    }

    totalDecrease = (result) => {
        this.setState({total:this.state.total-1})
    }

    onRef = (ref) => {
        this.state.childs.push(ref);
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
                {new Array(this.state.number).fill().map((value, key) => <Counter key={key} parent={ this } onRef={this.onRef}/>)}
            </div>
        );
    }
}

export default CounterGroup;