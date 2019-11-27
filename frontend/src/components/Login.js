import React, { useState } from "react";
import {
    Button,
    Form,
    FormGroup,
    Label,
    Input,
    Row,
    Col,
    Jumbotron
} from "reactstrap";
import { Redirect } from "react-router-dom";
import { useAuth } from "../context/Auth";
import axios from "axios";

export default function Login(props) {
    const [isLoggedIn, setLoggedIn] = useState(false);
    const [isError, setIsError] = useState(false);
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const { setAuthToken } = useAuth();
    const referer = "/";

    const handleSubmit = e => {
        e.preventDefault();
        axios
            .post("/api-auth-token/", { username: userName, password })
            .then(data => {
                if (data.data.token && data.status === 200) {
                    setAuthToken(data.data.token);
                    setLoggedIn(true);
                } else {
                    setIsError(true);
                }
            })
            .catch(err => {
                setIsError(true);
            });
    };

    if (isLoggedIn) {
        return <Redirect to={referer} />;
    }

    return (
        <Row>
            <Col md="2"></Col>
            <Col md="8" sm="12">
                <Jumbotron>
                    <Form id="login-form" className="container col-md-8">
                        <h3 className="display-3">Login</h3>
                        <FormGroup>
                            <Label>Username</Label>
                            <Input
                                onChange={e => setUserName(e.target.value)}
                                value={userName}
                                name="username"
                                id="username"
                                type="text"
                                required
                                placeholder="Username"
                                className="form-control"
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label>Password</Label>
                            <Input
                                onChange={e => setPassword(e.target.value)}
                                value={password}
                                name="password"
                                id="password"
                                type="password"
                                required
                                placeholder="Password"
                                className="form-control"
                            />
                        </FormGroup>
                        <Button
                            type="submit"
                            onClick={handleSubmit}
                            outline
                            color="primary"
                        >
                            Submit
                        </Button>
                        {isError && <p>An error has occured</p>}
                    </Form>
                </Jumbotron>
            </Col>
            <Col md="2"></Col>
        </Row>
    );
}
