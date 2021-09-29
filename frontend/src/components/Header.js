import React, { useState, useEffect } from "react";
import { useRouteMatch } from "react-router";
import logo from "./logo.png"
import "./header.css"
import { BiSun } from "react-icons/bi";
import { Link } from "react-router-dom"

export default function Header({ data, logout, csrftoken,theme,setTheme }) {
    const match = useRouteMatch();
    const [openNav, setOpenNav] = useState(false);
    // const [theme, setTheme] = useState("Black")
    const [activeLink, setActiveLink] = useState(location.pathname);
    const toggleNav = (e) => {
        openNav ? setOpenNav(false) : setOpenNav(true);
    }
    const closeNav = (e) => {
        setOpenNav(false)
    }

    const side_bar_style = {
        left: openNav ? "0px" : "-300px",
    }
    const dark = { background: openNav ? "#00000020" : "#00000000", height: "90vh", width: "100vw", position: "absolute", zIndex: "1", visibility: openNav ? "visible" : "hidden", transition: "0.3s" }


    const checkboxstyle = {
        clip: 'rect(0 0 0 0)',
        border: '0',
        height: '1px',
        margin: '-1px',
        overflow: 'hidden',
        position: 'absolute',
        width: '1px'
    }

    useEffect(() => {
        var data = localStorage.getItem('theme');
        if (data) {
            setTheme(data)
        }
        else {
            setTheme("White")
            makewhite();
        }
        if (data === "White") {
            makewhite();
        }
        if (data === "Black") {
            makeblack();
        }
    }
        , []);

    const toggleTheme = (e) => {
        if (theme === "White") {
            localStorage.setItem('theme', 'Black')
            setTheme("Black");
            makeblack();
        }
        else {
            localStorage.setItem('theme', 'White')
            setTheme("White")
            makewhite();
        }
    }

    function makewhite() {
        // White Theme Colors 
        document.documentElement.style.setProperty('--sidecol1', '#004064');
        document.documentElement.style.setProperty('--col1', 'white');
        document.documentElement.style.setProperty('--textcolor', '#010101');
        document.documentElement.style.setProperty('--bgcol', '#85bad761');
        document.documentElement.style.setProperty('--themeiconcolor', '#004064');
        document.documentElement.style.setProperty('--cpcoltable', '#000000');
        document.documentElement.style.setProperty('--selectcol', '#85bad761');
        document.documentElement.style.setProperty('--tabcolor', '#85bad761');
        document.documentElement.style.setProperty('--tabcolorform', '#b6b1b1');
        document.querySelector('meta[name="theme-color"]').setAttribute("content", "#ffffff");
    }
    function makeblack() {
        // Black Theme Colors
        document.documentElement.style.setProperty('--sidecol1', '#151515');
        document.documentElement.style.setProperty('--col1', '#3e3f3f');
        document.documentElement.style.setProperty('--textcolor', '#d3d3d3');
        document.documentElement.style.setProperty('--bgcol', '#202022');
        document.documentElement.style.setProperty('--themeiconcolor', 'white');
        document.documentElement.style.setProperty('--cpcoltable', '#ffffff');
        document.documentElement.style.setProperty('--selectcol', '#202022');
        document.documentElement.style.setProperty('--tabcolor', '#151515');
        document.documentElement.style.setProperty('--tabcolorform', 'white');
        document.querySelector('meta[name="theme-color"]').setAttribute("content", "#000000");
    }

    return (
        <div className="main">
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
                        <div className="nav-items heading">
                            <h2>STUDENT PORTAL</h2>
                        </div>
                        <div className="nav-items themeicon react-toggle" >
                            {/* <i className={"fas fa-2x " +(theme==="Black"? "fa-sun theme":"fa-moon theme")} onClick={toggleTheme}></i> */}
                            <div className="react-toggle-track" role="button" onClick={toggleTheme} tabIndex="-1">
                                <div className="react-toggle-track-check" style={{ visibility: (theme === 'Black' ? 'visible' : 'hidden') }} >
                                    <span className="toggle_2wFP">🌜</span>
                                </div>
                                <div className="react-toggle-track-x" style={{ visibility: (theme === 'White' ? 'visible' : 'hidden') }} >
                                    <span className="toggle_2wFP">🌞</span>
                                </div>
                                <div className="react-toggle-thumb" style={{ left: theme === "Black" ? "12px" : "-12px" }}></div>
                                <input type="checkbox" className="form-check-input" style={checkboxstyle} aria-label="Switch between dark and light mode" ></input>
                            </div>
                        </div>
                        <div>

                            <button className="butn" onClick={logout} >
                                Logout <i className="fas fa-sign-out-alt"></i>
                            </button>
                        </div>
                    </div>
                </div>
                <div style={dark} onClick={closeNav}></div>
                <div id="sidebar" className="side-bar" style={side_bar_style} >
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
                        <ul onClick={closeNav} className="items-menu" id="profile" >
                            <li className="items">
                                <Link to={`${match.path}/`} style={{ backgroundColor: activeLink === "/getstudentdetails/" ? "#ffffff56" : "#00000000" }} onClick={(e) => setActiveLink("/getstudentdetails/")} className="menu-btn">
                                    <i className="fas fa-desktop nav-icon"></i>
                                    Dashboard
                                </Link>
                            </li>
                            <li className="items">
                                <Link to={`${match.path}/studentregistration`} style={{ backgroundColor: activeLink === "/getstudentdetails/studentregistration" ? "#ffffff56" : "#00000000" }} onClick={(e) => setActiveLink("/getstudentdetails/studentregistration")} className="menu-btn">
                                    <i className="far fa-registered nav-icon"></i>
                                    Student Registration
                                </Link>
                            </li>
                            <li className="items">
                                <Link to={`${match.path}/semesterregistration`} style={{ backgroundColor: activeLink === "/getstudentdetails/semesterregistration" ? "#ffffff56" : "#00000000" }} onClick={(e) => setActiveLink("/getstudentdetails/semesterregistration")} className="menu-btn">
                                    <i className="far fa-registered nav-icon"></i>
                                    Semester Registration
                                </Link>
                            </li>
                            <li className="items">
                                <Link to={`${match.path}/registrationcard`} style={{ backgroundColor: activeLink === "/getstudentdetails/registrationcard" ? "#ffffff56" : "#00000000" }} onClick={(e) => setActiveLink("/getstudentdetails/registrationcard")} className="menu-btn">
                                    <i className="fas fa-download nav-icon"></i>
                                    Registration Card
                                </Link>
                            </li>
                            <li className="items">
                                <Link to={`${match.path}/examform`} style={{ backgroundColor: activeLink === "/getstudentdetails/examform" ? "#ffffff56" : "#00000000" }} onClick={(e) => setActiveLink("/getstudentdetails/examform")} className="menu-btn">
                                    <i className="fas fa-sticky-note nav-icon"></i>
                                    Exam Form
                                </Link>
                            </li>
                            <li className="items">
                                <Link to={`${match.path}/admitcard`} style={{ backgroundColor: activeLink === "/getstudentdetails/admitcard" ? "#ffffff56" : "#00000000" }} onClick={(e) => setActiveLink("/getstudentdetails/admitcard")} className="menu-btn">
                                    <i className="fas fa-download nav-icon"></i>{" "}
                                    Admit Card
                                </Link>
                            </li>
                            <li className="items">
                                <Link to={`${match.path}/lodgegrievance`} style={{ backgroundColor: activeLink === "/getstudentdetails/lodgegrievance" ? "#ffffff56" : "#00000000" }} onClick={(e) => setActiveLink("/getstudentdetails/lodgegrievance")} className="menu-btn">
                                    <i className="fas fa-frown nav-icon"></i>
                                    Lodge Grievance
                                </Link>
                            </li>
                            <li className="items">
                                <Link to={`${match.path}/result`} style={{ backgroundColor: activeLink === "/getstudentdetails/result" ? "#ffffff56" : "#00000000" }} onClick={(e) => setActiveLink("/getstudentdetails/result")} className="menu-btn">
                                    <i className="fas fa-poll nav-icon"></i>
                                    Result
                                </Link>
                            </li>
                            <li className="items">
                                <Link to={`${match.path}/coursemanagement`} style={{ backgroundColor: activeLink === "/getstudentdetails/coursemanagement" ? "#ffffff56" : "#00000000" }} onClick={(e) => setActiveLink("/getstudentdetails/coursemanagement")} className="menu-btn">
                                    <i className="fas fa-tasks nav-icon"></i>
                                    Course Management
                                </Link>
                            </li>
                            <li className="items">
                                <Link to={`${match.path}/changepassword`} style={{ backgroundColor: activeLink === "/getstudentdetails/changepassword" ? "#ffffff56" : "#00000000" }} onClick={(e) => setActiveLink("/getstudentdetails/changepassword")} className="menu-btn">
                                    <i className="fas fa-key nav-icon"></i>
                                    Change Password
                                </Link>
                            </li>
                            <li className="items">
                                <Link to={`${match.path}/studentfeepayment`} style={{ backgroundColor: activeLink === "/getstudentdetails/studentfeepayment" ? "#ffffff56" : "#00000000" }} onClick={(e) => setActiveLink("/getstudentdetails/studentfeepayment")} className="menu-btn">
                                    <i className="fas fa-rupee-sign nav-icon"></i>
                                    Student Fee Payment
                                </Link>
                            </li>
                            <li>
                                <button className="log-btn" onClick={logout}>
                                    {"Logout "}<i className="fas fa-sign-out-alt"></i>
                                </button>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}
