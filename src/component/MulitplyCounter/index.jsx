import React from 'react';
import Counter from '../Counter/counter';


class CounterGroup extends React.Component{
    constructor(props){
        super(props)
        this.state={number:0}
    }

    render(){
        return (
            <div>
                {new Array(6).fill(0).map(()=><Counter />)}
            </div>
        );
    }
}

export default CounterGroup;