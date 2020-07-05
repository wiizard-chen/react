import WzModel from "./model"

class TodoModel extends WzModel {
    constructor(id, name) {
        super()
        this.id = id
        this.name = name
        this.done = false
    }

    static getDefault() {
        let todolist = [
            'fix bug',
            'review code',
        ]
        let result = todolist.map((item, index) => {
            return TodoModel.new(index + 1, item)
        })
        return result
    }
}

export default TodoModel
