import React, { createContext, useState, useEffect } from 'react';
import Compose from '../compose/compose'
import NamedSlot from '../namedSlot/namedSlot'

import './text.css'
import './text.scss'
// import styles from './text.less'
const { Provider, Consumer } = createContext();
/**
    * 在修改数据之后 把count值放在页面标题中
    * 1.导入useEffect函数
    * 2.在函数组件中执行 传入回调 并且定义副作用
    * 3.当我们通过修改状态更新组件时，副作用也会不断执行
    *    
    * 依赖项控制副作用的执行时机
    * 1.默认状态（无依赖项）
    * 组件初始化的时候先执行一次 等到每次数据修改组件更新再次执行
    * 2. 添加一个空数组依赖项   
    * 组件只在初始化的时候执行一次
    * 3.依赖特定项
    * 组件初始化执行一次 依赖的特定项发生变化的时重新执行
    * 4.注意事项
    * 只要在useEffect回调函数中用到的数据状态就应该出现在依赖项数组中声明 否则可能会有bug
    * 某种意义上 hook的出现，就是想不用生命周期也能写业务代码
    */
function SubTextitem() {
    const [count, setCount] = useState(0)
    const [name, setName] = useState('张三')
    console.log(11);
    useEffect(() => {
        document.title = name
    }, [name])
    return (
        <div>
            <h3>内容：</h3>
            <Consumer>{value => <div>{value}</div>}</Consumer>
            <button onClick={() => { setCount(count + 1) }}>当前值：{count}</button>
            <button onClick={() => { setName(name + '1') }}>当前值：{name}</button>
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
            msg: 'context跨组件传值信息'
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
