import React from "react";
import ReactDOM from "react-dom";
import { component } from "react"
import Login from "./login";
import Login_func from "./Login_func";
import homepage from "./homepage";
import { BrowserRouter as Router,Switch,Route } from "react-router-dom";
export default function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Login_func} />
        <Route exact path="/getstudentdetails"component={homepage} />
      </Switch>
    </Router>
  );
}
const app = document.getElementById("app");
ReactDOM.render(<App />, app);
