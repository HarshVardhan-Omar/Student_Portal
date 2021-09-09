import React from "react";
import ReactDOM from "react-dom";
import { component, useState } from "react"
import LoadingBar from 'react-top-loading-bar'
import LoginPage from "./loginPage";
import Homepage from "./homepage";
import { BrowserRouter as Router,Switch,Route } from "react-router-dom";

export default function App() {

  const[progress,setProgress]=useState(0);

  return (
    <>
    <LoadingBar color='#c8ff93' shadow={true} height={3} progress={progress} onLoaderFinished={() => setProgress(0)}/>
    <Router>
      <Switch>
        <Route exact path="/" render={props => <LoginPage setProgress={setProgress} />} />
        <Route path="/getstudentdetails" render={props => <Homepage setProgress={setProgress} />}  />
        <Route> <h1> 404 Not Found. </h1></Route>
      </Switch>
    </Router>
    </>
  );
}
const app = document.getElementById("app");
ReactDOM.render(<App />, app);
