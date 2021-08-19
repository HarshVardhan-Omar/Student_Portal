import React from 'react';
import { useLocation } from 'react-router-dom';
import { useState } from 'react';

export default function homepage() {
    const location=useLocation();
    const[user_name,setUser_Name]=useState("")
    const[password,setPassword]=useState("")
    const getstudentdetails=()=>{
        fetch("/api/getstudentinfo" + "?user_name=" + location.state.user_name)
        .then((response)=>{
            return  response.json()
        }).then((data)=>{
            setUser_Name(data.username)
            setPassword(data.password)

        }).catch((err)=>{
            console.log(err)
        })
    }
    getstudentdetails();
    return (
        <div>
            <h1>Welcome to Homepage</h1>
            <h2>The following user just signed in with username- {user_name} and
             password -{password}</h2>
        </div>
    )
}


