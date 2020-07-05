import React from 'react'

// react 版的全局变量生命套路
const TodoContext = React.createContext({
    name: 'wiizard',
    // 设置 TodoContext 的默认属性
    onDelete: () => {},
})

TodoContext.displayName = 'fuck More'

export {
    TodoContext
}
