import React, { Component } from 'react'

import './index.css'

export default class Footer extends Component {

  // 处理全选事件
  todoCheckedAll = (event) => {
    this.props.todoCheckedAll(event.target.checked)
  }

  // 处理删除已完成的todo
  deleteCheckedAll = () => {
    this.props.deleteCheckedAll()
  }

  render() {

    const { todos } = this.props

    const doneCount = todos.reduce((pre, todo) => pre + (todo.done ? 1 : 0), 0)

    const total = todos.length

    return (
      <div className="todo-footer">
        <label>
          <input type="checkbox" onChange={this.todoCheckedAll} checked={(doneCount === total && total !== 0) ? true : false} />
        </label>
        <span>
          <span>已完成{doneCount}</span> / 全部{total}
        </span>
        <button onClick={this.deleteCheckedAll} className="btn btn-danger">清除已完成任务</button>
      </div>
    )
  }
}
