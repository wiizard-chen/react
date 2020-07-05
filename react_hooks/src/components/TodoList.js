// react 套路, 组件需要继承 Component
// import {Component} from 'react'
import React, { Component, useState, useEffect, useCallback }  from 'react'


// 引用 TodoItem 组件
import TodoItem from "./TodoItem"

// class TodoList extends Component {
//     constructor(props) {
//         super(props)
//     }
//
//     render() {
//         let todos = this.props.todos
//         let todos_template = todos.map((t, index) => (
//             <div key={index}>
//                 <TodoItem todo={t}/>
//             </div>
//         ))
//
//         return (
//             <div>
//                 {todos_template}
//             </div>
//         )
//         // 请跳转到 TodoItem.js
//     }
// }


const TodoList = (todos) => {
    const [count, setCount] = useState(0)
    return (
        <div>fuck react</div>
    )
}

export default TodoList
