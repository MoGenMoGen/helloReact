import React from 'react';
import './text.css'
import './text.scss'
// import styles from './text.less'

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
                ]
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
            <div className="container">
                {/* <h1 className={styles.zs}>我是张三</h1> */}
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
        )
    }
}
export default Text;
