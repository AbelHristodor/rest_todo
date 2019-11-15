import React, { Component } from 'react'
import { ListGroupItem } from 'reactstrap'
import { FaCheckCircle } from 'react-icons/fa'

export default class Todo extends Component {

    render() {
        return (
            <ListGroupItem>
                <p>{ this.props.todo.name }</p>
                <a>{ <FaCheckCircle/> }</a>
            </ListGroupItem>
        )
    }
}
