import React, { Component } from 'react'
import { Button, Form, FormGroup, Input, Label } from 'reactstrap'
import axios from 'axios'

export default class Addtodo extends Component {
    constructor(props) {
        super(props)
        this.state = {
            value: ""
        }
    }
    handleChange = (e) => {
        this.setState({ value: e.target.value })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const data = {
            name: this.state.value,
            is_completed: false,
            is_active: true
        }
        if(this.state.value.length !== 0) {
            axios.post('/todo/', data).then((data) => {
                console.log(data)
            }).catch((err) => console.log(err))
        }
    }

    render() {
        return (
            <Form>
                <FormGroup>
                    <Label for="todoInput">Add Todo</Label>
                    <Input type="text" id="todoInput" placeholder="New Todo" onChange={this.handleChange}></Input>
                </FormGroup>
                <Button type="Submit" onClick={this.handleSubmit}>Submit</Button>
            </Form>
        )
    }
}
