import React from 'react';
import Counter from '../Counter/counter';


class CounterGroup extends React.Component {
    constructor(props) {
        super(props)
        this.state = { number: 3 }
    }

    componentWillMount() {
        console.log("componentWillMount");
    }

    componentDidMount() {
        console.log("组件第一次渲染完成，此时dom节点已经生成")
    }

    componentWillUnmount() {
        console.log("在此处完成组件的卸载和数据的销毁。")
    }

    componentWillReceiveProps() {
        console.log("componentWillReceiveProps:在接受父组件改变后的props需要重新渲染组件时用到的比较多")
    }

    shouldComponentUpdate() {
        console.log("shouldComponentUpdate:用于性能优化。")
        return true;
    }

    componentWillUpdate() {
        console.log("shouldComponentUpdate返回true以后，组件进入重新渲染的流程")
    }

    componentDidUpdate() {
        console.log("组件更新完毕")
    }

    enterNumber = (e) => {
        this.setState({ number: e.target.value.length==0?0:parseInt(e.target.value) })
    }


    render() {
        return (
            <div>
                <div>
                    number of counters:<input value={this.state.number} onChange={this.enterNumber}></input>
                </div>
                {new Array(this.state.number).fill().map((value, key) => <Counter key={key} />)}
            </div>
        );
    }
}

export default CounterGroup;