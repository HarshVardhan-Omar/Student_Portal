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
                  src={data.Photo}
                  alt="student dp"
                />
                <h3>{data.Name}</h3>
              </div>
              <div className="card-body">
                <p className="mb-0">
                  Roll Number: {data.UniversityRollNo}
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
                            <td>{data.CurrentSemester}</td>
                          </tr>
                          <tr>
                            {/* <td>2</td> */}
                            <td>CGPA</td>
                            <td>{data.CGPA}</td>
                          </tr>
                          <tr>
                            {/* <td>3</td> */}
                            <td>Mobile Number</td>
                            <td>{data.Contact}</td>
                          </tr>
                          <tr>
                            {/* <td>2</td> */}
                            <td>HBTU Email</td>
                            <td>{data.HBTUEmail}</td>
                          </tr>
                          <tr>
                            {/* <td>2</td> */}
                            <td>Personal Email</td>
                            <td>{data.PersonalEmail}</td>
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
                            <td>{data.UniversityRollNo}</td>
                          </tr>
                          <tr>
                            {/* <td>2</td> */}
                            <td>Enrollment No.</td>
                            <td>{data.EnrollmentNumber}</td>
                          </tr>
                          <tr>
                            {/* <td>3</td> */}
                            <td>Programme</td>
                            <td>{data.Programme}</td>
                          </tr>
                          <tr>
                            {/* <td>2</td> */}
                            <td>Branch</td>
                            <td>{data.Branch}</td>
                          </tr>
                          <tr>
                            {/* <td>2</td> */}
                            <td>Admission Source</td>
                            <td>{data.AdmissionSource}</td>
                          </tr>
                          <tr>
                            {/* <td>2</td> */}
                            <td>Current Semester</td>
                            <td>{data.CurrentSemester}</td>
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
                            <td>{data.StudentName}</td>
                          </tr>
                          <tr>
                            <td>Student Name in Hindi</td>
                            <td>{data.StudentNameHindi}</td>
                          </tr>
                          <tr>
                            <td>Date of Birth</td>
                            <td>{data.DateOfBirth}</td>
                          </tr>
                          <tr>
                            <td>Gender</td>
                            <td>{data.Gender}</td>
                          </tr>
                          <tr>
                            <td>Contact No.</td>
                            <td>{data.Contact}</td>
                          </tr>
                          <tr>
                            <td>Alternate Contact No</td>
                            <td>{data.AlternateContact}</td>
                          </tr>
                          <tr>
                            <td>Personal Email</td>
                            <td>{data.PersonalEmail}</td>
                          </tr>
                          <tr>
                            <td>HBTU Email</td>
                            <td>{data.HBTUEmail}</td>
                          </tr>
                          <tr>
                            <td>Category</td>
                            <td>{data.Category}</td>
                          </tr>
                          <tr>
                            <td>Sub Category</td>
                            <td>{data.SubCategory}</td>
                          </tr>
                          <tr>
                            <td>Fee Waiver</td>
                            <td>{data.FeeWaiver}</td>
                          </tr>
                          <tr>
                            <td>Identification Mark</td>
                            <td>{data.IdentificationMark}</td>
                          </tr>
                          <tr>
                            <td>Aadhar Card Number</td>
                            <td>{data.AadhaarCard}</td>
                          </tr>
                          <tr>
                            <td>Hostel Required</td>
                            <td>{data.Hostel}</td>
                          </tr>
                          <tr>
                            <td>Mode of Transport</td>
                            <td>{data.ModeOfTransport}</td>
                          </tr>
                          <tr>
                            <td>Nationality</td>
                            <td>{data.Nationality}</td>
                          </tr>
                          <tr>
                            <td>Religion</td>
                            <td>{data.Religion}</td>
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
                            <td>{data.EntranceExam}</td>
                          </tr>
                          <tr>
                            <td>Year</td>
                            <td>{data.Year}</td>
                          </tr>
                          <tr>
                            <td>Roll No / Application Number</td>
                            <td>{data.ApplicationNo}</td>
                          </tr>
                          <tr>
                            <td>AIR Rank</td>
                            <td>{data.AIRRank}</td>
                          </tr>
                          <tr>
                            <td>Category</td>
                            <td>{data.Category}</td>
                          </tr>
                          <tr>
                            <td>Category Rank</td>
                            <td>{data.CategoryRank}</td>
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
                            <td>{data.FatherName}</td>
                          </tr>
                          <tr>
                            <td>Father's Contact</td>
                            <td>{data.FatherContact}</td>
                          </tr>
                          <tr>
                            <td>Mother's Name</td>
                            <td>{data.MotherName}</td>
                          </tr>
                          <tr>
                            <td>Parent's Mail Id</td>
                            <td>{data.ParentEmail}</td>
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
