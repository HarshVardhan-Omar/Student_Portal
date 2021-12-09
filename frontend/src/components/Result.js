import React from "react";
import ResTab from "./ResultTab";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";

import "./result.css";

function Result() {
    document.title="Result"
    return (
        <div className="result">
            <h1 className="res-head">Result</h1>
            <Tabs
                className="result-tab"
                defaultActiveKey="1"
                id="uncontrolled-tab-example"
            >
                <Tab className="tab-head" eventKey="1" title="1st Year" >
                    <ResTab />
                </Tab>
                <Tab className="tab-head" eventKey="2" title="2nd Year">
                    <ResTab />
                </Tab>
                <Tab className="tab-head" eventKey="3" title="3rd Year">
                    <ResTab />
                </Tab>
                <Tab className="tab-head" eventKey="4" title="4th Year">
                    <ResTab />
                </Tab>
            </Tabs>
        </div>
    );
}
export default Result;
