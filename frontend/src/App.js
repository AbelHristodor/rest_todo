import React, { Component } from 'react'
import './App.css';
import TodoList from './components/TodoList'

export default class App extends Component {
 
  render() {
  
      return (
        <div className="App">
            <TodoList />
        </div>
      )
  }
}
