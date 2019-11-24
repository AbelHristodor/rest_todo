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
                setTodos([...data.data.sort(
                    (a, b) => {
                        return Date.parse(a.created_on) - Date.parse(b.created_on)
                    }
                )])
            } else {
                setIsError(true)
            }
        }).catch((err) => setIsError(true))
    }

    const handleRefresh = () => {
        getTodos()
    }

    todos.length === 0 && getTodos()

    return (
        <div>
            <ListGroup>
                <p className="lead">Todos:</p>
                {todos.map((todo) => ( !todo.is_completed && <TodoItem todo={todo} key={todo.id} refresh={handleRefresh} />) )}

                <p className="lead">Completed:</p>
                {todos.map((todo) => ( todo.is_completed && <TodoItem todo={todo} key={todo.id} refresh={handleRefresh} />) )}
                
                { isError && <p>An error has occured</p>}
            </ListGroup>
        </div>
    )
    
}
