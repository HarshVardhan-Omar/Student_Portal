import React from 'react';
import { useLocation } from 'react-router-dom';

export default function homepage() {
    const location=useLocation();
    return (
        <div>
            <h1>Welcome to Homepage</h1>
            <h2>The following user just signed in: {location.state.username}</h2>
            <h2>Your Pass: {location.state.password}</h2>
        </div>
    )
}


