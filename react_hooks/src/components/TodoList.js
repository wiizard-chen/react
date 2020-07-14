// react 套路, 组件需要继承 Component
// import {Component} from 'react'
import React, {Component, useState, useEffect, useCallback, useContext, useReducer} from 'react'


// 引用 TodoItem 组件
import TodoItem from "./TodoItem"
import {TodoContext} from "./TodoContext";
import {initialState, reducer} from "../model/sbReucer";

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
    const todoCtx = useContext(TodoContext);
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <>
            <div>fuck react</div>
            <button onClick={(e)=>todoCtx.onDelete(1)}>delete fuck</button>
            <div>{state.count}</div>
        </>
    )
}

export default TodoList
