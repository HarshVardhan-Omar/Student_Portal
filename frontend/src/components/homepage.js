import React from 'react';
import { useLocation } from 'react-router-dom';

export default function homepage() {
    const location=useLocation();

    
    return (
        <div>
            <h1>Welcome to Homepage</h1>
            <h2>The following user just signed in with username- {location.state.data.username} and
             password -{location.state.data.password}</h2>
        </div>
    )
}
