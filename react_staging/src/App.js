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

    addTodo = (todoObj) => {
        console.log('todoObk ------> ', todoObj);

        const { todos } = this.state
        const newTodos = [todoObj, ...todos]
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
                    <List todos={todos} />
                    <Footer />
                </div>
            </div>
        )
    }
}