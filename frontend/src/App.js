import React, { Component } from 'react'
import './App.css';
import Todopage from './components/pages/Todo/Todopage'
import Mynavbar from './components/Mynavbar'
import Login from './components/pages/Auth/Login'

export default class App extends Component {
 
  render() {
  
      return (
        <div className="App">
            <Mynavbar />
            <Login />
            <Todopage />
        </div>
      )
  }
}
