import { useState } from 'react'
// 自定义hook函数实现始终返回滚动位置距离顶部的距离
export function useWindowScroll() {
    const [y, setY] = useState(0);
    window.addEventListener('scroll', () => {
        setY(document.documentElement.scrollTop)

    })
    return [y]


}