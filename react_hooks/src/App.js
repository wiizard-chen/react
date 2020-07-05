// 引入 antd 的 css
import 'antd/dist/antd.css'
import React, { Component }  from 'react'
import './App.css'

// 引入 Todo 组件
import Todo from './components/Todo'

function App() {
    return (
        <div className="App">
            <Todo></Todo>
        </div>
    )
}

export default App
