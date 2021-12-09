import React, { useEffect, useRef } from 'react';
import { useState } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import "./changepassword.css"
import { AiOutlineLock } from "react-icons/ai";
const useDidMountEffect = (func, deps) => {
    const didMount = useRef(false);

    useEffect(() => {
        if (didMount.current) func();
        else didMount.current = true;
    }, deps);
}
var SHA512 = require("crypto-js/sha512");

export default function ChangePassword(props) {
  document.title="Change Password"
  const[oldp,setOldp]=useState("");
  const[newp,setNewp]=useState("");
  const[new_re_p,setNew_re_p]=useState("");
  const[new_p_validity,setNew_p_validity]=useState();
  const[new_re_p_validity,setNew_re_p_validity]=useState();
  const[form_validity,setForm_validity]=useState(false);
  const [change_password_alert, setChange_password_alert] = useState("")
  useDidMountEffect(() => {
    check_new_p_validity();
    check_new_re_p_validity();
    check_form_validity();
    // console.log("checking")
  }, [oldp,newp,new_re_p,new_p_validity,new_re_p_validity]);

  const handle_old_p=async(e)=>{
    setOldp(await e.target.value)
  }
  const handle_new_p=async(e)=>{
    setNewp(await e.target.value)
  }
  const handle_re_new_p=async(e)=>{
    setNew_re_p(await e.target.value)
  }
  
  function check_new_p_validity(){
    var range = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/
    if(newp.match(range)){
      setNew_p_validity(true)
    }
    else{
      setNew_p_validity(false)
    }
  }

  function check_new_re_p_validity(){
    if (new_re_p.toString()===newp.toString()){
      setNew_re_p_validity(true)
    }
    else{
      setNew_re_p_validity(false)
    }
  }

  function check_form_validity(){
    if((oldp!="")&&new_p_validity&&new_re_p_validity){
      setForm_validity(true)
    }
    else{
      setForm_validity(false)
    }
  }

  const handlePasswordChange=(e)=>{
    e.preventDefault()
    changePassword();
    setChange_password_alert("");
  }

  async function changePassword(){
    const requestoptions={
      method:"POST",
      headers:{'Content-Type':'application/json',
                  'X-CSRFToken': props.csrftoken
                  },
      body:JSON.stringify({
          user_name:props.data.username,
          password:oldp,
          encryptedpassword:SHA512(oldp).toString(),
          newencryptedpassword:SHA512(newp).toString()
      }),
    };
    props.setProgress(10)      
    let response = await fetch("/api/changepassword",requestoptions)
    props.setProgress(50)
    if(response.ok){
      props.setProgress(100)
      setChange_password_alert("Success!! Your password is changed.")
      if(document.getElementById("changePasswordForm")){
        document.getElementById("changePasswordForm").reset();
      }
      setOldp("")
      setNewp("")
      setNew_re_p("")
    }
    else if(response.status == 401){
      console.clear()
      props.setProgress(100)
      setChange_password_alert("Wrong Password. Try again with correct password.")
    }
  }

  const password_change_alert_style={
    color: change_password_alert!="Success!! Your password is changed."?"#800202":"darkgreen",
    backgroundColor: change_password_alert!="Success!! Your password is changed."?"pink":"lightgreen",
    border: change_password_alert!="Success!! Your password is changed."?"1px solid red":"1px solid darkgreen",
    display: change_password_alert!=""?"block":"none",
    position: "absolute",
    userSelect: "none",
    top: "12.5vh",
    width: "90vw",
    height: "max-content",
    zIndex: "1",
    borderRadius: "4px",
    textAlign: "center"

  }

  return (
    <div className="password-body">
      <p style={password_change_alert_style} className="password_change_alert">{change_password_alert}</p>
      <Form id="changePasswordForm" onSubmit={handlePasswordChange}>
        <AiOutlineLock className="illustration" />
        <Form.Group className="old mystyle">
          <Form.Label>Old Password</Form.Label>
          <Form.Control onChange={handle_old_p} type="password" />
        </Form.Group>
        <Form.Group className="old mystyle relative_form_group" style={{borderBottomColor: new_p_validity!=undefined?new_p_validity==true?"green":"red":"var(--textcolor)"}}>
          <Form.Label>New Password</Form.Label><img className="info_icon" src="https://icon-icons.com/downloadimage.php?id=28513&root=259/ICO/128/&file=ic_info_outline_128_28513.ico"></img><p className="pwd_info_content" >The password must be 8-15 characters long and it must contain atleast one lowercase letter (a-z), one uppercase letter (A-Z), one numeric digit (0-9), and one special character (@#$%^&,).</p>
          <Form.Control onChange={handle_new_p} type="text" />
        </Form.Group>
        <Form.Group className="old mystyle" style={{borderBottomColor: new_re_p_validity!=undefined?new_re_p_validity==true?"green":"red":"var(--textcolor)"}}>
          <Form.Label>Re-enter New Password</Form.Label>
          <Form.Control onChange={handle_re_new_p} type="password" />
        </Form.Group>
        <Button variant="secondary" onClick={handlePasswordChange} type="submit" disabled={!form_validity}>
          Reset Password
        </Button>
      </Form>
    </div>
  )
}

