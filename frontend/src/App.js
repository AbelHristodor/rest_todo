import React, { Component } from 'react'
import './App.css';
import Login from './components/Login'
import TodoList from './components/TodoList'

export default class App extends Component {
    constructor() {
        super()
        this.state = {
            token: null,
            isLoggedIn: false
        }
    }
    setToken = (token) => {
        this.setState({ token, isLoggedIn: !this.state.isLoggedIn });
    }

  render() {
      return (
        <div className="App">
            { !this.state.isLoggedIn ? (<Login setToken={this.setToken} />) : <h1>Logged In</h1> }
            { this.state.isLoggedIn ? (<TodoList token={this.state.token} />) : null}
        </div>
      )
  }
}
