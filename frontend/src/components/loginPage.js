import React from 'react';
import { useHistory } from "react-router";
import { useState,useEffect } from "react";
import './loginPage.css'
import logo from './logo.png'
import hbtu from './hbtu.jpg'
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

export default function LoginPage(props) {
    const history=useHistory();
    const[user_name,setUser_name]=useState("");
    const[password,setPassword]=useState("");
    const[pwdvbt,setPwdvbt]=useState(false);
    const[err,setErr]=useState("");
    
    const togglePasswordVisibility=(e)=>{
      pwdvbt? setPwdvbt(false) : setPwdvbt(true);
    }
    const handleusernamechange=(e)=>{
         setUser_name(e.target.value);
    }
    const handlepasswordchange=(e)=>{
         setPassword(e.target.value);
    }
    
    const login=(e)=>{
        e.preventDefault();
        setErr("");
        fetchDetails();        
    }

    useEffect(() => {
      fetchDetailsBySession();
    }, []);

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

    async function fetchDetails(){
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
      props.setProgress(10)      
      let response = await fetch("/api/verifystudent",requestoptions)
      props.setProgress(50)
      if(response.ok){
        props.setProgress(100)
        let data =  await response.json()
        history.push({
          pathname:'/getstudentdetails',
          state: data
        })
      }
      else if(response.status == 404){
        console.clear()
        props.setProgress(100)
        setErr("Username not found. Try Again.");
      }
      else if(response.status == 401){
        console.clear()
        props.setProgress(100)
        setErr("Password Incorrect. Try Again.");
      }
    }

    var im_style = {
      backgroundImage: "url(" + hbtu + ")"
    }
    var error_style = {
      margin: "0% 5%",
      padding: "1% 5%",
      color: 'rgb(165 14 14)',
      borderRadius: "5px",
      position: "absolute",
      top: "72px",
      display: err!=""?"block":"none",
    }

    document.addEventListener('touchmove', function (event) {
      if (event.scale !== 1) { event.preventDefault(); }
    }, { passive: false });


    document.title="Student Portal";
    return (
        <div className="all" style={im_style}>
        <div className="opacity">
          <div className="title">
            <img className="image" src={logo} alt="" />
            <h4>Welcome to <br />HBTU ERP</h4>
          </div>
          <div className="l-form">
            <div className="mobile-title">
              <img className="mobile-image" src={logo} alt="" />
              <h1>HBTU ERP</h1>
            </div>
            <form onSubmit={login} className="form">
              <h1 className="form__title">Sign In</h1>              
              <div className="form_div">
                <input type="text" onChange={handleusernamechange} className="form__input" placeholder=" " />
                <label className="form__label">Username</label>
              </div>
              <div className="form_div form-pass">
                <input type={(pwdvbt ? "text" : "password")} onChange={handlepasswordchange}  id="password" className="form__input" placeholder=" " />
                <label className="form__label">Password</label>
              </div>
              <i className={"eye fa " + (pwdvbt ? "fa-eye-slash " : "fa-eye ")} onClick={togglePasswordVisibility}/>
              <div className="bottom">
                <button type="button" className="forgot">Forgot Password?</button>
                <button onClick={login} type="submit" className="form__button">Sign In</button>
                <div className="error" style={error_style}>
                  <p>{err+""}</p>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>

    )
}
