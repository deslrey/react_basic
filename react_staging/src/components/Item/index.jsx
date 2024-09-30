import React, { Component } from 'react'

import './index.css'

export default class Item extends Component {


  state = {
    mouse: false
  }

  handlerMouse = (flag) => {
    return () => {
      this.setState({ mouse: flag })
    }
  }

  // 勾选、取消勾选框
  handlerCheck = (id) => {
    return (event) => {
      this.props.updatedTodo(id, event.target.checked)
    }
  }

  // 响应删除按钮的事件
  handlerDelete = (id) => {
    if (window.confirm('你确定要删除吗?')) {
      this.props.deleteTodo(id)
    }
  }

  render() {

    const { id, name, done } = this.props
    const { mouse } = this.state

    return (
      <li style={{ backgroundColor: mouse ? '#e0c3fc' : 'white' }} onMouseEnter={this.handlerMouse(true)} onMouseLeave={this.handlerMouse(false)}>
        <label>
          <input type="checkbox" defaultChecked={done} onChange={this.handlerCheck(id)} />
          <span>{name}</span>
        </label>
        <button onClick={() => this.handlerDelete(id)} className="btn btn-danger" style={{ display: mouse ? 'block' : 'none' }}>删除</button>
      </li>
    )
  }
}
