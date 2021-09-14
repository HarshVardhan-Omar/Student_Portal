import React,{useState} from "react";
import { useRouteMatch } from "react-router";
import logo from "./logo.png"
import "./header.css"
import {Link} from "react-router-dom"

export default function Header({ data,logout,csrftoken }) {
    const match=useRouteMatch();
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
                                <Link to={`${match.url}`} className="menu-btn">
                                    <i className="fas fa-desktop nav-icon"></i>
                                    Dashboard
                                </Link>
                            </li>
                            <li className="items">
                                <Link to={`${match.url}/studentregistration`} className="menu-btn">
                                    <i className="far fa-registered nav-icon"></i>
                                    Student Registration
                                </Link>
                            </li>
                            <li className="items">
                                <Link to={`${match.url}/semesterregistration`} className="menu-btn">
                                    <i className="far fa-registered nav-icon"></i>
                                    Semester Registration
                                </Link>
                            </li>
                            <li className="items">
                                <Link to={`${match.url}/registrationcard`} className="menu-btn">
                                    <i className="fas fa-download nav-icon"></i>
                                    Registration Card
                                </Link>
                            </li>
                            <li className="items">
                                <Link to={`${match.url}/examform`} className="menu-btn">
                                    <i className="fas fa-sticky-note nav-icon"></i>
                                    Exam Form
                                </Link>
                            </li>
                            <li className="items">
                                <Link to={`${match.url}/admitcard`} className="menu-btn">
                                    <i className="fas fa-download nav-icon"></i>{" "}
                                    Admit Card
                                </Link>
                            </li>
                            <li className="items">
                                <Link to={`${match.url}/lodgegrievance`} className="menu-btn">
                                    <i className="fas fa-frown nav-icon"></i>
                                    Lodge Grievance
                                </Link>
                            </li>
                            <li className="items">
                                <Link to={`${match.url}/result`} className="menu-btn">
                                    <i className="fas fa-poll nav-icon"></i>
                                    Result
                                </Link>
                            </li>
                            <li className="items">
                                <Link to={`${match.url}/coursemanagement`} className="menu-btn">
                                    <i className="fas fa-tasks nav-icon"></i>
                                    Course Management
                                </Link>
                            </li>
                            <li className="items">
                                <Link to={`${match.url}/changepassword`} className="menu-btn">
                                    <i className="fas fa-key nav-icon"></i>
                                    Change Password
                                </Link>
                            </li>
                            <li className="items">
                                <Link href="" className="menu-btn">
                                    <i className="fas fa-rupee-sign nav-icon"></i>
                                    Student Fee Payment
                                </Link>
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
