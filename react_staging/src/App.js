import { Component } from 'react'
import Header from './components/Header'
import List from './components/List'
import Footer from './components/Footer'

import './App.css'

export default class App extends Component {

    state = {
        todos: [
            { id: '001', name: '唱', done: true },
            { id: '002', name: '跳', done: true },
            { id: '003', name: 'Rap', done: false }
        ]
    }

    // 用于添加一个todo对象
    addTodo = (todoObj) => {
        console.log('todoObk ------> ', todoObj);

        const { todos } = this.state
        const newTodos = [todoObj, ...todos]
        this.setState({
            todos: newTodos
        })
    }

    // 用于更新一个todo对象
    updatedTodo = (id, done) => {
        // 解构获取数据
        const { todos } = this.state
        // 处理数据
        const newTodos = todos.map(todoObj => {
            if (todoObj.id === id) {
                return { ...todoObj, done }
            } else {
                return todoObj
            }
        })
        // 更新状态数据
        this.setState({
            todos: newTodos
        })
    }

    // 用于删除一个todo对象
    deleteTodo = (id) => {
        const { todos } = this.state
        const newTodos = todos.filter(todoObj => {
            return todoObj.id !== id

        })
        // 更新状态数据
        this.setState({
            todos: newTodos
        })
    }

    render() {
        const { todos } = this.state
        return (
            <div className="todo-container">
                <div className="todo-wrap">
                    <Header addTodo={this.addTodo} />
                    <List todos={todos} updatedTodo={this.updatedTodo} deleteTodo={this.deleteTodo} />
                    <Footer />
                </div>
            </div>
        )
    }

}