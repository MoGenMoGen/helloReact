import React from 'react';
import Square from '../square/square';
import './board.css'
class Board extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            date: new Date(),
            squares: [0, 0, 0,
                0, 0, 0,
                0, 0, 0],
            timer: null,
        }
    }
    renderSquare(k) {
        return <Square k={k} value={this.state.squares[k]}
            onClick={()=>{this.handleClick(k)}} />;
    }
    handleClick(i) {
        this.setState((state) => {
            return {
                squares: state.squares.map((item, index) => {
                    if (i == index) {
                        item = item == 0 ? 1 : 0
                    }
                    return item
                })
            }
        }
        )

    }
    componentDidMount() {
        console.log('didMount');
        this.timer = setInterval(() => {
            this.setState({ date: new Date() })
        }, 1000);

    }
    componentWillUnmount() {
        clearInterval(this.timer)
        console.log('unmount');
    }
    render() {
        return (
            <div>
                <div className="status">{this.state.date.toLocaleTimeString()}</div>
                <div className="board-row" >
                    {this.renderSquare(0)}
                    {this.renderSquare(1)}
                    {this.renderSquare(2)}
                </div>
                <div className="board-row">
                    {this.renderSquare(3)}
                    {this.renderSquare(4)}
                    {this.renderSquare(5)}
                </div>
                <div className="board-row">
                    {this.renderSquare(6)}
                    {this.renderSquare(7)}
                    {this.renderSquare(8)}
                </div>
            </div>
        );
    }
}

export default Board;
