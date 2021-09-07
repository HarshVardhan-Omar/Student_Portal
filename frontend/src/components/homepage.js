import React, { useEffect,useState } from 'react';
import { useHistory } from "react-router";
import { useLocation } from 'react-router-dom';
import jQuery from './jQuery'
import logo from "./logo.png"
import "./homepage.css"
import {BrowserRouter as Router, Link, Switch,Route}from 'react-router-dom'
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
    var el1;
    useEffect(() => {
      const timer = setTimeout(() => {
        var el1 = document.querySelector(".sidebar-btn");
        var x = document.getElementById("sidebar");
        console.log(el1);
        el1.addEventListener("click", () => {
          if (x.style.left === "0px") {
            closeNav();
          } else {
            openNav();
          }
          return false;
        });
        function openNav() {
          x.style.left = "0px";
          
        }
  
        function closeNav() {
          x.style.left = "-300px";
          
        }
      }, 500);
      return () => {
        clearTimeout(timer);
      };
    }, []);

    if(location.state){
        document.title="HomePage | " + location.state.username;
        return (
          <>
          <div className="main" style={{ backgroundColor: "#202022" }}>
            <div className="header">
              <div className="header-menu">
                <div className="title1">
                  <div className="nav-items">
                    <div className="sidebar-btn" id="side-toggle">
                      <i className="fas fa-bars"></i>
                    </div>
                    <div className="nav-items">
                      <img className="logo" src={logo} alt="logo-hbtu" />
                    </div>
                  </div>
                  <div className="nav-items">
                    <h2>Student Portal</h2>
                  </div>
                  <div>
                    <button className="btn" onClick={logout}>
                      Logout <i className="fas fa-sign-out-alt"></i>
                    </button>
                  </div>
                </div>
              </div>
              <div id="sidebar" className="side-bar">
                <div className="sidebar-menu">
                  <div className="profile">
                    <a href="#">
                      <img className="profile-pic" src={location.state.photo} alt="#" />
                    </a>
                  </div>
                  <ul className="items-menu" id="profile">
                    <li className="items">
                      <a href="">
                        <i className="fas fa-desktop nav-icon"></i>
                      </a>
                      <a href="" className="menu-btn">
                        Dashboard
                      </a>
                    </li>
                    <li className="items">
                      <a href="">
                        <i className="far fa-registered nav-icon"></i>
                      </a>
                      <a href="" className="menu-btn">
                        {" "}
                        Student Registration
                      </a>
                    </li>
                    <li className="items">
                      <a href="">
                        <i className="far fa-registered nav-icon"></i>
                      </a>
                      <a href="" className="menu-btn">
                        {" "}
                        Semester Registration
                      </a>
                    </li>
                    <li className="items">
                      <a href="">
                        <i className="fas fa-download nav-icon"></i>
                      </a>
    
                      <a href="" className="menu-btn">
                        Registration Card
                      </a>
                    </li>
                    <li className="items">
                      <a href="">
                        <i className="fas fa-sticky-note nav-icon"></i>
                      </a>
    
                      <a href="" className="menu-btn">
                        {" "}
                        Exam Form
                      </a>
                    </li>
                    <li className="items">
                      <a href="">
                        <i className="fas fa-download nav-icon"></i>{" "}
                      </a>
                      <a href="" className="menu-btn">
                        Admit Card
                      </a>
                    </li>
                    <li className="items">
                      <a href="">
                        {" "}
                        <i className="fas fa-frown nav-icon"></i>
                      </a>
    
                      <a href="" className="menu-btn">
                        {" "}
                        Lodge Grievance
                      </a>
                    </li>
                    <li className="items">
                      <a href="">
                        <i className="fas fa-poll nav-icon"></i>
                      </a>
    
                      <a href="" className="menu-btn">
                        {" "}
                        Result
                      </a>
                    </li>
                    <li className="items">
                      <a href="">
                        <i className="fas fa-tasks nav-icon"></i>
                      </a>
    
                      <a href="" className="menu-btn">
                        Course Management
                      </a>
                    </li>
                    <li className="items">
                      <a href="">
                        <i className="fas fa-key nav-icon"></i>
                      </a>
    
                      <a href="" className="menu-btn">
                        Change Password
                      </a>
                    </li>
                    <li className="items">
                      <a href="">
                        <i className="fas fa-rupee-sign nav-icon"></i>
                      </a>
    
                      <a href="" className="menu-btn">
                        {" "}
                        Student Fee Payment
                      </a>
                    </li>
                    <li>
                      <button className="log-btn" onClick={logout}>
                        Logout<i className="fas fa-sign-out-alt"></i>
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
                <div className="student-profile py-4" id="student-profile">
                <div className="container">
                <div className="row">
                  <div className="col-lg-4">
                    <div className="card shadow-sm" id="card">
                      <div className="card-header bg-transparent text-center">
                        <img
                          className="profile_img"
                          src={location.state.photo}
                          alt="student dp"
                        />
                        <h3>{location.state.Name}</h3>
                      </div>
                      <div className="card-body">
                        <p className="mb-0">
                          <strong className="pr-1">Roll Number:</strong>{location.state.RollNo}
                        </p>
                        <p className="mb-0">
                          <strong className="pr-1">Course:</strong>BTech
                        </p>
                        <p className="mb-0">
                          <strong className="pr-1">Branch:</strong>{location.state.Branch}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-8">
                    <div className="card shadow-sm" id="card">
                      <div className="card-header bg-transparent border-0">
                        <h3 className="mb-0">
                          <i className="far fa-clone pr-1"></i>General Information
                        </h3>
                      </div>
                      <div className="card-body pt-0">
                        {/* <table className="table table-bordered">
                                                <tr>
                                                    <th width="30%">Roll</th>
                                                    <td width="2%">:</td>
                                                    <td>125</td>
                                                </tr>
                                                <tr>
                                                    <th width="30%">Academic Year</th>
                                                    <td width="2%">:</td>
                                                    <td>2020</td>
                                                </tr>
                                                <tr>
                                                    <th width="30%">Gender</th>
                                                    <td width="2%">:</td>
                                                    <td>Male</td>
                                                </tr>
                                                <tr>
                                                    <th width="30%">Religion</th>
                                                    <td width="2%">:</td>
                                                    <td>Group</td>
                                                </tr>
                                                <tr>
                                                    <th width="30%">blood</th>
                                                    <td width="2%">:</td>
                                                    <td>B+</td>
                                                </tr>
                                            </table> */}
                      </div>
                    </div>
                    <div style={{ height: "26px" }}></div>
                    <div className="card shadow-sm" id="card">
                      <div className="card-header bg-transparent border-0">
                        <h3 className="mb-0">
                          <i className="far fa-clone pr-1"></i>Other Information
                        </h3>
                      </div>
                      <div className="card-body pt-0">
                        <p>Welcome {location.state.Name} head towards Dashboard to see more detailed Info.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>          
          </div>
        </>
        )
    }
    else{
        return<></>
    }
}
