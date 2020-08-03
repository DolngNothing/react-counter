import React from 'react';
import counter from '../Counter/counter';


class counterGroup extends React.Component{
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