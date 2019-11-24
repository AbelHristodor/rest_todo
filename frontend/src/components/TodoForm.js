import React, { useState } from 'react'
import { Form, FormGroup, Label, Input, Button } from 'reactstrap'
import axios from 'axios'
import { useAuth } from '../context/Auth'

export default function TodoForm(props) {
    const [isError, setIsError] = useState(false)
    const [todo, setTodo] = useState("")
    const { authToken } = useAuth()

    const handleSubmit = (e) => {
        e.preventDefault()

        axios.post('/user/get_by_token/', {userToken: authToken}).then((res) => {
            if(res.data.id){
                let body = {
                    user: res.data.id,
                    name: todo,
                }

                axios.post('/todo/', body, { headers: { Authorization: "Token " + authToken }}).then((data) => {
                    if(data.status === 201) {
                        props.refresh()
                    } else {
                        setIsError(true)
                    }
                }).catch((err) => setIsError(true))
            }
        }).catch((err) => setIsError(true))
    }

    return (
        <Form id="add-todo">
            <FormGroup>
                <Label>Name</Label>
                <Input
                    onChange={(e) => setTodo(e.target.value)}
                    value={todo}
                    name="todo-name"
                    id="todo-name"
                    type="text"
                    required
                    placeholder="Add Todo"
                />
            </FormGroup>
            <Button type="submit" onClick={handleSubmit}>Add</Button>
            { isError && <p>An error has occured</p>}
        </Form>
    )
}
