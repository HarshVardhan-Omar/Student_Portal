import React from "react";
import "./dashboard.css";
import Accordion from "react-bootstrap/Accordion";
import Table from "react-bootstrap/Table";
export default function Dashboard({ data }) {
  return (
    <div className="student-profile py-4" id="student-profile">
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
            <div className="card shadow-sm mb-4" id="card">
              <div className="card-header bg-transparent text-center">
                <img
                  className="profile_img"
                  src={data.photo}
                  alt="student dp"
                />
                <h3>{data.Name}</h3>
              </div>
              <div className="card-body">
                <p className="mb-0">
                  Roll Number: {data.RollNo}
                </p>
                <p className="mb-0">
                  Course: {data.Programme}
                </p>
                <p className="mb-0">
                  Branch: {data.Branch}
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-8">
            <div className="card shadow-sm" id="card">
              <div className="card-header bg-transparent border-0">
                <h3 className="mb-0">
                  <i className="far fa-clone pr-1"></i>{" General Information"}
                </h3>
                <Table striped bordered hover variant="dark">
                        <tbody>
                          <tr>
                            {/* <td>1</td> */}
                            <td>Current Semester</td>
                            <td>V</td>
                          </tr>
                          <tr>
                            {/* <td>2</td> */}
                            <td>CGPA</td>
                            <td>0</td>
                          </tr>
                          <tr>
                            {/* <td>3</td> */}
                            <td>Mobile Number</td>
                            <td>9874563201</td>
                          </tr>
                          <tr>
                            {/* <td>2</td> */}
                            <td>HBTU Email</td>
                            <td>190108038@HBTU.AC.IN</td>
                          </tr>
                          <tr>
                            {/* <td>2</td> */}
                            <td>Personal Email</td>
                            <td>y.vardhan1234@outlook.com</td>
                          </tr>
                        </tbody>
                </Table>
              </div>
              <div className="card-body pt-0"></div>
            </div>
            <div style={{ height: "26px" }}></div>
            <div className="card shadow-sm" id="card">
              <div className="card-header bg-transparent border-0">
                <h3 className="mb-0">
                  <i className="far fa-clone pr-1"></i>{" Other Information"}
                </h3>
              </div>
              <div className="card-body pt-0">
                <Accordion defaultActiveKey="0" flush>
                  <Accordion.Item eventKey="1">
                    <Accordion.Header>Academic details</Accordion.Header>
                    <Accordion.Body>
                      <Table striped bordered hover variant="dark">
                        <tbody>
                          <tr>
                            {/* <td>1</td> */}
                            <td>University Roll No.</td>
                            <td>Yaha pe roll no lana h</td>
                          </tr>
                          <tr>
                            {/* <td>2</td> */}
                            <td>Enrollment No.</td>
                            <td>HBTU1919191</td>
                          </tr>
                          <tr>
                            {/* <td>3</td> */}
                            <td>Programme</td>
                            <td>BTECH</td>
                          </tr>
                          <tr>
                            {/* <td>2</td> */}
                            <td>Branch</td>
                            <td>Information Technology</td>
                          </tr>
                          <tr>
                            {/* <td>2</td> */}
                            <td>Admission Source</td>
                            <td>JEE MAINS</td>
                          </tr>
                          <tr>
                            {/* <td>2</td> */}
                            <td>Current Semester</td>
                            <td>V</td>
                          </tr>
                        </tbody>
                      </Table>
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="2">
                    <Accordion.Header>Personal details</Accordion.Header>
                    <Accordion.Body>
                      <Table striped bordered hover variant="dark">
                        <tbody>
                          <tr>
                            <td>Student Name</td>
                            <td>Name</td>
                          </tr>
                          <tr>
                            <td>Student Name in Hindi</td>
                            <td>Name in Hindi</td>
                          </tr>
                          <tr>
                            <td>Date of Birth</td>
                            <td>04/07/2001</td>
                          </tr>
                          <tr>
                            <td>Gender</td>
                            <td>Male</td>
                          </tr>
                          <tr>
                            <td>Contact No.</td>
                            <td>2323232323</td>
                          </tr>
                          <tr>
                            <td>Alternate Contact No</td>
                            <td>04072001</td>
                          </tr>
                          <tr>
                            <td>Personal Email</td>
                            <td>hellohi@gmail.com</td>
                          </tr>
                          <tr>
                            <td>HBTU Email</td>
                            <td>2322113@hbtu.ac.in</td>
                          </tr>
                          <tr>
                            <td>Category</td>
                            <td>General</td>
                          </tr>
                          <tr>
                            <td>Sub Category</td>
                            <td>None</td>
                          </tr>
                          <tr>
                            <td>Fee Waiver</td>
                            <td>B+</td>
                          </tr>
                          <tr>
                            <td>Identification Mark</td>
                            <td>Shakal Kharab h</td>
                          </tr>
                          <tr>
                            <td>Aadhar Card Number</td>
                            <td>6969696969</td>
                          </tr>
                          <tr>
                            <td>Hostel Required</td>
                            <td>No</td>
                          </tr>
                          <tr>
                            <td>Mode of Transport</td>
                            <td>Aeroplane</td>
                          </tr>
                          <tr>
                            <td>Nationality</td>
                            <td>India</td>
                          </tr>
                          <tr>
                            <td>Religion</td>
                            <td>Hindu</td>
                          </tr>
                        </tbody>
                      </Table>
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="3">
                    <Accordion.Header>
                      Entrance examination details
                    </Accordion.Header>
                    <Accordion.Body>
                      <Table striped bordered hover variant="dark">
                        <tbody>
                          <tr>
                            <td>Entrance Exam</td>
                            <td>JEE MAINS</td>
                          </tr>
                          <tr>
                            <td>Year</td>
                            <td>2019</td>
                          </tr>
                          <tr>
                            <td>Roll No / Application Number</td>
                            <td>696969</td>
                          </tr>
                          <tr>
                            <td>AIR Rank</td>
                            <td>696969</td>
                          </tr>
                          <tr>
                            <td>Category</td>
                            <td>General</td>
                          </tr>
                          <tr>
                            <td>Category Rank</td>
                            <td>696969</td>
                          </tr>
                        </tbody>
                      </Table>
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="4">
                    <Accordion.Header>Parents details</Accordion.Header>
                    <Accordion.Body>
                      <Table striped bordered hover variant="dark">
                        <tbody>
                          <tr>
                            <td>Father's Name</td>
                            <td>Animesh Trivedi</td>
                          </tr>
                          <tr>
                            <td>Father's Contact</td>
                            <td>69696969</td>
                          </tr>
                          <tr>
                            <td>Mother's Name</td>
                            <td>Disha Patani (Paatni)</td>
                          </tr>
                          <tr>
                            <td>Parent's Mail Id</td>
                            <td>anniki dishu@gmail.com</td>
                          </tr>
                        </tbody>
                      </Table>
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
