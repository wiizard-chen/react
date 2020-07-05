// react 套路, 组件需要继承 Component
import React, { Component, useState, useEffect, useCallback }  from 'react'

// import {Component} from 'react'

// 引用 TodoInput, TodoList 组件
import TodoInput from "./TodoInput"
import TodoList from "./TodoList"

// 普通的 Model 类
import TodoModel from "../model/todo"

// react版 的全局变量
import {TodoContext} from "./TodoContext"


const log = console.log.bind(console)

// TODO组件是主要组件
// class Todo extends Component {
//     constructor(props) {
//         super(props)
//
//         // react 只对组件的 state 属性做双向绑定的操作
//         this.state = {
//             todos: TodoModel.getDefault(),
//             text: '',
//         }
//         this.onAdd = this.onAdd.bind(this)
//     }
//
//     onAdd(text) {
//         // 这是  method 一种写法
//         // 但这写法的 this 可以在外部修改, 出现 this 指向错误的问题
//         // 需要增加 第26行 声明, 解决 this 被修改的问题
//
//         let todos = this.state.todos
//         let id = 0
//         if (todos.length > 0) {
//             id = todos[todos.length - 1].id + 1
//         }
//         let item = TodoModel.new(id, text)
//         todos.push(item)
//
//         // 注意 !
//         // 调用 this.setState 之后, react 会调用 render 方法, 重新渲染
//         // react 双向绑定是需要手动通知的
//         this.setState({
//             todos: todos
//         })
//     }
//
//     onDelete = (id) => {
//         // 这种用箭头函数 声明 method 的写法, 是不会出现 this 指向错误的问题
//         // 简单来说少写了一句代码
//         log('id is', id)
//         let todos = this.state.todos
//         let index = todos.findIndex(e => e.id === id)
//         todos.splice(index, 1)
//
//         this.setState({
//             todos: todos,
//         })
//     }
//
//     render() {
//         // render 渲染函数, 将 jsx 渲染为 HTML
//
//         let todos = this.state.todos
//         let actions = {
//             onDelete: this.onDelete,
//         }
//         return (
//             <div className={'Container'}>
//                 <div className={'Header'}>TODO</div>
//                 <div className={'MainContent'}>
//                     <TodoContext.Provider value={actions}>
//                         <TodoInput onAdd={this.onAdd}></TodoInput>
//                         <TodoList todos={todos}></TodoList>
//                     </TodoContext.Provider>
//                 </div>
//             </div>
//         )
//
//         // className 相当于 HTML 元素的 class 特性
//
//         // 重点解释下面 4行
//
//         // <TodoContext.Provider value={actions}>
//         //     <TodoInput onAdd={this.onAdd}></TodoInput>
//         //      <TodoList todos={todos}></TodoList>
//         // </TodoContext.Provider>
//
//         // 第一行
//         // TodoContext.Provider 这是全局变量声明, 参数是 actions(全局变量的属性值), 可以理解为
//         // let context = new TodoContext.Provider(actions)
//
//         // 第二行可以理解为
//         // let input = new TodoInput()
//         // input.onAdd = this.onAdd
//
//         // 第三行 可以理解为
//         // let list = new TodoList()
//         // list.todos = this.state.todos
//
//         // 第四行结束标签
//
//     }
// }
//

const Todo = () => {
    const [todos, setTodos] = useState(TodoModel.getDefault)
    const [count, setCount] = useState(0)
    // useEffect 将 componentDidMount, componentWillUnmount, componentDidUpdate 合并起来
    // useEffect 是链路调用, 与顺序有关, 傻逼设计
    // useEffect 可以多次定义, 当前 useEffect 会调用上一个 useEffect 返回函数
    // u1 -> u2 -> u3 -> u4
    // 执行链
    // useEffect 分成两部分
    // content 与 result
    // 首先 didMount 执行, 只会执行 content
    // 然后 didUpdate 执行, 先执行 result 然后再执行 content

    const fuckClick = (e) => {
        const nCount = count + 1
        const nTodos = [...todos, 'fuck']
        setCount(nCount)
        setTodos(nTodos)
    }

    // effect 1
    useEffect(() => {
        log('fuck 11')
        log('fucking todos', todos)

        return () => {
            log('fuck 1')
        }
    }, [todos])

    // effect 2
    useEffect(() => {
        log('fuck 22')
        log('fucking count', count)
        return () => {
            log('fuck 2')
        }
    }, [count])



    return (
        <div className={'Container'}>
            <div className={'Header'}>TODO</div>
            <div className={'MainContent'}>
                <button onClick={fuckClick}>fuck more</button>
                {/*<TodoContext.Provider value={actions}>*/}
                {/*    <TodoInput onAdd={this.onAdd}></TodoInput>*/}
                {/*    <TodoList todos={todos}></TodoList>*/}
                {/*</TodoContext.Provider>*/}
            </div>
        </div>
    )
}



// 用后端的术语, 声明 Todo类 为 public, 供其他文件引用
export default Todo


// 请跳转到 TodoList.js
