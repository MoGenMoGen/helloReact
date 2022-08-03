import './square.css';
import React from 'react';

class Square extends React.Component {
    handleClick1(){
        this.props.onClick(this.props.k)
    }
    render() {
        return (
            <button className="square" onClick={()=>this.handleClick1()}>
                {this.props.value}
            </button>
        )
    }
}
export default Square;
