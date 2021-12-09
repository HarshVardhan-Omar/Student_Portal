import React from "react";
import Table from "react-bootstrap/Table";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./lodge.css";
function Lodge() {
    document.title="Lodge Grievance"
    return (
        <div className="application">
            <h1>Lodge Grievance</h1>
            <Table striped bordered hover size="sm" variant="dark">
                <tbody>
                    <tr>
                        <td>
                            To,
                        </td>
                        <td colSpan="3">VC, HBTU Kanpur</td>
                    </tr>
                    <tr>
                        <td>
                            CC,
                        </td>
                        <td colSpan="3">Pro VC, HBTU Kanpur</td>
                    </tr>
                    <tr>
                        <td>
                            BCC,
                        </td>
                        <td colSpan="3">Registrar, HBTU Kanpur</td>
                    </tr>
                </tbody>
            </Table>
            <Form action="">
                <Form.Control
                    className="input-form"
                    type="text"
                    placeholder="Subject..."
                />

                <Form.Control
                    className="input-form"
                    as="textarea"
                    rows={6}
                    placeholder="State your grievances...."
                />

                <Button as="input" type="submit" value="Submit" variant="success" />
            </Form>
        </div>
    );
}
export default Lodge;
