import React from 'react'
import "./studentRegistration.css"
import { useState } from 'react'

export default function studentRegistrationimproved(props) {
    const[ImageField,setImageField]=useState("https://www.pngitem.com/pimgs/b/508-5087236_profile-icon-png.png");
    const[formTitle,setFormtitle]=useState("Studentdetail")
    const setimage=(e)=>{
        var input = document.getElementById("ImageField");
        var fReader = new FileReader();
        fReader.readAsDataURL(input.files[0]);
        fReader.onloadend = function(event){
            var img = document.getElementById("imageuploaded");
            setImageField(event.target.result)
        }
    }
    const setform=(e)=>{
        setFormtitle(e.target.id)
    }
    const buttonstyleinactive={
        outline: 'none',
        border: 'none',
        padding: '8px 10px',
        borderRadius: '5px',
        background:'none',
        cursor: 'pointer',
        marginBottom:'5px'
    }
    const buttonstyleactive={
        outline: 'none',
        border: 'none',
        padding: '13px 10px',
        borderTopLeftRadius:'5px',
        borderTopRightRadius:'5px',
        borderBottomLeftRadius: '0px',
        borderBottomRightRadius: '0px',
        color:'var(--cpcoltable)',
        backgroundColor: 'var(--col1)',
        cursor: 'pointer',
        marginBottom:'0px'
    }

    document.title="Student Registration"
    return (
        <div className="student-registration">
            {/* <div className="form-main-heading">
                <h1>Student Registration</h1>
            </div> */}
            <div className="tabs container mt-4">
                <div className="buttons">
                <button id="Studentdetail" style={(formTitle==="Studentdetail"?buttonstyleactive:buttonstyleinactive)}className="ms-3" onClick={setform}>Student Detail</button>
                <button id="address" style={(formTitle==="address"?buttonstyleactive:buttonstyleinactive)}className="mx-3" onClick={setform}>Address</button>
                <button id="academicdetail" style={(formTitle==="academicdetail"?buttonstyleactive:buttonstyleinactive)}className="me-3"onClick={setform}>Academic Detail</button>
                <button id="familydetail" style={(formTitle==="familydetail"?buttonstyleactive:buttonstyleinactive)}className="me-3"onClick={setform}>Family Detail</button>
                <button id="qualifyingexam" style={(formTitle==="qualifyingexam"?buttonstyleactive:buttonstyleinactive)}onClick={setform}>Qualifying Exam</button>
                </div>
                
            </div>
            <form>
            <div className="form-body container" style={{display:(formTitle==="Studentdetail"?'block':'none')}}>
                <div className="academic-details ms-2">
                    <div className="academic-details-heading pt-2">
                        <h2>Academic Details</h2>
                    </div>
                    <div className="academic-details-input mt-3">
                        <div className="academicline1 ms-3">
                        <div className="roll-input mb-2">
                            <label htmlFor="RollNo" className="mb-2">University Roll No.</label>
                            <input type="text" name="" id="roll-no" />
                        </div>
                        <div className="programme mb-3">
                        <label htmlFor="Programme" className="mb-2">Programme</label>
                            <select htmlFor="Programme" id="programme">
                                <option value="select">--Select--</option>
                                <option value="Btech">BTech</option>
                                <option value="Mtech">MTech</option>
                                <option value="PHD">Phd</option>
                                <option value="MCA">MCA</option>
                                <option value="MBA">MBA</option>
                            </select>
                        </div>
                        <div className="admission-source mb-3">
                            <label htmlFor="AdmissionSource" className="mb-2">Admission Source</label>
                            <select htmlFor="AdmissionSource" id="admissionsource">
                                <option value="select">--Select--</option>
                                <option value="JEE Mains">JEE Mains</option>
                                <option value="JEE Mains govt">JEE Mains GOVT Nominee</option>
                                <option value="nimcet">NIMCET</option>
                                <option value="pmsss">PMSSS</option>
                                <option value="hbtuentrance">HBTU Entrance</option>
                                <option value="nriquota">NRI Quota</option>
                                <option value="otherscheme">Other Scheme</option>
                            </select>
                        
                        </div>
                        </div>
                        
                        <div className="academicline2 ms-3">
                        <div className="enroll-input mb-2">
                            <label htmlFor="EnrollmentNumber" className="mb-2">Enrollment Number</label>
                            <input type="text" name="" id="enrollment-no" /> 
                        </div>
                        <div className="branch mb-2">
                        <label htmlFor="Branch" className="mb-2">Branch</label>
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
                            <label htmlFor="CurrentSemester" className="mb-2">Current Semester</label>
                            <input type="text" name="" id="currentsemester" />
                            
                        </div>

                        </div>
                        <div className="academicline3">
                            <div className="instructions">
                                Supported Format:png,jpg,jpeg
                                Minimum File size:50Kb
                                Maximum File size:200Kb
                            </div>
                            <div className="imagedisplay">
                               <img src={ImageField} style={{position: "absolute", height: "150px", width: "150px", objectFit: "cover", padding: "10px",filter:(props.theme==="Black"?(ImageField==="https://www.pngitem.com/pimgs/b/508-5087236_profile-icon-png.png"?"invert(1)":"none"):"none")}} id="imageuploaded" alt="" />
                            </div>
                            <div style={{position: "relative", top: "150px"}} className="imageinput">
                                <input type="file" name="" id="ImageField" onChange={setimage}/>
                            </div>
                            <div style={{position: "relative", top: "150px"}} className="imageupload">
                                <button type="button" onClick={(e)=>console.log(ImageField)}>Upload Photo</button>
                            </div>
                            
                            
                        </div>
                        
                        </div>
                    </div>
                <div className="personal-details ms-2 mt-2">
                    <div className="personal-details-heading">
                        <h2>Personal Details</h2>
                    </div>
                    <div className="personal-details-input mt-3">
                        <div className="personalline1 ms-3">
                            <div className="englishname mb-3">
                            <label htmlFor="StudentName" className="mb-2">Student Name</label>
                            <input type="text" name="" id="studentname" />
                            </div>
                            <div className="dob mb-3">
                                <label htmlFor="DOB" className="mb-2">Date Of Birth</label>
                                <input type="date" name="" id="" />
                            </div>
                            <div className="contactnumber mb-3">
                                <label htmlFor="ContactNumber" className="mb-2">Contact</label>
                                <input type="text" name="" id="" />
                            </div>
                            <div className="hbtuemail mb-3">
                                <label htmlFor="HBTUEmail" className="mb-2">HBTU Email</label>
                                <input type="email" name="" id="" />
                            </div>
                            <div className="subcategoryinput mb-3">
                                <label htmlFor="SubCategory" className="mb-2">SubCategory</label>
                                <select htmlFor="SubCategory">
                                    <option value="select">--Select--</option>
                                    <option value="girl">Girl</option>
                                    <option value="af">AF</option>
                                    <option value="ff">FF</option>
                                    <option value="handicapped">Handicapped PH</option>
                                    <option value="not">Not Applicable</option>
                                </select>
                            </div>
                            <div className="bloodgroupinput mb-3">
                                <label htmlFor="BloodGroup" className="mb-2">Blood Group</label>
                                <input type="text" name="" id="" />
                            </div>
                            <div className="aadhaarinput mb-3">
                                <label htmlFor="Aadhaar" className="mb-2">Aadhaar Card Number</label>
                                <input type="text" name="" id="" />
                            </div>
                            <div className="nationalityinput mb-3">
                                <label htmlFor="Nationality" className="mb-2">Nationality</label>
                                <input type="text" name="" id="" />
                            </div>
                        </div>
                        <div className="personalline2 mx-3">
                            <div className="hindiname mb-3">
                                <label htmlFor="StudentHindiName" className="mb-2">Student Name in Hindi</label>
                                <input type="text" name="" id="" />
                            </div>
                            <div className="genderinput mb-3">
                                <label htmlFor="Gender" className="mb-2">Gender</label>
                                <input type="text" name="" id="" />
                            </div>
                            <div className="alternatecontactinput mb-3">
                                <label htmlFor="AlternateContact" className="mb-2">Alternate Contact</label>
                                <input type="text" name="" id="" />
                            </div>
                            <div className="personalemailinput mb-3">
                                <label htmlFor="PersonalEmail" className="mb-2">Personal Email</label>
                                <input type="text" name="" id="" />
                            </div>
                            <div className="categoryinput mb-3">
                                <label htmlFor="Category" className="mb-2">Category</label>
                                <select htmlFor="Category">
                                    <option value="select">--Select--</option>
                                    <option value="GEN">GEN</option>
                                    <option value="GENEWS">GEN-EWS</option>
                                    <option value="obc">OBC</option>
                                    <option value="sc">SC</option>
                                    <option value="st">ST</option>
                                    <option value="nri">NRI</option>
                                    <option value="obcncl">OBC-NCL</option>
                                    <option value="minority">Minority</option>
                                </select>
                            </div>
                            <div className="feewaiverinput mb-3">
                                <label htmlFor="FeeWaiver" className="mb-2">Fee Waiver</label>
                                <input type="text" name="" id="" />
                            </div>
                            <div className="hostelrequired mb-3">
                                <label htmlFor="Hostel" className="mb-2">Hostel Required</label>
                                <select htmlFor="Hostel">
                                    <option value="select">--Select--</option>
                                    <option value="yes">Yes</option>
                                    <option value="no">No</option>
                                </select>
                            </div>
                            <div className="transportmodeinput mb-3">
                                <label htmlFor="Mode" className="mb-2">Mode Of Transport</label>
                                <select htmlFor="Mode">
                                    <option value="select">--Select--</option>
                                    <option value="Bus">Bus</option>
                                    <option value="pickedup">Picked Up</option>
                                    <option value="walker">Walker</option>
                                </select>
                            </div>
                            <div className="religioninput mb-3">
                                <label htmlFor="Releigion" className="mb-2">Religion</label>
                                <input type="text" name="" id="" />
                            </div>
                            
                        </div>
                    </div>
                </div>
                <div className="entranceexamdetails ms-2 mt-2">
                    <div className="entranceexamheading">
                        <h2>Entrance Examination Details</h2>
                    </div>
                    <div className="entrance-exam-input mt-3">
                        <div className="entranceline1 ms-3">
                            <div className="entranceexaminput mb-3">
                                <label htmlFor="EntranceExam" className="mb-2">Entrane Exam</label>
                                <input type="text"name="" id="" />
                            </div>
                            <div className="applicationno mb-3">
                                <label htmlFor="ApplicationNo" className="mb-2">Roll No./Application No.</label>
                                <input type="text" name="" id="" />
                            </div>
                            <div className="categoryrank mb-3">
                                <label htmlFor="CategoryRank" className="mb-2">Category Rank</label>
                                <input type="text" />
                            </div>
                        </div>
                        <div className="entranceline2 mx-3">
                            <div className="yearinput mb-3">
                                <label htmlFor="YearInput" className="mb-2">Year</label>
                                <input type="text" name="" id="" />
                            </div>
                            <div className="airrank mb-3">
                                <label htmlFor="AIRRank" className="mb-2">AIR Rank</label>
                                <input type="text" name="" id="" />
                            </div>
                            <div className="seatcategoryinput mb-3">
                                <label htmlFor="SeatCategory" className="mb-2">Seat Allot in Category</label>
                                <select htmlFor="SeatCategory"name="" id="">
                                    <option value="">--Select--</option>
                                    <option value="">BC-PH</option>
                                    <option value="">OBC-NCL</option>
                                    <option value="">OPEN</option>
                                    <option value="">OPEN-EWS</option>
                                    <option value="">OPEN-EWS-PH</option>
                                    <option value="">OPEN-PH</option>
                                    <option value="">OPEN-TFW</option>
                                    <option value="">SC</option>
                                    <option value="">SC-PH</option>
                                    <option value="">ST</option>
                                    <option value="">ST-PH</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="parentsdetails ms-2 mt-2">
                    <div className="parentsdetailsheading">
                        <h2>Parent's Details</h2>
                    </div>
                    <div className="parent-detail-input mt-3">
                     <div className="parentline1 ms-3">
                         <div className="fathername mb-3">
                             <label htmlFor="FatherName" className="mb-2">Father's Name</label>
                             <input type="text" name="" id="" />
                         </div>
                         <div className="mothername mb-3">
                             <label htmlFor="MotherName" className="mb-2">Mother's Name</label>
                             <input type="text" />
                         </div>
                     </div>
                     <div className="parentline2 mx-3">
                         <div className="fathercontact mb-3">
                             <label htmlFor="FatherContact" className="mb-2">Father's Contact Number</label>
                             <input type="text" name="" id="" />
                         </div>
                         <div className="landline mb-3">
                             <label htmlFor="Landline" className="mb-2">LandLine Number</label>
                             <input type="text" />
                         </div>
                         <div className="parentemailid mb-3">
                             <label htmlFor="ParentEmailID" className="mb-2">Parent's Email ID</label>
                             <input type="email" name="" id="" />
                         </div>
                     </div>
                    </div>
                </div>
                

            </div>
            <div className="form-body container" style={{display:(formTitle==="address"?'block':'none')}}>
            <div className="addressdetailscurrent ms-2">
                    <div className="currentaddressheading pt-2">
                        <h2>Current Address</h2>
                    </div>
                    <div className="address-input mt-3">
                    <div className="curraddressline1 ms-3">
                        <div className="addressline1 mb-3">
                            <label htmlFor="AddressLine1" className="mb-2">Address Line 1</label>
                            <input type="text" name="" id="" />
                        </div>
                        <div className="addressline2 mb-3">
                            <label htmlFor="AddressLine2" className="mb-2">Address Line 2</label>
                            <input type="text" name="" id="" />
                        </div>
                        <div className="zipcode">
                            <label htmlFor="Zipcode" className="mb-2">ZipCode</label>
                            <input type="text" />
                        </div>
                    </div>
                    <div className="curraddressline2">
                        <div className="city mb-3">
                            <label htmlFor="City" className="mb-2">City</label>
                            <select htmlFor="City">
                                <option value="select">--Select--</option>
                                <option value="">Kanpur</option>
                                <option value="">Lucknow</option>
                                <option value="">Allahabad</option>
                                <option value="">Vrindavan</option>
                                <option value="">Kanpur</option>
                                <option value="">Kanpur</option>
                            </select>

                        </div>
                        <div className="state mb-3">
                            <label htmlFor="State" className="mb-2">State/District</label>
                            <select htmlFor="State">
                                <option value="select">--Select--</option>
                                <option value="">Andhra Pradesh</option>
                                <option value="">Arunachal Pradesh</option>
                                <option value="">Assam</option>
                                <option value="">Bihar</option>
                                <option value="">Chandigarh</option>
                                <option value="">Chennai</option>
                                <option value="">Chattisgarh</option>
                                <option value="">Dadra and nager haveli</option>
                                <option value="">Daman and Diu</option>
                                <option value="">Goa</option>
                                <option value="">Gujarat</option>
                                <option value="">Haryana</option>
                                <option value="">Himachal Pradesh</option>
                                <option value="">Jammu and kashmir</option>
                                <option value="">Uttar Pradesh</option>
                            </select>
                        </div>
                        <div className="country mb-3">
                            <label htmlFor="Country" className="mb-2">Country</label>
                            <select htmlFor="Country"name="" id="">
                                <option value="select">--Select--</option>
                                <option value="india">India</option>
                                <option value="srilanka">Sri Lanka</option>
                            </select>
                        </div>
                    </div>

                </div>

                    </div>
                    <div className="permanentaddress ms-2">
                        <div className="permanentaddressheading pt-3 ">
                            <div className="headingcontent">
                            <h2>Permanent Address</h2>

                            </div>
                            
                            <div className="checkbox ms-2">
                            <input type="checkbox" name="CheckBox" id="checkbox1" />
                            <label htmlFor="checkbox1" className="ms-1">If Permanent Address is same as current address</label>
                            </div>
                        </div>
                        <div className="permanent-address-input">
                            <div className="permanentaddressline1 ms-2">
                                <div className="addressline1 mb-3">
                                    <label htmlFor="AddressLine1" className="mb-2">Address Line 1</label>
                                    <input type="text" />
                                </div>
                                <div className="addressline2 mb-3">
                                    <label htmlFor="Addressline2" className="mb-2">Address Line 2</label>
                                    <input type="text" />
                                </div>
                                <div className="zipcode mb-3">
                                    <label htmlFor="Zipcode" className="mb-2">ZipCode</label>
                                    <input type="text" />
                                </div>
                            </div>
                            <div className="permanentaddressline2 ms-2">
                            <div className="city mb-3">
                            <label htmlFor="City" className="mb-2">City</label>
                            <select htmlFor="City">
                                <option value="select">--Select--</option>
                                <option value="">Kanpur</option>
                                <option value="">Lucknow</option>
                                <option value="">Allahabad</option>
                                <option value="">Vrindavan</option>
                                <option value="">Kanpur</option>
                                <option value="">Kanpur</option>
                            </select>
                            </div>
                        <div className="state mb-3">
                            <label htmlFor="State" className="mb-2">State/District</label>
                            <select htmlFor="State">
                                <option value="select">--Select--</option>
                                <option value="">Andhra Pradesh</option>
                                <option value="">Arunachal Pradesh</option>
                                <option value="">Assam</option>
                                <option value="">Bihar</option>
                                <option value="">Chandigarh</option>
                                <option value="">Chennai</option>
                                <option value="">Chattisgarh</option>
                                <option value="">Dadra and nager haveli</option>
                                <option value="">Daman and Diu</option>
                                <option value="">Goa</option>
                                <option value="">Gujarat</option>
                                <option value="">Haryana</option>
                                <option value="">Himachal Pradesh</option>
                                <option value="">Jammu and kashmir</option>
                                <option value="">Uttar Pradesh</option>
                            </select>
                        </div>
                        <div className="country mb-3">
                            <label htmlFor="Country" className="mb-2">Country</label>
                            <select htmlFor="Country"name="" id="">
                                <option value="select">--Select--</option>
                                <option value="india">India</option>
                                <option value="srilanka">Sri Lanka</option>
                            </select>
                        </div>
                            </div>
                        </div>
                    </div>
                    
            </div>
            <div className="form-body container" style={{display:(formTitle==="academicdetail"?'block':'none')}}>
                <div className="schoolingdetails ms-2">
                    <div className="schoolingdetailsheading pt-2">
                        <h2>High School</h2>
                    </div>
                    <div className="highschool-detail-input mt-3">
                        <div className="highschoolline1 ms-2">
                            <div className="board mb-3">
                                <label htmlFor="Board" className="mb-2">Board/University</label>
                                <select htmlFor="Board">
                                    <option value="icse">ICSE</option>
                                    <option value="cbse">CBSE</option>
                                    <option value="upboard">UP Board</option>
                                </select>
                            </div>
                            <div className="rollno mb-3">
                                <label htmlFor="RollNo" className="mb-2">Roll No.</label>
                                <input type="text" />
                            </div>
                            <div className="year mb-3">
                                <label htmlFor="Year" className="mb-2">Year</label>
                                <input type="text" />
                            </div>
                        </div>
                        <div className="highschoolline2 ms-2">
                            <div className="nameofinstitute mb-3">
                                <label htmlFor="Institute Name" className="mb-2">Name of Institution </label>
                                <input type="text" />
                            </div>
                            <div className="division mb-3">
                                <label htmlFor="Division" className="mb-2">Division</label>
                                <input type="text" />
                            </div>
                            <div className="subjects mb-3">
                                <label htmlFor="Subjects" className="mb-2">Subjects</label>
                                <input type="text" />
                            </div>
                        </div>
                    </div>

                </div>        
                <div className="schoolingdetails ms-2">
                    <div className="schoolingdetailsheading pt-2">
                        <h2>Intermediate</h2>
                    </div>
                    <div className="highschool-detail-input mt-3">
                        <div className="highschoolline1 ms-2">
                            <div className="board mb-3">
                                <label htmlFor="Board" className="mb-2">Board/University</label>
                                <select htmlFor="Board">
                                    <option value="icse">ISC</option>
                                    <option value="cbse">CBSE</option>
                                    <option value="upboard">UP Board</option>
                                </select>
                            </div>
                            <div className="rollno mb-3">
                                <label htmlFor="RollNo" className="mb-2">Roll No.</label>
                                <input type="text" />
                            </div>
                            <div className="year mb-3">
                                <label htmlFor="Year" className="mb-2">Year</label>
                                <input type="text" />
                            </div>
                        </div>
                        <div className="highschoolline2 ms-2">
                            <div className="nameofinstitute mb-3">
                                <label htmlFor="Institute Name" className="mb-2">Name of Institution </label>
                                <input type="text" />
                            </div>
                            <div className="division mb-3">
                                <label htmlFor="Division" className="mb-2">Division</label>
                                <input type="text" />
                            </div>
                            <div className="subjects mb-3">
                                <label htmlFor="Subjects" className="mb-2">Subjects</label>
                                <input type="text" />
                            </div>
                        </div>
                    </div>

                </div>        
                <div className="schoolingdetails ms-2">
                    <div className="schoolingdetailsheading pt-2">
                        <h2>BSC</h2>
                    </div>
                    <div className="highschool-detail-input mt-3">
                        <div className="highschoolline1 ms-2">
                            <div className="board mb-3">
                                <label htmlFor="Board" className="mb-2">Board/University</label>
                                <select htmlFor="Board">
                                    <option value="icse">ICSE</option>
                                    <option value="cbse">CBSE</option>
                                    <option value="upboard">UP Board</option>
                                </select>
                            </div>
                            <div className="rollno mb-3">
                                <label htmlFor="RollNo" className="mb-2">Roll No.</label>
                                <input type="text" />
                            </div>
                            <div className="year mb-3">
                                <label htmlFor="Year" className="mb-2">Year</label>
                                <input type="text" />
                            </div>
                        </div>
                        <div className="highschoolline2 ms-2">
                            <div className="nameofinstitute mb-3">
                                <label htmlFor="Institute Name" className="mb-2">Name of Institution </label>
                                <input type="text" />
                            </div>
                            <div className="division mb-3">
                                <label htmlFor="Division" className="mb-2">Division</label>
                                <input type="text" />
                            </div>
                            <div className="subjects mb-3">
                                <label htmlFor="Subjects" className="mb-2">Subjects</label>
                                <input type="text" />
                            </div>
                        </div>
                    </div>

                </div>        
                <div className="schoolingdetails ms-2">
                    <div className="schoolingdetailsheading pt-2">
                        <h2>Mtech</h2>
                    </div>
                    <div className="highschool-detail-input mt-3">
                        <div className="highschoolline1 ms-2">
                            <div className="board mb-3">
                                <label htmlFor="Board" className="mb-2">Board/University</label>
                                <select htmlFor="Board">
                                    <option value="icse">ICSE</option>
                                    <option value="cbse">CBSE</option>
                                    <option value="upboard">UP Board</option>
                                </select>
                            </div>
                            <div className="rollno mb-3">
                                <label htmlFor="RollNo" className="mb-2">Roll No.</label>
                                <input type="text" />
                            </div>
                            <div className="year mb-3">
                                <label htmlFor="Year" className="mb-2">Year</label>
                                <input type="text" />
                            </div>
                        </div>
                        <div className="highschoolline2 ms-2">
                            <div className="nameofinstitute mb-3">
                                <label htmlFor="Institute Name" className="mb-2">Name of Institution </label>
                                <input type="text" />
                            </div>
                            <div className="division mb-3">
                                <label htmlFor="Division" className="mb-2">Division</label>
                                <input type="text" />
                            </div>
                            <div className="subjects mb-3">
                                <label htmlFor="Subjects" className="mb-2">Subjects</label>
                                <input type="text" />
                            </div>
                        </div>
                    </div>

                </div>        
                <div className="schoolingdetails ms-2">
                    <div className="schoolingdetailsheading pt-2">
                        <h2>Btech</h2>
                    </div>
                    <div className="highschool-detail-input mt-3">
                        <div className="highschoolline1 ms-2">
                            <div className="board mb-3">
                                <label htmlFor="Board" className="mb-2">Board/University</label>
                                <select htmlFor="Board">
                                    <option value="icse">ICSE</option>
                                    <option value="cbse">CBSE</option>
                                    <option value="upboard">UP Board</option>
                                </select>
                            </div>
                            <div className="rollno mb-3">
                                <label htmlFor="RollNo" className="mb-2">Roll No.</label>
                                <input type="text" />
                            </div>
                            <div className="year mb-3">
                                <label htmlFor="Year" className="mb-2">Year</label>
                                <input type="text" />
                            </div>
                        </div>
                        <div className="highschoolline2 ms-2">
                            <div className="nameofinstitute mb-3">
                                <label htmlFor="Institute Name" className="mb-2">Name of Institution </label>
                                <input type="text" />
                            </div>
                            <div className="division mb-3">
                                <label htmlFor="Division" className="mb-2">Division</label>
                                <input type="text" />
                            </div>
                            <div className="subjects mb-3">
                                <label htmlFor="Subjects" className="mb-2">Subjects</label>
                                <input type="text" />
                            </div>
                        </div>
                    </div>

                </div>        
                <div className="schoolingdetails ms-2">
                    <div className="schoolingdetailsheading pt-2">
                        <h2>MCA</h2>
                    </div>
                    <div className="highschool-detail-input mt-3">
                        <div className="highschoolline1 ms-2">
                            <div className="board mb-3">
                                <label htmlFor="Board" className="mb-2">Board/University</label>
                                <select htmlFor="Board">
                                    <option value="icse">ICSE</option>
                                    <option value="cbse">CBSE</option>
                                    <option value="upboard">UP Board</option>
                                </select>
                            </div>
                            <div className="rollno mb-3">
                                <label htmlFor="RollNo" className="mb-2">Roll No.</label>
                                <input type="text" />
                            </div>
                            <div className="year mb-3">
                                <label htmlFor="Year" className="mb-2">Year</label>
                                <input type="text" />
                            </div>
                        </div>
                        <div className="highschoolline2 ms-2">
                            <div className="nameofinstitute mb-3">
                                <label htmlFor="Institute Name" className="mb-2">Name of Institution </label>
                                <input type="text" />
                            </div>
                            <div className="division mb-3">
                                <label htmlFor="Division" className="mb-2">Division</label>
                                <input type="text" />
                            </div>
                            <div className="subjects mb-3">
                                <label htmlFor="Subjects" className="mb-2">Subjects</label>
                                <input type="text" />
                            </div>
                        </div>
                    </div>

                </div>        
                <div className="schoolingdetails ms-2">
                    <div className="schoolingdetailsheading pt-2">
                        <h2>MSC</h2>
                    </div>
                    <div className="highschool-detail-input mt-3">
                        <div className="highschoolline1 ms-2">
                            <div className="board mb-3">
                                <label htmlFor="Board" className="mb-2">Board/University</label>
                                <select htmlFor="Board">
                                    <option value="icse">ICSE</option>
                                    <option value="cbse">CBSE</option>
                                    <option value="upboard">UP Board</option>
                                </select>
                            </div>
                            <div className="rollno mb-3">
                                <label htmlFor="RollNo" className="mb-2">Roll No.</label>
                                <input type="text" />
                            </div>
                            <div className="year mb-3">
                                <label htmlFor="Year" className="mb-2">Year</label>
                                <input type="text" />
                            </div>
                        </div>
                        <div className="highschoolline2 ms-2">
                            <div className="nameofinstitute mb-3">
                                <label htmlFor="Institute Name" className="mb-2">Name of Institution </label>
                                <input type="text" />
                            </div>
                            <div className="division mb-3">
                                <label htmlFor="Division" className="mb-2">Division</label>
                                <input type="text" />
                            </div>
                            <div className="subjects mb-3">
                                <label htmlFor="Subjects" className="mb-2">Subjects</label>
                                <input type="text" />
                            </div>
                        </div>
                    </div>

                </div>        
                <div className="schoolingdetails ms-2">
                    <div className="schoolingdetailsheading pt-2">
                        <h2>BCA</h2>
                    </div>
                    <div className="highschool-detail-input mt-3">
                        <div className="highschoolline1 ms-2">
                            <div className="board mb-3">
                                <label htmlFor="Board" className="mb-2">Board/University</label>
                                <select htmlFor="Board">
                                    <option value="icse">ICSE</option>
                                    <option value="cbse">CBSE</option>
                                    <option value="upboard">UP Board</option>
                                </select>
                            </div>
                            <div className="rollno mb-3">
                                <label htmlFor="RollNo" className="mb-2">Roll No.</label>
                                <input type="text" />
                            </div>
                            <div className="year mb-3">
                                <label htmlFor="Year" className="mb-2">Year</label>
                                <input type="text" />
                            </div>
                        </div>
                        <div className="highschoolline2 ms-2">
                            <div className="nameofinstitute mb-3">
                                <label htmlFor="Institute Name" className="mb-2">Name of Institution </label>
                                <input type="text" />
                            </div>
                            <div className="division mb-3">
                                <label htmlFor="Division" className="mb-2">Division</label>
                                <input type="text" />
                            </div>
                            <div className="subjects mb-3">
                                <label htmlFor="Subjects" className="mb-2">Subjects</label>
                                <input type="text" />
                            </div>
                        </div>
                    </div>

                </div>        
            </div>
            <div className="form-body container" style={{display:(formTitle==="familydetail"?'block':'none')}}>   
                  <div className="familydetais ms-2">
                      <div className="familydetailheading pt-3">
                          <h2>Member 1</h2>
                      </div>
                      <div className="family-detail-input mt-3">
                        <div className="familydetailline1">
                            <div className="membername mb-3">
                                <label htmlFor="Member Name" className="mb-2">Name</label>
                                <input type="text" />
                            </div>
                            <div className="relationship mb-3">
                                <label htmlFor="Relationship" className="mb-2">Relationship</label>
                                <select htmlFor="Relationship" name="" id="">
                                    <option value="select">--Select--</option>
                                    <option value="father">Father</option>
                                    <option value="mother">Mother</option>
                                    <option value="brother">Brother</option>
                                    <option value="sister">Sister</option>
                                    <option value="localguardian">Local Guardian</option>
                                    <option value="sister">Sister</option>
                                </select>
                            </div>
                            <div className="ageinput mb-3">
                                <label htmlFor="Age" className="mb-2">Age</label>
                                <input type="text" />
                            </div>
                            <div className="familyaddressinput mb-3">
                                <label htmlFor="Address" className="mb-2">Address</label>
                                <input type="text" />
                            </div>
                            <div className="eduqualification mb-3">
                                <label htmlFor="eduqualification" className="mb-2">Educational Qualification</label>
                                <input type="text" />
                            </div>
                            </div>
                            <div className="familydetailline2">
                            <div className="proqualification mb-3">
                                <label htmlFor="proqualification" className="mb-2">Professional Qualification</label>
                                <input type="text" />
                            </div>
                            <div className="earningstatus mb-3">
                                <label htmlFor="status" className="mb-2">Earning Status</label>
                                <select htmlFor="status">
                                    <option value="select">--Select--</option>
                                    <option value="working">Working</option>
                                    <option value="retired">Retired</option>
                                    <option value="studying">Studying</option>
                                </select>
                            </div>
                            <div className="occupation mb-3">
                                <label htmlFor="occupation" className="mb-2">Occupation</label>
                                <select htmlFor="occupation"name="" id="">
                                    <option value="select">--Select--</option>
                                    <option value="">Service</option>
                                    <option value="">Buiseness</option>
                                    <option value="">Student</option>
                                    <option value="">Agriculture</option>
                                </select>
                            </div>
                            <div className="organization mb-3">
                                <label htmlFor="Organization" className="mb-2">Organization</label>
                                <input type="text" />
                            </div>
                            <div className="incomepermonth mb-3">
                                <label htmlFor="Income" className="mb-2">Income Per Month</label>
                                <input type="text" />
                            </div>

                         </div>

                        </div>
                      </div>
                  <div className="familydetais ms-2">
                      <div className="familydetailheading pt-3">
                          <h2>Member 2</h2>
                      </div>
                      <div className="family-detail-input mt-3">
                        <div className="familydetailline1">
                            <div className="membername mb-3">
                                <label htmlFor="Member Name" className="mb-2">Name</label>
                                <input type="text" />
                            </div>
                            <div className="relationship mb-3">
                                <label htmlFor="Relationship" className="mb-2">Relationship</label>
                                <select htmlFor="Relationship" name="" id="">
                                    <option value="select">--Select--</option>
                                    <option value="father">Father</option>
                                    <option value="mother">Mother</option>
                                    <option value="brother">Brother</option>
                                    <option value="sister">Sister</option>
                                    <option value="localguardian">Local Guardian</option>
                                    <option value="sister">Sister</option>
                                </select>
                            </div>
                            <div className="ageinput mb-3">
                                <label htmlFor="Age" className="mb-2">Age</label>
                                <input type="text" />
                            </div>
                            <div className="familyaddressinput mb-3">
                                <label htmlFor="Address" className="mb-2">Address</label>
                                <input type="text" />
                            </div>
                            <div className="eduqualification mb-3">
                                <label htmlFor="eduqualification" className="mb-2">Educational Qualification</label>
                                <input type="text" />
                            </div>
                            </div>
                            <div className="familydetailline2">
                            <div className="proqualification mb-3">
                                <label htmlFor="proqualification" className="mb-2">Professional Qualification</label>
                                <input type="text" />
                            </div>
                            <div className="earningstatus mb-3">
                                <label htmlFor="status" className="mb-2">Earning Status</label>
                                <select htmlFor="status">
                                    <option value="select">--Select--</option>
                                    <option value="working">Working</option>
                                    <option value="retired">Retired</option>
                                    <option value="studying">Studying</option>
                                </select>
                            </div>
                            <div className="occupation mb-3">
                                <label htmlFor="occupation" className="mb-2">Occupation</label>
                                <select htmlFor="occupation"name="" id="">
                                    <option value="select">--Select--</option>
                                    <option value="">Service</option>
                                    <option value="">Buiseness</option>
                                    <option value="">Student</option>
                                    <option value="">Agriculture</option>
                                </select>
                            </div>
                            <div className="organization mb-3">
                                <label htmlFor="Organization" className="mb-2">Organization</label>
                                <input type="text" />
                            </div>
                            <div className="incomepermonth mb-3">
                                <label htmlFor="Income" className="mb-2">Income Per Month</label>
                                <input type="text" />
                            </div>

                         </div>

                        </div>
                      </div>
                  <div className="familydetais ms-2">
                      <div className="familydetailheading pt-3">
                          <h2>Member 3</h2>
                      </div>
                      <div className="family-detail-input mt-3">
                        <div className="familydetailline1">
                            <div className="membername mb-3">
                                <label htmlFor="Member Name" className="mb-2">Name</label>
                                <input type="text" />
                            </div>
                            <div className="relationship mb-3">
                                <label htmlFor="Relationship" className="mb-2">Relationship</label>
                                <select htmlFor="Relationship" name="" id="">
                                    <option value="select">--Select--</option>
                                    <option value="father">Father</option>
                                    <option value="mother">Mother</option>
                                    <option value="brother">Brother</option>
                                    <option value="sister">Sister</option>
                                    <option value="localguardian">Local Guardian</option>
                                    <option value="sister">Sister</option>
                                </select>
                            </div>
                            <div className="ageinput mb-3">
                                <label htmlFor="Age" className="mb-2">Age</label>
                                <input type="text" />
                            </div>
                            <div className="familyaddressinput mb-3">
                                <label htmlFor="Address" className="mb-2">Address</label>
                                <input type="text" />
                            </div>
                            <div className="eduqualification mb-3">
                                <label htmlFor="eduqualification" className="mb-2">Educational Qualification</label>
                                <input type="text" />
                            </div>
                            </div>
                            <div className="familydetailline2">
                            <div className="proqualification mb-3">
                                <label htmlFor="proqualification" className="mb-2">Professional Qualification</label>
                                <input type="text" />
                            </div>
                            <div className="earningstatus mb-3">
                                <label htmlFor="status" className="mb-2">Earning Status</label>
                                <select htmlFor="status">
                                    <option value="select">--Select--</option>
                                    <option value="working">Working</option>
                                    <option value="retired">Retired</option>
                                    <option value="studying">Studying</option>
                                </select>
                            </div>
                            <div className="occupation mb-3">
                                <label htmlFor="occupation" className="mb-2">Occupation</label>
                                <select htmlFor="occupation"name="" id="">
                                    <option value="select">--Select--</option>
                                    <option value="">Service</option>
                                    <option value="">Buiseness</option>
                                    <option value="">Student</option>
                                    <option value="">Agriculture</option>
                                </select>
                            </div>
                            <div className="organization mb-3">
                                <label htmlFor="Organization" className="mb-2">Organization</label>
                                <input type="text" />
                            </div>
                            <div className="incomepermonth mb-3">
                                <label htmlFor="Income" className="mb-2">Income Per Month</label>
                                <input type="text" />
                            </div>

                         </div>

                        </div>
                      </div>
                  <div className="familydetais ms-2">
                      <div className="familydetailheading pt-3">
                          <h2>Member 4</h2>
                      </div>
                      <div className="family-detail-input mt-3">
                        <div className="familydetailline1">
                            <div className="membername mb-3">
                                <label htmlFor="Member Name" className="mb-2">Name</label>
                                <input type="text" />
                            </div>
                            <div className="relationship mb-3">
                                <label htmlFor="Relationship" className="mb-2">Relationship</label>
                                <select htmlFor="Relationship" name="" id="">
                                    <option value="select">--Select--</option>
                                    <option value="father">Father</option>
                                    <option value="mother">Mother</option>
                                    <option value="brother">Brother</option>
                                    <option value="sister">Sister</option>
                                    <option value="localguardian">Local Guardian</option>
                                    <option value="sister">Sister</option>
                                </select>
                            </div>
                            <div className="ageinput mb-3">
                                <label htmlFor="Age" className="mb-2">Age</label>
                                <input type="text" />
                            </div>
                            <div className="familyaddressinput mb-3">
                                <label htmlFor="Address" className="mb-2">Address</label>
                                <input type="text" />
                            </div>
                            <div className="eduqualification mb-3">
                                <label htmlFor="eduqualification" className="mb-2">Educational Qualification</label>
                                <input type="text" />
                            </div>
                            </div>
                            <div className="familydetailline2">
                            <div className="proqualification mb-3">
                                <label htmlFor="proqualification" className="mb-2">Professional Qualification</label>
                                <input type="text" />
                            </div>
                            <div className="earningstatus mb-3">
                                <label htmlFor="status" className="mb-2">Earning Status</label>
                                <select htmlFor="status">
                                    <option value="select">--Select--</option>
                                    <option value="working">Working</option>
                                    <option value="retired">Retired</option>
                                    <option value="studying">Studying</option>
                                </select>
                            </div>
                            <div className="occupation mb-3">
                                <label htmlFor="occupation" className="mb-2">Occupation</label>
                                <select htmlFor="occupation"name="" id="">
                                    <option value="select">--Select--</option>
                                    <option value="">Service</option>
                                    <option value="">Buiseness</option>
                                    <option value="">Student</option>
                                    <option value="">Agriculture</option>
                                </select>
                            </div>
                            <div className="organization mb-3">
                                <label htmlFor="Organization" className="mb-2">Organization</label>
                                <input type="text" />
                            </div>
                            <div className="incomepermonth mb-3">
                                <label htmlFor="Income" className="mb-2">Income Per Month</label>
                                <input type="text" />
                            </div>

                         </div>

                        </div>
                      </div>
                  <div className="familydetais ms-2">
                      <div className="familydetailheading pt-3">
                          <h2>Member 5</h2>
                      </div>
                      <div className="family-detail-input mt-3">
                        <div className="familydetailline1">
                            <div className="membername mb-3">
                                <label htmlFor="Member Name" className="mb-2">Name</label>
                                <input type="text" />
                            </div>
                            <div className="relationship mb-3">
                                <label htmlFor="Relationship" className="mb-2">Relationship</label>
                                <select htmlFor="Relationship" name="" id="">
                                    <option value="select">--Select--</option>
                                    <option value="father">Father</option>
                                    <option value="mother">Mother</option>
                                    <option value="brother">Brother</option>
                                    <option value="sister">Sister</option>
                                    <option value="localguardian">Local Guardian</option>
                                    <option value="sister">Sister</option>
                                </select>
                            </div>
                            <div className="ageinput mb-3">
                                <label htmlFor="Age" className="mb-2">Age</label>
                                <input type="text" />
                            </div>
                            <div className="familyaddressinput mb-3">
                                <label htmlFor="Address" className="mb-2">Address</label>
                                <input type="text" />
                            </div>
                            <div className="eduqualification mb-3">
                                <label htmlFor="eduqualification" className="mb-2">Educational Qualification</label>
                                <input type="text" />
                            </div>
                            </div>
                            <div className="familydetailline2">
                            <div className="proqualification mb-3">
                                <label htmlFor="proqualification" className="mb-2">Professional Qualification</label>
                                <input type="text" />
                            </div>
                            <div className="earningstatus mb-3">
                                <label htmlFor="status" className="mb-2">Earning Status</label>
                                <select htmlFor="status">
                                    <option value="select">--Select--</option>
                                    <option value="working">Working</option>
                                    <option value="retired">Retired</option>
                                    <option value="studying">Studying</option>
                                </select>
                            </div>
                            <div className="occupation mb-3">
                                <label htmlFor="occupation" className="mb-2">Occupation</label>
                                <select htmlFor="occupation"name="" id="">
                                    <option value="select">--Select--</option>
                                    <option value="">Service</option>
                                    <option value="">Buiseness</option>
                                    <option value="">Student</option>
                                    <option value="">Agriculture</option>
                                </select>
                            </div>
                            <div className="organization mb-3">
                                <label htmlFor="Organization" className="mb-2">Organization</label>
                                <input type="text" />
                            </div>
                            <div className="incomepermonth mb-3">
                                <label htmlFor="Income" className="mb-2">Income Per Month</label>
                                <input type="text" />
                            </div>

                         </div>

                        </div>
                      </div>
                  </div>
            <div className="form-body container" style={{display:(formTitle==="qualifyingexam"?'block':'none')}}>
                <div className="physics ms-2">
                    <div className="physicsheading pt-3">
                        <h2>Marks in Physics</h2>
                    </div>
                    <div className="physics-marks-input mt-3">
                        <div className="physicsline1 ms-2">
                            <div className="obtainedmarks mb-3">
                                <label htmlFor="ObtainedMarks" className="mb-2">Marks Obtained</label>
                                <input type="text" />
                            </div>
                        </div>
                        <div className="physicsline2 mb-3">
                            <div className="totalmarks mb-3">
                                <label htmlFor="TotalMarks" className="mb-2">Total Marks</label>
                                <input type="text" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="physics ms-2">
                    <div className="physicsheading pt-3">
                        <h2>Marks in Chemistry</h2>
                    </div>
                    <div className="physics-marks-input mt-3">
                        <div className="physicsline1 ms-2">
                            <div className="obtainedmarks mb-3">
                                <label htmlFor="ObtainedMarks"  className="mb-2">Marks Obtained</label>
                                <input type="text" />
                            </div>
                        </div>
                        <div className="physicsline2 ms-2">
                            <div className="totalmarks mb-3" >
                                <label htmlFor="TotalMarks" className="mb-2">Total Marks</label>
                                <input type="text" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="physics ms-2">
                    <div className="physicsheading pt-3">
                        <h2>Marks in Maths</h2>
                    </div>
                    <div className="physics-marks-input mt-3">
                        <div className="physicsline1 ms-2">
                            <div className="obtainedmarks mb-3">
                                <label htmlFor="ObtainedMarks" className="mb-2">Marks Obtained</label>
                                <input type="text" />
                            </div>
                        </div>
                        <div className="physicsline2 ms-2">
                            <div className="totalmarks mb-3" >
                                <label htmlFor="TotalMarks" className="mb-2">Total Marks</label>
                                <input type="text" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="percentage mb-3 ms-2">
                        <div className="percentageheading pt-3 mb-3">
                            <h2>Percentage</h2>
                            <input type="text" />
                        </div>
                </div>

            </div>
            </form>
            </div>

            

    )
}