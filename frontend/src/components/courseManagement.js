import React from "react";
import Button from "react-bootstrap/Button";
import './changepassword.css';
import "./studentRegistration.css";
import "./coursemanagement.css";
import Form from 'react-bootstrap/Form'
export default function CourseManagement() {
  return (
      <div className="course-management">
          
      <h1>See Syllabus</h1>
      <div className="student-registration">
    <div className="container">
      <div className="branch mb-2">
        <label htmlFor="Branch" className="mb-2">
          Branch
        </label>
        <select htmlFor="Branch" id="Branch">
          <option value="select">--Select--</option>
          <option value="CSE">Computer Science and Engineering</option>
          <option value="IT">Information Technology</option>
          <option value="ET">Electronics Technology</option>
          <option value="ME">Mechanical Engineering</option>
          <option value="EE">Electrical Engineering</option>
          <option value="CE">Civil Engineering</option>
          <option value="CHE">Chemical Engineering</option>
          <option value="PT">Paint Technology</option>
          <option value="OT">Oil Technology</option>
          <option value="PT">Leather Technology</option>
          <option value="PL">Plastic Technology</option>
          <option value="FT">Food Technology</option>
          <option value="BE">Bio-Chemical Engineering</option>
        </select>
      </div>
      <div className="current-semester mb-2">
        <label htmlFor="CurrentSemester" className="mb-2">
          Current Semester
        </label>
        <select htmlFor="Branch" id="Branch">
          <option value="select">--Select--</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
          {/* <option value="OT">Oil Technology</option>
                    <option value="PT">Leather Technology</option>
                    <option value="PL">Plastic Technology</option>
                    <option value="FT">Food Technology</option>
                    <option value="BE">Bio-Chemical Engineering</option> */}
        </select>
      </div>
      <Button variant="secondary" type="submit">
        See Syllabus
      </Button>
    </div>
    </div>
    </div>
  );
}
