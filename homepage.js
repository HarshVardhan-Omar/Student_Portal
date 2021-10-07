import React, { useEffect, useState } from 'react';
import { Router, useHistory, useRouteMatch } from "react-router";
import jQuery from './jQuery'
import { Link, Switch, Route } from "react-router-dom";

import Header from './Header'
import NotFound from './NotFound';
import Dashboard from './Dashboard'
import ChangePassword from './ChangePassword'
import Lodge from './Lodge';
import StudentRegistration from './studentRegistration';
import Cp from './Cp';
import CourseManagement from './courseManagement';
import ExamForm from './examForm';
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
  const history = useHistory();
  const match = useRouteMatch();
  const data = props.data
  const setProgress = props.setProgress
  const hometheme = props.theme


  const logout = (e) => {
    logoutbysession()
  }

  async function logoutbysession() {
    const requestoptions = {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        'X-CSRFToken': csrftoken
      },
      body: JSON.stringify({
      }),
    };
    props.setProgress(10)
    let response = await fetch("/api/logoutbysession", requestoptions)
    props.setProgress(50)
    if (response.status == 200) {
      props.setProgress(100)
      history.push({
        pathname: '/',
      })
      props.setData(null)
    }
    else {
      history.push({
        pathname: '/',
      })
      props.setData(null)
      props.setProgress(100)
    }
  }

  async function fetchDetailsBySession() {
    const requestoptions = {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        'X-CSRFToken': csrftoken
      },
      body: JSON.stringify({
      }),
    };
    props.setProgress(10)
    let response = await fetch("/api/sessionverify", requestoptions)
    props.setProgress(50)
    if (response.status == 200) {
      props.setProgress(100)
      let data = await response.json()
      // history.push({
      //   pathname:'/getstudentdetails',
      // })
      props.setData(data)
    }
    else {
      props.setProgress(100)
      history.push({
        pathname: "/"
      })
    }
  }
  useEffect(() => {
    fetchDetailsBySession();
  }
    , []);
  if (props.data) {
    //       console.log(props.data)
    document.title = "HomePage | " + props.data.Name;
    return (
      <div className="homepage">
        {/* <h1>Hello{locationgrab.state.Name}</h1> */}
        <Header data={data} theme={props.theme} setTheme={props.setTheme} logout={logout} csrftoken={csrftoken} ></Header>
        <div style={{ width: "100%", height: '10vh', position: "relative", backgroundColor: "var(--col1)", zIndex: "1" }} ></div>
        <Switch>
          <Route exact path={`${match.url}`} render={props => <Dashboard data={data} />} />
          <Route exact path={`${match.url}/changepassword`} render={props => <ChangePassword csrftoken={csrftoken} setProgress={setProgress} data={data} />} />
          <Route exact path={`${match.url}/studentregistration`} render={props => <StudentRegistration theme={hometheme} data={data} />} />

          <Route exact path={`${match.url}/examform`} render={props => <ExamForm theme={hometheme} data={data} />} />

          <Route exact path={`${match.url}/lodgegrievance`} render={props => <Lodge data={data} />} />
          <Route exact path={`${match.url}/semesterregistration`} render={props => <Cp data={data} />} />
          <Route exact path={`${match.url}/coursemanagement`} render={props => <CourseManagement data={data} />} />
          <Route> <NotFound /> </Route>
        </Switch>
        {/* <button onClick={logout}>LogOut</button> */}
      </div>
    )
  }
  else {
    return (<><h1>You are not logged In.</h1><button onClick={logout}>LogOut</button></>)
  }
}
