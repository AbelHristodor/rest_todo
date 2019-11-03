import React, { Component } from 'react'

export default class Todo extends Component {
    constructor(props) {
        super(props)
        this.toggleCheck = this.toggleCheck.bind(this)
        this.toggleDelete = this.toggleDelete.bind(this)
    }

    toggleCheck() {
        this.props.toggleCheck(this.props.todo.id)
    }

    toggleDelete() {
        this.props.toggleDelete(this.props.todo.id)
    }

    render() {
        return (
            <div>
                <p>{this.props.todo.name}</p>
                <input type="checkbox" checked={this.props.todo.is_completed} onChange={this.toggleCheck}></input>
                <button onClick={this.toggleDelete}>Delete</button>
            </div>
        )
    }
}
