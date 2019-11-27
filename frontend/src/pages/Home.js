import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
    return (
        <div className="container text-center home">
            <h1 className="display-4">Home Page</h1>
            <Link to="/todo" style={linkStyle}>
                Todo
            </Link>
        </div>
    );
}

const linkStyle = {
    border: ".2vh solid #0275d8",
    borderRadius: "10px",
    padding: ".5rem",
    color: "#0275d8",
    textDecoration: "none",
    fontSize: "3.3vh"
};
