import React, { useState, useEffect, useCallback } from "react";
import { ListGroup } from "reactstrap";
import axios from "axios";
import TodoItem from "../components/TodoItem";
import TodoForm from "../components/TodoForm";
import { useAuth } from "../context/Auth";

export default function TodoList() {
    const [todos, setTodos] = useState([]);
    const [fetched, setFetched] = useState(false);
    const [isError, setIsError] = useState(false);
    const { authToken } = useAuth();

    const getTodos = useCallback(() => {
        let config = {
            headers: {
                Authorization: "Token " + authToken
            }
        };

        axios
            .get("/todo/", config)
            .then(data => {
                if (data.status === 200) {
                    setTodos([
                        ...data.data.sort((a, b) => {
                            return (
                                Date.parse(b.created_on) -
                                Date.parse(a.created_on)
                            );
                        })
                    ]);
                } else {
                    setIsError(true);
                }
            })
            .catch(err => setIsError(true));
    }, [authToken]);

    const handleRefresh = () => getTodos();

    useEffect(() => {
        if (!fetched) {
            getTodos();
            setFetched(true);
        }
    }, [fetched, setFetched, getTodos]);

    return (
        <div className="container jumbotron bg-white">
            <p className="display-4">Todo Page</p>
            <TodoForm refresh={handleRefresh} />
            <ListGroup className="col-md-6">
                {todos.map(
                    todo =>
                        !todo.is_completed && (
                            <TodoItem
                                todo={todo}
                                key={todo.id}
                                refresh={handleRefresh}
                                className="list-group-item"
                            />
                        )
                )}
                {todos.length !== 0 ? (
                    <hr className="ruler" />
                ) : (
                    <p>No todos available, try adding one.</p>
                )}

                {todos.map(
                    todo =>
                        todo.is_completed && (
                            <TodoItem
                                todo={todo}
                                key={todo.id}
                                refresh={handleRefresh}
                                className="list-group-item completed"
                            />
                        )
                )}

                {isError && (
                    <div class="alert alert-danger" role="alert">
                        An error has occured
                    </div>
                )}
            </ListGroup>
        </div>
    );
}
