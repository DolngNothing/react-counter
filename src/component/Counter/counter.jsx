import React from 'react';
import { render } from '@testing-library/react';

class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.state = { count: 0 };
    }

    increase = () => {
        this.setState({ count: this.state.count + 1 });
    }

    decrease = () => {
        this.setState((prevState) =>
            ({ count: prevState.count - 1 })
        );
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