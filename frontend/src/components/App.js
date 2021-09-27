import React from "react";
import ReactDOM from "react-dom";
import { component, useState } from "react"
import LoadingBar from 'react-top-loading-bar'
import LoginPage from "./loginPage";
import Homepage from "./homepage";
import NotFound from "./NotFound";
import { BrowserRouter as Router,Switch,Route } from "react-router-dom";

export default function App() {

  const[progress,setProgress]=useState(0);
  const[data,setData]=useState();
  //CHromeMonileFix
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
  window.addEventListener('resize', () => {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
  });
  

  return (
    <>
    <LoadingBar color='#c8ff93' shadow={true} height={3} progress={progress} onLoaderFinished={() => setProgress(0)}/>
    <Router>
      <Switch>
        <Route exact path="/" render={props => <LoginPage setData={setData} setProgress={setProgress} />} />
        <Route path="/getstudentdetails" render={props => <Homepage setData={setData} data={data} setProgress={setProgress} />}  />
        <Route> <NotFound/> </Route>
      </Switch>
    </Router>
    </>
  );
}
const app = document.getElementById("app");
ReactDOM.render(<App />, app);
