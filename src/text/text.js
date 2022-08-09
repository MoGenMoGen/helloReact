import React, { createContext } from 'react';
import Compose from '../compose/compose'
import NamedSlot from '../namedSlot/namedSlot'

import './text.css'
import './text.scss'
// import styles from './text.less'
const { Provider, Consumer } = createContext();
function SubTextitem() {
    return (
        <div>
            <h3>内容：</h3>
            <Consumer>{value => <div>{value}</div>}</Consumer>

        </div>
    )
}
function SubText() {
    return (
        <SubTextitem />
    )
}

class Text extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            List:
                [
                    { name: '张三', age: 18, id: '1' },
                    { name: '李四', age: 23, id: '2' },
                    { name: '王五', age: 12, id: '3' },
                    { name: '赵六', age: 14, id: '4' },
                    { name: '吴七', age: 16, id: '5' },
                ],
                msg:'context跨组件传值信息'
        }
    }
    render() {
        let listItems = this.state.List.map(item =>
            <div className='tr' key={item.id}>
                <div className='td'>{item.name}</div>
                <div className='td'>{item.age}</div>
            </div>
        )

        return (
            <Provider value={this.state.msg}>
                <div>
                    <Compose>

                        <div className="container">
                            <div className='table'>
                                <div className='th'>
                                    <div className='td'>姓名</div>
                                    <div className='td'>年龄</div>
                                </div>
                                <div className='tbody'>
                                    {/* {listItems} */}
                                    {
                                        this.state.List.map(item =>
                                            <div className='tr' key={item.id}>
                                                <div className='td'>{item.name}</div>
                                                <div className='td'>{item.age}</div>
                                            </div>
                                        )
                                    }
                                </div>
                            </div>
                        </div>
                    </Compose>
                    <NamedSlot>
                        <div slot="pView">
                            <p>p1p1p1p1p1p1pp1p1p11p1pp11</p>
                        </div>
                        <div slot="hView">
                            <h2>h2h2h2h2h2hh2h2</h2>
                        </div>
                        <div>11111111</div>
                    </NamedSlot>
                    <SubText />
                </div>
            </Provider>

        )
    }
}


export default Text;
