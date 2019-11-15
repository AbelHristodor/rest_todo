import React, { Component } from 'react'
import { ListGroup } from 'reactstrap'
import axios from 'axios'
import Todo from './Todo'

export default class TodoList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            todos: []
        }
        this.getTodos = this.getTodos.bind(this)
    }

    componentDidMount(){
        this.getTodos();
    }

    getTodos = () => {
        let config = {
            headers: {
                Authorization: 'Token ' + this.props.token
            }
        }
        axios.get('/todo/', config).then((data) => {
            this.setState({ todos: data.data })
        }).catch((err) => console.log("Err: " + err))
    }
    

    render() {
        return (
            <ListGroup>
                {this.state.todos.map((todo) => <Todo todo={todo} key={todo.id} />)}
            </ListGroup>
        )
    }
}
