// react 套路, 组件需要继承 Component
import React, { Component, useState, useEffect, useCallback }  from 'react'
//
// // import {Component} from 'react'
//
// // 引用 TodoInput, TodoList 组件
// import TodoInput from "./TodoInput"
// import TodoList from "./TodoList"

// 普通的 Model 类
import TodoModel from "../model/todo"

const log = console.log.bind(console)

const Todo = () => {

    // useEffect 将 componentDidMount, componentWillUnmount, componentDidUpdate 合并起来
    // useEffect 是链路调用, 与顺序有关, 傻逼设计
    // useEffect 可以多次定义, 当前 useEffect 会调用上一个 useEffect 返回函数
    // u1 -> u2 -> u3 -> u4
    // 执行链
    // useEffect 分成两部分
    // content 与 result
    // 首先 didMount 执行, 只会执行 content
    // 然后 didUpdate 执行, 先执行 result 然后再执行 content

    // useEffect 就是监控相应的属性, 相当于 vue 中的 watch
    // 没有第二个参数的 useEffect 是每次都会调用的, 相当于没有条件的componentDidUpdate


    // effect 0 只会执行一次
    useEffect(() => {
        log('fucking begin')
    }, [])

    useEffect(() => {
        log('fucking every time')
    })

    const [todos, setTodos] = useState(TodoModel.getDefault)
    // effect 1
    useEffect(() => {
        log('fuck 11')
        log('fucking todos', todos)

        return () => {
            log('fuck 1')
        }
    }, [todos])

    const [count, setCount] = useState(0)
    // effect 2
    useEffect(() => {
        log('fuck 22')
        log('fucking count', count)
        return () => {
            log('fuck 2')
        }
    }, [count])


    const [myInfo, setMyInfo] = useState({name: 'wiizard'})

    useEffect(() => {
        log('fuck 33')
        log('fucking info', myInfo)
        return () => {
            log('fuck 3')
        }
    }, [myInfo])



    // methods
    const fuckClick = (e) => {
        const nCount = count + 1
        const nTodos = [...todos, 'fuck']

        setCount(nCount)
        setTodos(nTodos)

        myInfo.name += ' fuck'
        // 这样是监控不了属性变化的
        // setMyInfo(myInfo)

        // 这样才能触发 useEffect, 废物东西
        const nInfo = Object.assign({}, myInfo)
        setMyInfo(nInfo)
    }


    return (
        <div className={'Container'}>
            <div className={'Header'}>TODO</div>
            <div className={'MainContent'}>
                <button onClick={fuckClick}>{myInfo.name}</button>
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
