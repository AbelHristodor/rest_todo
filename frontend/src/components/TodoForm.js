import React, { useState } from "react";
import { Form, FormGroup, Input, Button, Col } from "reactstrap";
import axios from "axios";
import { useAuth } from "../context/Auth";

export default function TodoForm(props) {
    const [isError, setIsError] = useState(false);
    const [todo, setTodo] = useState("");
    const { authToken } = useAuth();

    const handleSubmit = e => {
        e.preventDefault();

        axios
            .post("/user/get_by_token/", { userToken: authToken })
            .then(res => {
                if (res.data.id) {
                    let body = {
                        user: res.data.id,
                        name: todo
                    };

                    axios
                        .post("/todo/", body, {
                            headers: { Authorization: "Token " + authToken }
                        })
                        .then(data => {
                            if (data.status === 201) {
                                props.refresh();
                                setTodo("");
                            } else {
                                setIsError(true);
                            }
                        })
                        .catch(err => setIsError(true));
                }
            })
            .catch(err => setIsError(true));
    };

    return (
        <Form id="add-todo" className="container row my-2">
            <Col md="6">
                <FormGroup>
                    <Input
                        onChange={e => setTodo(e.target.value)}
                        value={todo}
                        name="todo-name"
                        id="todo-name"
                        type="text"
                        required
                        placeholder="Add Todo"
                    />
                </FormGroup>
            </Col>
            <Col md="2">
                <Button
                    type="submit"
                    onClick={handleSubmit}
                    outline
                    color="primary"
                >
                    Add
                </Button>
                {isError && <p>An error has occured</p>}
            </Col>
        </Form>
    );
}
