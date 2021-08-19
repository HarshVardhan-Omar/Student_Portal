import React from 'react';
import { useHistory} from "react-router";
import { useState } from "react";

export default function Login_func() {
    const history=useHistory();
    const[user_name,setUser_name]=useState("");
    const[password,setPassword]=useState("");

    const handleusernamechange=(e)=>{
         setUser_name(e.target.value);
    }
    const handlepasswordchange=(e)=>{
         setPassword(e.target.value);
    }
    const login=(e)=>{
        e.preventDefault();
        const requestoptions={
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify({
                user_name:user_name,
                password:password
            }),
        };

        fetch("/api/verifystudent",requestoptions).then((Response)=>
        {
            console.log(Response)
            if(Response.ok){
                return Response.json().then((data)=>{
                    history.push({
                        pathname:'/getstudentdetails',
                        state: data
                    })
                })
            }
            else{
                return Response
            }
        })
    
    }

    return (
        <div>
                <h1>Welcome To Student Portal</h1>
                <h2>Login</h2>
                <form>
                <input type="text" onChange={handleusernamechange} placeholder="Username"/>
                <input type="password" name="" id="" onChange={handlepasswordchange} placeholder="Password" />
                <button onClick={login}>Login</button>
                </form>
        </div>
    )
}
