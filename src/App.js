import './App.css';
import React from 'react';
import Board from './board/board';
import Text from './text/text';
import AntdCom from './antdCom/antdCom';

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
    this.state = { showIndex: 0 }
  }
  render() {
    let com;
    if (this.state.showIndex)
      com = <Board />
    else
      com = <Text />
    return (
      <div className='App'>
        <div className='tab'>
          <div className='subTab' style={{ background: this.state.showIndex == 0 ? 'green' : 'white', 'lineHeight': '29px' }} onClick={() => { this.handleClick(0) }}>棋盘</div>
          <div className='subTab' style={{ background: this.state.showIndex == 1 ? 'green' : 'white', 'lineHeight': '29px' }} onClick={() => { this.handleClick(1) }}>文字</div>
          <div className='subTab' style={{ background: this.state.showIndex == 2 ? 'green' : 'white', 'lineHeight': '29px' }} onClick={() => { this.handleClick(2) }}>Antd</div>
        </div>
        <div>
          {this.renderSubCompoent()}
          {/* {com} */}
          {/* {
            this.state.showIndex?<Board/>:<Text/>
          } */}
        </div>
      </div>

    )
  }
  handleClick=(index)=> {
    this.setState({ showIndex: index })
  }
  renderSubCompoent() {
    if (this.state.showIndex == 0)
      return <Board />
    if (this.state.showIndex == 1)
      return <Text />
    if (this.state.showIndex == 2)
      return <AntdCom />

  }

}

export default App;
