import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./examform.css";
function examForm() {
    return (
        <div className="exam-form">
            <h1 className="exam-head">Examination Form</h1>
            <Form>
                <Form.Group className="ele-form" controlId="exampleForm.ControlSelect1">
                    <Form.Label >Semester</Form.Label>
                    <Form.Control className="selectip ele-lab" as="select">
                        <option>Select Semester</option>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                        <option>6</option>
                        <option>7</option>
                        <option>8</option>
                    </Form.Control>
                </Form.Group>
                <Form.Group className="ele-form" controlId="exampleForm.ControlSelect1">
                    <Form.Label >Exam Type</Form.Label>
                    <Form.Control className="selectip ele-lab" as="select">
                        <option>Select Exam Type</option>
                        <option>Regular</option>
                        <option>CarryOver</option>
                        <option>Spl. CarryOver</option>
                    </Form.Control>
                </Form.Group>
                <Form.Group className="ele-form" controlId="exampleForm.ControlSelect1">
                    <Form.Label >Session</Form.Label>
                    <Form.Control className="selectip ele-lab" as="select">
                        <option>Select Session</option>
                        <option>2019-20</option>
                        <option>2020-21</option>
                        <option>2021-22</option>
                        <option>2022-23</option>
                    </Form.Control>
                </Form.Group>
                <Form.Group className="mb-3 ele-form" controlId="subjects">
                    <Form.Label >Subjects</Form.Label>
                    <Form.Check className="ele-lab" type="checkbox" label="Subject 1" />
                    <Form.Check type="checkbox" label="Subject 2" />
                    <Form.Check type="checkbox" label="Subject 3" />
                    <Form.Check type="checkbox" label="Subject 4" />
                    <Form.Check type="checkbox" label="Subject 5" />
                    <Form.Check type="checkbox" label="Subject 6" />
                    <Form.Check type="checkbox" label="Subject 7" />
                </Form.Group>
                <Form.Group className="ele-form button">
                    <Button className="buttn" variant="outline-dark" type="submit">
                        Submit
                    </Button>
                    <Button className="buttn" variant="outline-dark" href="">
                        Admit Card
                    </Button>
                </Form.Group>
            </Form>
        </div>
    );
}
export default examForm;