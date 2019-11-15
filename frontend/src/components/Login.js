import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap'
import axios from 'axios'

export default class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username: "",
            password: "",
        }
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const { username, password } = this.state
        axios.post('/api-auth-token/', { username, password }).then((data) => {
            if(data.data.token) this.props.setToken(data.data.token)
        }).catch((err) => console.log("Err: "+ err))
    }

    render() {
        return (
            <Form>
                <h3 className="display-3">Login</h3>
                <FormGroup>
                    <Label>Username</Label>
                    <Input 
                        onChange={(e) => this.setState({ username: e.target.value})}
                        name="username"
                        id="username"
                        type="text"
                        required
                        placeholder="Username"
                    />
                </FormGroup>
                <FormGroup>
                    <Label>Password</Label>
                    <Input 
                        onChange={(e) => this.setState({ password: e.target.value})}
                        name="password"
                        id="password"
                        type="password"
                        required
                        placeholder="Password"
                    />
                </FormGroup>
                <Button type="submit" onClick={this.handleSubmit}>Submit</Button>
            </Form>
        )
    }
}
