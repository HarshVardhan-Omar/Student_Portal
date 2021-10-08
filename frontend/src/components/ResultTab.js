import React from "react";

import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import TabContainer from "react-bootstrap/TabContainer";
import TabContent from "react-bootstrap/TabContent";
import TabPane from "react-bootstrap/TabPane";
import { Col, Row, Nav } from "react-bootstrap";
import ResTable from "./ResultTable";
import "./resulttab.css";
function ResultTab() {
    return (
        <div className="restab" style={{ fontFamily: "Montserrat" }}>
            <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                <Row>
                    <Col sm={2}>
                        <Nav variant="pills" className="flex-column">
                            <Nav.Item>
                                <Nav.Link eventKey="first">Regular</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="second">CarryOver</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="third">Spl. CarryOver</Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </Col>
                    <Col sm={10}>
                        <Tab.Content>
                            <Tab.Pane eventKey="first">
                                <ResTable />
                            </Tab.Pane>
                            <Tab.Pane eventKey="second">
                                <ResTable />
                            </Tab.Pane>
                            <Tab.Pane eventKey="third">
                                <ResTable />
                            </Tab.Pane>
                        </Tab.Content>
                    </Col>
                </Row>
            </Tab.Container>
        </div>
    );
}
export default ResultTab;
