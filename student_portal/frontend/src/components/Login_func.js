import React from 'react';
import { useHistory} from "react-router";
import { useState } from "react";

export default function Login_func() {
    const history=useHistory();
    const[user_name,setUser_name]=useState("");
    const[password,setPassword]=useState(0);

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
        fetch("/api/verifystudent",requestoptions).then((response)=>
            {
                // history.push({
                //     pathname:'/getstudentdetails',
                //     state:{user_name:user_name}
                // });
                response.json()
            
            }).then((data)=> console.log(data))
    }
    return (
        <div>
                <form>
                <input type="text" onChange={handleusernamechange}/>Username
                <input type="password" name="" id="" onChange={handlepasswordchange}/>password
                <button onClick={login}>Login</button>
                </form>
        </div>
    )
}
