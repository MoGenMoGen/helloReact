import './square.css';
import React from 'react';

class Square extends React.Component {
    state = {
        value: 0
    }
    handleClick1() {
        this.setState((state) => ({ value: state.value == 0 ? 1 : 0 }), () => {
            // 子传父：子组件调用父组件传递过来的函数，并且传递数据作为函数实参
            this.props.handleClick(this.state.value)
            this.props.setMsg('这是来自子组件的Msg')

        })
    }
    render() {
        return (
            <button className="square" onClick={this.handleClick1.bind(this)}>
                {this.state.value}
            </button>
        )
    }
}
export default Square;
