import React, { useState } from "react";
import { Route, BrowserRouter as Router } from "react-router-dom";
import Home from "./pages/Home";
import TodoList from "./pages/Todo";
import Login from "./components/Login";
import PrivateRoute from "./PrivateRoute";
import { AuthContext } from "./context/Auth";
import "./App.css";

export default function App(props) {
    const [authToken, setAuthToken] = useState();

    const setToken = data => {
        localStorage.setItem("token", JSON.stringify(data));
        setAuthToken(data);
    };

    return (
        <AuthContext.Provider value={{ authToken, setAuthToken: setToken }}>
            <Router>
                <Route exact path="/" component={Home} />
                <Route path="/login" component={Login} />
                <PrivateRoute path="/todo" component={TodoList} />
            </Router>
        </AuthContext.Provider>
    );
}
