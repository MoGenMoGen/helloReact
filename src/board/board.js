import React from 'react';
import Square from '../square/square';
import Content1 from '../content1/content1';
import './board.css'
import { Button } from 'antd';
class Board extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            date: new Date(),
            timer: null,
            temperature: 20,
            msg:'父组件中的msg'
        }
    }
    renderSquare=(k)=> {
        // 子传父：父组件给子组件传递一个函数，在子组件中调用  
        return <Square
            handleClick={this.handleClick}
            setMsg={this.setMsg}
        />;
    }
    handleClick(p) {
        console.log('bbb', p);
    }
    setMsg=(msg)=>{
        this.setState({msg})
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
                <Content1 msg={this.state.msg}></Content1>

            </div>
        );
    }
}

export default Board;
