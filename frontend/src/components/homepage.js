import React, { useEffect,useState } from 'react';
import { useHistory, useRouteMatch } from "react-router";
import { useLocation } from 'react-router-dom';
import jQuery from './jQuery'
import { Link,Switch,Route } from "react-router-dom";

import Header from './Header'
import Dashboard from './Dashboard'

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
    const locationgrab=useLocation();
    const history=useHistory();
    const match=useRouteMatch();
    const[data,setData]=useState(locationgrab.state);
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
          history.push({
            pathname: "/"
          })
        }
    }
    useEffect(() => {
      fetchDetailsBySession();    //if logged in
    }, []);
    document.title="HomePage | "+ data.Name ;
      return (
          <div>
              <Header data={data} logout={logout} csrftoken={csrftoken}></Header> 
              <Route exact path={`${match.url}`}  render={props => <Dashboard data={data} />}  />
          </div>
      )
  
}
