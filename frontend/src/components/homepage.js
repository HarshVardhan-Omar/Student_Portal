import React, { useEffect,useState } from 'react';
import { useHistory } from "react-router";
import { useLocation } from 'react-router-dom';
import jQuery from './jQuery'
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


export default function Homepage(props) {
    const location=useLocation();
    const history=useHistory();
    // console.log(location.state)

    const logout=(e)=>{
      logoutbysession()
    }

    async function logoutbysession(){
      const requestoptions={
        method:"POST",
        headers:{'Content-Type':'application/json',
                    'X-CSRFToken': csrftoken
                    },
        body:JSON.stringify({
        }),
      };
      props.setProgress(10)      
      let response = await fetch("/api/logoutbysession",requestoptions)
      props.setProgress(50)
      if(response.status == 200){
        props.setProgress(100)
        history.push({
          pathname:'/',
        })
      }
      else{
        history.push({
          pathname:'/',
        })
        props.setProgress(100)
      }
    }

    async function fetchDetailsBySession(){
        const requestoptions={
          method:"POST",
          headers:{'Content-Type':'application/json',
                      'X-CSRFToken': csrftoken
                      },
          body:JSON.stringify({
          }),
        };
        props.setProgress(10)      
        let response = await fetch("/api/sessionverify",requestoptions)
        props.setProgress(50)
        if(response.status == 200){
          props.setProgress(100)
          let data =  await response.json()
          history.push({
            pathname:'/getstudentdetails',
            state: data
          })
        }
        else{
          props.setProgress(100)
        }
    }

    useEffect(async () => {
//       console.log("Confirming Login")
      const requestoptions={
        method:"POST",
        headers:{'Content-Type':'application/json',
                    'X-CSRFToken': csrftoken
                    },
        body:JSON.stringify({
        }),
      };
      let response = await fetch("/api/sessionverify",requestoptions)
      var status = await response.status
      if(status != 200){
        history.push({
          pathname:'/',
        })
      }
    }, []);

    if(location.state){
        document.title="HomePage | " + location.state.username;
        return (
            <div>
                <h1>Welcome to Homepage</h1>
                <h2>The following user just signed in with username- {location.state.username} and
                password -{location.state.password}</h2>
                <button onClick={logout}>LogOut</button>
            </div>
        )
    }
    else{
        useEffect(() => {
            fetchDetailsBySession();
          }, []);
        return (
            <p> You are logged out. <a href="/" >Login</a> </p>
        )
    }
}
