import React, { Component } from 'react'

import './index.css'

import { nanoid } from "nanoid";

export default class Header extends Component {

  HandlerKeyUp = (event) => {
    // 解构赋值获取到 keyCode、target
    const { keyCode, target } = event
    // 判断是否为回车键
    if (keyCode !== 13) return
    // 判断输入是否为空
    if (target.value.trim() === '') {
      alert('输入值不能为空')
      return
    }
    // 生成一个todo对象
    const todoObj = { id: nanoid(), name: target.value, done: false }
    // 将对象传入父类
    this.props.addTodo(todoObj)
    // 清空输入栏
    target.value = ''
  }

  render() {
    return (
      <div className="todo-header">
        <input type="text" onKeyUp={this.HandlerKeyUp} placeholder="请输入你的任务名称，按回车键确认" />
      </div>
    )
  }
}
