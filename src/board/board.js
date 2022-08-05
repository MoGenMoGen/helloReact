import React from 'react';
import Square from '../square/square';
import './board.css'
import {Button } from 'antd';
class Board extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            date: new Date(),
            timer: null,
            temperature: 20
        }
    }
    renderSquare(k) {
        return <Square
            onClick={this.handleClick} />;
    }
    handleClick(p) {
        console.log('bbb', p);
    }
    componentDidMount() {
        // console.log('didMount');
        this.timer = setInterval(() => {
            this.setState({ date: new Date() })
        }, 1000);

    }
    componentWillUnmount() {
        clearInterval(this.timer)
        // console.log('unmount');
    }
    render() {
        return (
            <div>
                <div className="status">{this.state.date.toLocaleTimeString()}</div>
                <div className="board-row" >
                    {this.renderSquare()}
                    {this.renderSquare()}
                    {this.renderSquare()}
                </div> <div className="board-row" >
                    {this.renderSquare()}
                    {this.renderSquare()}
                    {this.renderSquare()}
                </div> <div className="board-row" >
                    {this.renderSquare()}
                    {this.renderSquare()}
                    {this.renderSquare()}
                </div>
                <input
                    value={this.state.temperature}
                    onChange={(e) => { this.setState((state) => ({ temperature: e.target.value })) }}
                />
                {
                    this.state.temperature > 100 ?
                        <p>水温沸腾</p>
                        :
                        <p>水温不沸腾</p>
                }
                 <Button type="primary">Primary Button</Button>

            </div>
        );
    }
}

export default Board;
