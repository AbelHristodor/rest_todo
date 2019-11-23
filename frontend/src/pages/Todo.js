import React, { useState } from 'react'
import { ListGroup } from 'reactstrap'
import axios from 'axios'
import TodoItem from '../components/TodoItem'
import { useAuth } from '../context/Auth'

export default function TodoList() {
    const [todos, setTodos] = useState([])
    const [isError, setIsError] = useState(false)
    const { authToken } = useAuth()
    
    const getTodos = () => {
        let config = {
            headers: {
                Authorization: 'Token ' + authToken
            }
        }
    
        axios.get('/todo/', config).then((data) => {
            if(data.status === 200) {
                setTodos([...data.data])
            } else {
                setIsError(true)
            }
        }).catch((err) => setIsError(true))
    }

    todos.length === 0 && getTodos()

    return (
        <div>
            <ListGroup>
                {todos.map((todo) => <TodoItem todo={todo} key={todo.id} />)}
                { isError && <p>An error has occured</p>}
            </ListGroup>
        </div>
    )
    
}
