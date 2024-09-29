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

  render() {

    const { name, done } = this.props
    const { mouse } = this.state

    return (
      <li style={{ backgroundColor: mouse ? '#e0c3fc' : 'white' }} onMouseEnter={this.handlerMouse(true)} onMouseLeave={this.handlerMouse(false)}>
        <label>
          <input type="checkbox" defaultChecked={done} />
          <span>{name}</span>
        </label>
        <button className="btn btn-danger" style={{ display: mouse ? 'block' : 'none' }}>删除</button>
      </li>
    )
  }
}
