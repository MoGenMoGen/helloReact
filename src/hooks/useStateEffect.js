import React, { createContext, useState, useEffect } from 'react';
import { useWindowScroll } from './useWindowScroll';
import { useLocalStorage } from './useLocalStorage';
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
function Test() {
    useEffect(() => {
        let timer = setInterval(() => {
            console.log('test');
        }, 1000)
        // 清除副作用
        return () => {
            clearInterval(timer)
        }
    }, [])
    return (<div>我是test组件</div>)
}

function useStateEffect() {
    const [count, setCount] = useState(() => { return 1 })
    const [name, setName] = useState('张三')
    const [y] = useWindowScroll()
    const [message, setMessage] = useLocalStorage('hook-key', '阿菲')
    const [flag, setFlag] = useState(true)

    setTimeout(() => {
        setMessage('jgjgjgj')
    }, 5000);
    useEffect(() => {
        document.title = name
    }, [name])
    return (
        <div style={{ height: '300vh' }}>
            <button onClick={() => { setCount(count + 1) }}>当前值：{count}</button>
            <button onClick={() => { setName(name + '1') }}>当前值：{name}</button>
            <button>当前值：{message}</button>
            <div>{y}</div>
            {
                flag ? <Test /> : null
            }
            <button onClick={() => setFlag(!flag)}>控制Flag</button>
        </div>
    )
}


export default useStateEffect;
