// import {Component} from 'react'
import React, { Component }  from 'react'


// antd 组件的引入
import {Row, Col, Button, Input} from 'antd'

// icon 的引入
import {PlusCircleFilled} from '@ant-design/icons'

class TodoInput extends Component {
    constructor(props) {
        super(props)
        this.state = {
            text: ''
        }
    }

    onAdd = () => {
        let text = this.state.text
        let add = this.props.onAdd
        if (text) {
            add(text)
            this.setState({
                text: ''
            })
        }
        this.refs.todoInput.focus()
    }

    onChange = (e) => {
        this.setState({
            text: e.target.value
        })
    }

    render() {
        return (
            <div className={'TodoInput'}>
                <Row>
                    <Col flex="auto">
                        <Input placeholder="TODO" value={this.state.text} onChange={this.onChange} ref="todoInput"/>
                    </Col>
                    <Col flex="150px">
                        <Button type="primary" className={'addButton'} onClick={this.onAdd}>
                            <PlusCircleFilled/>
                            add
                        </Button>
                    </Col>
                </Row>
            </div>
        )
    }
}

export default TodoInput
