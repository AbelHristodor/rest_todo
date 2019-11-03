import React, { Component } from 'react'
import { Form, FormGroup, Button, Label, Input } from 'reactstrap'

export default class LoginForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username: "",
            password: ""
        }
        
    }

    handleChange = (e) => {
        console.log(e.target.id)
    }
    render() {
        return (
            <div>
                <Form>
                    <FormGroup>
                        <Label for="username">Username</Label>
                        <Input type="text" id="username" onChange={this.handleChange} placeholder="Username"></Input>
                        <Label for="password">Password</Label>
                        <Input type="password" id="password" onChange={this.handleChange} placeholder="Password"></Input>
                    </FormGroup>
                    <Button type="submit" className="btn btn-md" onClick={this.handleSubmit}>Submit</Button>
                </Form>
            </div>
        )
    }
}
