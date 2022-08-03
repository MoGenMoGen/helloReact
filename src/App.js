import './App.css';
import React from 'react';
import Board from './board/board';
import Text from './text/text';

// function App() {
//   return (
//     <div className="App">
//      sss
//     </div>
//   );
// }
class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = { show1: true }
  }
  handleClick(flag) {
    this.setState({ show1: flag })
  }
  renderSubCompoent() {
    if (this.state.show1)  
      return <Board />
    return <Text />
  }
  render() {
    let com;
    if (this.state.show1)
      com = <Board />
    else
      com = <Text />
    return (
      <div className='App'>
        <div className='tab'>
          <div className='tab1' style={{ background: this.state.show1 ? 'green' : 'white' }} onClick={() => { this.handleClick(true) }}>棋盘</div>
          <div className='tab2' style={{ background: !this.state.show1 ? 'green' : 'white' }} onClick={() => { this.handleClick(false) }}>文字</div>
        </div>
        <div>
          {/* {this.renderSubCompoent()} */}
          {/* {com} */}
          {
            this.state.show1?<Board/>:<Text/>
          }
        </div>
      </div>

    )
  }
}

export default App;
