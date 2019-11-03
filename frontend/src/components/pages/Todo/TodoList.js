import React, { Component } from 'react'
import axios from 'axios'
import Todo from './Todo'
import { ListGroup } from 'reactstrap'


export default class TodoList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            todos: []
        }
        this.toggleCheck = this.toggleCheck.bind(this)
    }

    componentDidMount = () => {
        this.refreshTodos();
    }

    refreshTodos = () => {
        axios.get("/todo/").then((data) => this.setState({todos: data.data})).catch((err) => console.log(err))
    }

    toggleCheck = (id) => {
        let token = null
        let config = {
            headers: {
                'AUTHORIZATION': 'TOKEN ' + token
            }
        }
        let url = '/todo/' + id + '/trigger_complete/';
        axios.get(url).then((data) => {
            if (data.data.success){
                this.refreshTodos();
            }
        }).catch((err) => console.log(err))
    }

    toggleDelete = (id) => {
        let url = '/todo/' + id 
        axios.delete(url).then((data) => {
            if(data.data.success){
                this.refreshTodos();
            }
        }).catch((err) => console.log(err))
    }

    render() {
        return (
            <ListGroup>
                {
                    this.state.todos.map((todo) => {
                    return <Todo todo={todo} toggleCheck={this.toggleCheck} toggleDelete={this.toggleDelete} key={todo.id}/>
                    })
                }
            </ListGroup>
        )
    }
}
