import React, { Component } from 'react'
import { ListGroupItem, Button, Input, Label, Row } from 'reactstrap';

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
            <Row>
                <ListGroupItem>
                    <Label className="lead mx-2">{this.props.todo.name}</Label>
                    <Input style={checkbox} type="checkbox" checked={this.props.todo.is_completed} onChange={this.toggleCheck}></Input>
                    <Button style={button} className="btn btn-sm" onClick={this.toggleDelete}>Delete</Button>
                </ListGroupItem>
            </Row>
        )
    }
}

const checkbox = {
    "marginLeft": "1em",
    "marginTop" : "12px"
}

const button = {
    "marginLeft": "5vh"
}
