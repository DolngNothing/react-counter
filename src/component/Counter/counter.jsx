import React from 'react';
import { render } from '@testing-library/react';
import store from '../../redux/store'
import {increaseCount,decreseCount} from '../../redux/actions'

class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {count:0};
        //store.subscribe(this.storeChange);
    }

    storeChange = () =>{
        //this.setState({count:store.getState().counter});
        console.log(this.state.input)
        console.log(this.state.count)
    }

    increase = () => {
        this.setState(()=>{
            return {count:this.state.count+1}
        });
        this.props.increaseTotal();
    }

    decrease = () => {
        this.setState((prevState) =>
            ({ count: prevState.count - 1 })
        );
        this.props.decreaseTotal();
    }

    clearCount = () =>{
        this.setState({count : 0})
    }

    componentWillReceiveProps(nextProps){
        if(nextProps.input!=this.props.input){
            this.setState({count:0})
            this.setState({input:this.props.input})
        }
    }

    shouldComponentUpdate(){
        return true;
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