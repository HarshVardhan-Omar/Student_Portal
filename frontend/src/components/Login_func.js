import React from 'react';
import { useHistory} from "react-router";
import { useState } from "react";
function getCookie(name) {
    var cookieValue = null;
    if (document.cookie && document.cookie !== '') {
        var cookies = document.cookie.split(';');
        for (var i = 0; i < cookies.length; i++) {
            var cookie = jQuery.trim(cookies[i]);
            if (cookie.substring(0, name.length + 1) === (name + '=')) {
                cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                break;
            }
        }
    }
    return cookieValue;
}
var csrftoken = getCookie('csrftoken');

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
            headers:{'Content-Type':'application/json',
                    'X-CSRFToken': csrftoken
                    },
            body:JSON.stringify({
                user_name:user_name,
                password:password
            }),
        };

        fetch("/api/verifystudent",requestoptions).then((Response)=>
        {
            console.log(Response)
            if(Response.ok){
                verified=1
                return Response.json();
            }
            }
        ).then((data)=>{
            if(verified){
            history.push({
                pathname:'/getstudentdetails',
                state: data
            })
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
