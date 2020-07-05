import {Component} from 'react'
import {Button, Input, Row, Col} from 'antd'
import {TodoContext} from "./TodoContext"


class TodoItem extends Component {
    // 请观看完这个文件注释后, 跳转到 index.js

    // 注意! 下面是引用 react 版全局变量的套路
    // 指定 contentType(规定叫这个) 为 TodoContext
    // 组件的内部函数可以通过 this.context.xxx 获取全局变量的属性值
    static contextType = TodoContext

    constructor(props) {
        super(props)
        let {name, id, done} = this.props.todo
        this.state = {
            editing: false,
            text: name,
            todo: {
                id,
                name,
                done,
            }
        }
    }

    onDelete = () => {
        let todo = this.state.todo
        // 注意!
        // this.context.onDelete 是指 Todo.js 第 68 行的属性 onDelete
        this.context.onDelete(todo.id)
    }

    onFinish = () => {
        let todo = this.state.todo
        todo.done = !todo.done
        this.setState({
            todo: todo
        })
    }

    onEdit = () => {
        this.setState({
            editing: true,
        })
    }

    onChange = (e) => {
        this.setState({
            text: e.target.value,
        })
    }

    onUpdate = () => {
        let todo = this.state.todo
        todo.name = this.state.text
        this.setState({
            editing: false,
            todo: todo,
        })
    }

    onCancel = () => {
        let todo = this.state.todo
        this.setState({
            editing: false
        })
    }

    render() {
        let {name, done} = this.state.todo
        let todo = null
        if (this.state.editing) {
            todo = (
                <Row>
                    <Col flex="auto">
                        <Input value={this.state.text} onChange={this.onChange}/>
                    </Col>
                    <Button className="featureButton" onClick={this.onUpdate}>update</Button>
                    <Button className="featureButton" onClick={this.onCancel}>cancel</Button>
                </Row>
            )
        } else {
            let text = done ? 'redone' : 'finish'
            todo = (
                <Row className="TodoItem">
                    <Col flex="auto">
                        <Button type="link" disabled={done} onClick={this.onEdit}>{name}</Button>
                    </Col>
                    <Col flex="150px">
                        <Button className="featureButton" onClick={this.onFinish}>{text}</Button>
                        <Button className="featureButton" onClick={this.onDelete}>delete</Button>
                    </Col>

                </Row>
            )
        }
        return todo
    }
}

export default TodoItem
