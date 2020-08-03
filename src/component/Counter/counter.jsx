import React from 'react';
import { render } from '@testing-library/react';
import store from '../../redux/store'
import {increaseCount,decreseCount} from '../../redux/actions'

class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {count:0,input:this.props.input()};
        store.subscribe(this.storeChange);
    }

    storeChange = () =>{
        this.setState({count:store.getState().counter});
        console.log(this.state.input)
        console.log(this.state.count)
    }

    increase = () => {
        this.setState(()=>{
            return {count:this.state.count+1}
        });
        this.props.parent.totalIncrease(this);
    }

    decrease = () => {
        this.setState((prevState) =>
            ({ count: prevState.count - 1 })
        );
        this.props.parent.totalDecrease(this);
    }

    clearCount = () =>{
        console.log("调用clear")
        this.setState({count : 0})
    }

    componentWillReceiveProps(){
        if(this.state.input!=this.props.input()){
            this.setState({count : 0})
            this.setState({input:this.props.input()})
        }
    }

    render() {
        return (
            <div>
                <button onClick={this.increase}>+</button>
                <mark>{this.state.count}</mark>
                <button onClick={this.decrease}>-</button>
            </div>
        );
    }
}

export default Counter;