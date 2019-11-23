import React, { Component } from 'react'
import { ListGroupItem } from 'reactstrap'
import { FaCheckCircle } from 'react-icons/fa'

export default class TodoItem extends Component {

    render() {
        return (
            <ListGroupItem>
                <p>{ this.props.todo.name }</p>
                <button>{ <FaCheckCircle/> }</button>
            </ListGroupItem>
        )
    }
}
