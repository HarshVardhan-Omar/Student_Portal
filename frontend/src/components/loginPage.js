import React from 'react';
import { useHistory } from "react-router";
import { useState,useEffect,useRef } from "react";
import './loginPage.css'
import logo from './logo.png'
import hbtu from './hbtu.jpg'
import jQuery from './jQuery'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import OtpInput from 'react-otp-input';
var SHA512 = require("crypto-js/sha512");
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
        if(user_name === ""){
          alert("Please Enter Your Username.")
          return false
        }
        if(password === ""){
          alert("Please Enter Your Password.")
          return false
        }
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
          pathname:'/dashboard/',
        })
        props.setData(data)
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
            password:password,
            encryptedpassword:SHA512(password).toString()
        }),
      };
      props.setProgress(10)      
      let response = await fetch("/api/verifystudent",requestoptions)
      props.setProgress(50)
      if(response.ok){
        props.setProgress(100)
        let data =  await response.json()
        history.push({
          pathname:'/dashboard/',
        })
        props.setData(data)
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
      width: "90%",
      textAlign: "center",
      display: err!=""?"block":"none",
    }

    // document.addEventListener('touchmove', function (event) {
    //   if (event.scale !== 1) { event.preventDefault(); }
    // }, { passive: false });


    
    const useDidMountEffect = (func, deps) => {
        const didMount = useRef(false);
    
        useEffect(() => {
            if (didMount.current) func();
            else didMount.current = true;
        }, deps);
    }
      
      const[resetWindowVisibility,setResetWindowVisibility]=useState(false);
      const[rstPwdUsernameWindowVisibility,setRstPwdUsernameWindowVisibility]=useState(false);
      const[rstPwdUsername,setRstPwdUsername]=useState("");
      const[rstPwdotpWindowVisibility,setRstPwdotpWindowVisibility]=useState(false);
      const[rstPwdotp,setRstPwdotp]=useState("");
      const[newpWindowVisibility,setNewpWindowVisibility]=useState(false);
      const[newp,setNewp]=useState("");
      const[new_re_p,setNew_re_p]=useState("");
      const[new_p_validity,setNew_p_validity]=useState();
      const[new_re_p_validity,setNew_re_p_validity]=useState();
      const[rstpwssuccess,setRstpwssuccess]=useState(false);
      const[form_validity,setForm_validity]=useState(false);
      const[reset_password_alert, setReset_password_alert] = useState("")
      useDidMountEffect(() => {
        check_new_p_validity();
        check_new_re_p_validity();
        check_form_validity();
        // console.log("checking")
      }, [newp,new_re_p,new_p_validity,new_re_p_validity]);
    
      const ResetWindowVisibility=(e)=>{
        setResetWindowVisibility(true);
        setRstPwdUsernameWindowVisibility(true);
        setRstPwdotpWindowVisibility(false);
        setNewpWindowVisibility(false);
        setRstpwssuccess(false)
      }
      const ResetWindowHide=(e)=>{
        setResetWindowVisibility(false);
      }
      const rstpwdusernamehandler=(e)=>{
        setRstPwdUsername(e.target.value);
      }
      const rstpwdotphandler=(e)=>{
        setRstPwdotp(e)
        if(e.length==6){
          verifyotp(e)
        }
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
        if(new_p_validity&&new_re_p_validity){
          setForm_validity(true)
        }
        else{
          setForm_validity(false)
        }
      }
    



      const sendmail=(e)=>{
        e.preventDefault();
        setReset_password_alert("")
        if(rstPwdUsername === ""){
          alert("Please Enter Your Username.")
          return false
        }
        callmailapi()
      }
  
      async function callmailapi(){
        const requestoptions={
          method:"POST",
          headers:{'Content-Type':'application/json',
                      'X-CSRFToken': csrftoken
                      },
          body:JSON.stringify({
            user_name: rstPwdUsername
          }),
        };
        props.setProgress(10)      
        let response = await fetch("/api/resetpasswordsendmail", requestoptions)
        props.setProgress(50)
        if(response.ok){
          props.setProgress(100)
          setReset_password_alert("Mail Sent!!");
          setRstPwdUsernameWindowVisibility(false)
          setRstPwdotpWindowVisibility(true)
          if(document.querySelector(".otpinput").querySelector("input")){
            document.querySelector(".otpinput").querySelector("input").focus()
          }
          setNewpWindowVisibility(false)
        }
        else if(response.status == 404 || response.status == 400){
          console.clear()
          props.setProgress(100)
          setReset_password_alert("Mail Not Sent");
        }
        else if(response.status == 401){
          console.clear()
          props.setProgress(100)
          setReset_password_alert("Username Not Found");
        }
      }

      const verifyotp=(e)=>{
        setReset_password_alert("")
        callotpapi(e)
      }
  
      async function callotpapi(otp){
        const requestoptions={
          method:"POST",
          headers:{'Content-Type':'application/json',
                      'X-CSRFToken': csrftoken
                      },
          body:JSON.stringify({
            user_name: rstPwdUsername,
            OTP: otp
          }),
        };
        props.setProgress(10)      
        let response = await fetch("/api/resetpasswordotpverification", requestoptions)
        props.setProgress(50)
        if(response.ok){
          props.setProgress(100)
          setReset_password_alert("OTP Verified!!");
          setRstPwdUsernameWindowVisibility(false)
          setRstPwdotpWindowVisibility(false)
          setNewpWindowVisibility(true)
          setRstPwdotp("")
        }
        else if(response.status == 404 || response.status == 401 || response.status == 400){
          console.clear()
          setRstPwdotp("")
          props.setProgress(100)
          if(document.querySelector(".otpinput").querySelector("input")){
            document.querySelector(".otpinput").querySelector("input").focus()
          }
          setReset_password_alert("OTP Incorrect");
        }
      }

      const handlePasswordChange=(e)=>{
        e.preventDefault()
        resetPassword();
        setReset_password_alert("");
      }

      
    
      async function resetPassword(){
        const requestoptions={
          method:"POST",
          headers:{'Content-Type':'application/json',
                      'X-CSRFToken': csrftoken
                      },
          body:JSON.stringify({
              user_name:rstPwdUsername,
              newencryptedpassword:SHA512(newp).toString()
          }),
        };
        props.setProgress(10)      
        let response = await fetch("/api/resetpasswordchange",requestoptions)
        props.setProgress(50)
        if(response.ok){
          props.setProgress(100)
          if(document.getElementById("changePasswordForm")){
            document.getElementById("changePasswordForm").reset();
          }
          setNewp("")
          setNew_re_p("")
          setNewpWindowVisibility(false)
          setRstPwdUsernameWindowVisibility(false)
          setRstPwdotpWindowVisibility(false)
          setRstpwssuccess(true)
          setTimeout(function(){ setRstpwssuccess(false) }, 5000);
          setResetWindowVisibility(false)
        }
        else if(response.status == 401 || response.status ==  404 || response.status ==  400){
          console.clear()
          props.setProgress(100)
          setReset_password_alert("Could not change Password. Try again.")
        }
      }
    




















    document.title="Student Portal | HBTU";
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
                <button type="button" className="forgot" onClick={ResetWindowVisibility}>Forgot Password?</button>
                <button onClick={login} type="submit" className="form__button">Sign In</button>
                <div className="error" style={error_style}>
                  <p>{err+""}</p>
                </div>
              </div>
            </form>
          </div>
        </div>




        <div className="resetpwdbg" style={{ position: "absolute", display: resetWindowVisibility?"flex":"none", alignItems: "center" , justifyContent: "center" ,zIndex: "1", backgroundColor: "#00000063", height: "100vh", width: "100%", top: "0px"}}>
          <div className="resetpwdwindow" style={{position: "relative" , color:"black", height: "55vh", width: "50vw", minWidth:"320px", borderRadius: "20px", background: "linear-gradient(135deg , #eaffd6, #c8ff93)", display: "flex", flexDirection:"column", padding: "40px", position: "relative"}}>
            <button type="button" className="cross" onClick={ResetWindowHide} style={{ fontSize: "35px", fontFamily: "raleway", position: "absolute", top: "5px", right: "5px",color: "#117d38", height: "40px", width: "40px", border: "none", background: "none", cursor: "pointer", lineHeight: "0"}} >
              x
            </button>
            <div className="rstpwdheading0" style={{width: "100%", fontFamily: "raleway", fontWeight: "normal", fontSize: "4vh", }}>Reset Password</div>
            <div style={{overflowX: "auto",height: "100%" }}>
            <div className="rstpwdusernameinput" style={{display:rstPwdUsernameWindowVisibility?"flex":"none"}}>
              <div className="rstpwdheading1" style={{}}>Enter Your Username</div>
              <form onSubmit={sendmail}>
              <input onChange={rstpwdusernamehandler}></input>
              <button type="button" onClick={sendmail}>Send OTP</button>
              </form>
            </div>
            <div className="rstpwdOtp" style={{display:rstPwdotpWindowVisibility?"flex":"none"}}>
              <div className="OTPmessage">The OTP has been sent to your HBTU Email: <a target="_blank" href={"https://mail.google.com/mail/u/"+rstPwdUsername}>{rstPwdUsername}</a></div>
              <OtpInput className="otpinput"
                value={rstPwdotp}
                onChange={rstpwdotphandler}
                numInputs={6}
                separator={<span></span>}
                shouldAutoFocus={{setRstPwdotpWindowVisibility}==false?"false":"true"}
                isInputNum="true"
              />
              <div className="OTPmessage2">Didn't receive the mail? Check the spam folder or <span onClick={sendmail} style={{cursor: "pointer", textDecorationStyle: "solid", textDecorationThickness: "2px"}}>Resend OTP.</span> </div>
            </div>
            <div className="password-body rstpwdchange" style={{display:newpWindowVisibility?"flex":"none"}}>
              <Form id="changePasswordForm" onSubmit={handlePasswordChange}>
                <Form.Group className="form-group" style={{borderBottom: "2px solid", borderBottomColor: new_p_validity!=undefined?new_p_validity==true?"green":"red":"black"}}>
                  <Form.Label>New Password</Form.Label><img className="info_icon" src="https://icon-icons.com/downloadimage.php?id=28513&root=259/ICO/128/&file=ic_info_outline_128_28513.ico"></img><p className="pwd_info_content" >The password must be 8-15 characters long and it must contain atleast one lowercase letter (a-z), one uppercase letter (A-Z), one numeric digit (0-9), and one special character (@#$%^&,).</p>
                  <Form.Control onChange={handle_new_p} type="text" />
                </Form.Group>
                <Form.Group className="form-group" style={{borderBottom: "2px solid",borderBottomColor: new_re_p_validity!=undefined?new_re_p_validity==true?"green":"red":"black"}}>
                  <Form.Label>Re-enter New Password</Form.Label>
                  <Form.Control onChange={handle_re_new_p} type="password" />
                </Form.Group>
                <Button variant="secondary" onClick={handlePasswordChange} type="submit" disabled={!form_validity}>
                  Reset Password
                </Button>
              </Form>
            </div>
            </div>
            <div className="rstpwdStatus" style={{display:reset_password_alert!=""?"block":"none"}}>{reset_password_alert}</div>
          </div>
        </div>

        <div className="resetpasswordsuccess" style={{transition: "1s", top:rstpwssuccess?"0px":"-100px", display:"flex", width: "100%", height: "80px", position: "absolute", zIndex: "5", fontFamily: "raleway", fontWeight: "normal", fontSize: "6vh", justifyContent: "center", alignItems: "center", }}>
              <h1 style={{color: 'black',fontFamily: "raleway", fontWeight: "normal", fontSize: "3vh",margin: "0px 10px", background: "linear-gradient(135deg , #eaffd6, #c8ff93)", borderRadius: "5px",padding: "10px 30px"}}>Your Password was changed successfully!!</h1>
        </div>


      </div>

    )
}
