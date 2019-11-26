import React, { useState } from "react";
import { ListGroupItem } from "reactstrap";
import { FaCheckCircle, FaTrashAlt } from "react-icons/fa";
import { useAuth } from "../context/Auth";
import axios from "axios";

export default function TodoItem(props) {
    const [isError, setIsError] = useState(false);
    const { authToken } = useAuth();

    const handleClick = e => {
        let headers = {
            Authorization: "Token " + authToken
        };

        let url = props.todo.is_completed
            ? `/todo/${props.todo.id}/`
            : `/todo/${props.todo.id}/trigger_complete/`;
        let method = props.todo.is_completed ? "delete" : "get";

        axios({ method, url, headers })
            .then(data => {
                data.data.success && props.refresh();
            })
            .catch(err => setIsError(true));
    };

    return (
        <ListGroupItem>
            <p>{props.todo.name}</p>
            {props.todo.is_completed ? (
                <button type="button" onClick={handleClick}>
                    {" "}
                    <FaTrashAlt />{" "}
                </button>
            ) : (
                <button type="button" onClick={handleClick}>
                    <FaCheckCircle />
                </button>
            )}
            {isError && <p>An error has occured</p>}
        </ListGroupItem>
    );
}
