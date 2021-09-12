import React,{useState} from "react";
import logo from "./logo.png"
import "./header.css"
import {Link} from "react-router-dom"

export default function Header({ data,logout,csrftoken }) {
    const[openNav,setOpenNav]=useState(false);
    const toggleNav=(e)=>{
            openNav? setOpenNav(false) : setOpenNav(true);
        }
    const side_bar_style = {
        left: openNav?"0px":"-300px",
    }



    return (
        <div className="main" style={{ backgroundColor: "#202022" }}>
            <div className="header">
                <div className="header-menu">
                    <div className="title1">
                        <div className="nav-items">
                            <div className="sidebar-btn" id="side-toggle" onClick={toggleNav}>
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
                            <button className="butn" onClick={logout}>
                                Logout <i className="fas fa-sign-out-alt"></i>
                            </button>
                        </div>
                    </div>
                </div>
                <div id="sidebar" className="side-bar" style={side_bar_style}>
                    <div className="sidebar-menu">
                        <div className="profile">
                            <a href="#">
                                <img
                                className="profile-pic"
                                src={data.photo}
                                alt="#"
                                />
                            </a>
                        </div>
                        <ul className="items-menu" id="profile">
                            <li className="items">
                                <a href="">
                                    <i className="fas fa-desktop nav-icon"></i>
                                </a>
                                <a to="" className="menu-btn">
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
        </div>
    );
    
}
