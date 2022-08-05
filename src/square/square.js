import './square.css';
import React from 'react';

class Square extends React.Component {
    state = {
        value: 0
    }
    handleClick1() {
        this.setState((state) => ({ value: state.value == 0 ? 1 : 0 }), () => {
            this.props.onClick(this.state.value)

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
