import React from 'react'
import { useAuth } from '../context/Auth'
import { Link } from 'react-router-dom'

export default function Home() {
    const { authToken } = useAuth();
    return (
        <div>
            <h1>Home Page</h1>
            <Link to="/todo">Todo</Link>
        </div>
    )
}
