import React from 'react';
import { useLocation } from 'react-router-dom';

export default function homepage() {
    const location=useLocation();
    document.title="HomePage | " +location.state.username;
    console.log(location.state)


    
    return (
        <div>
            <h1>Welcome to Homepage</h1>
            <h2>The following user just signed in with username- {location.state.username} and
             password -{location.state.password}</h2>
        </div>
    )
}
