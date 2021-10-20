import React from 'react'
import "./studentRegistration.css"
import { useState ,useEffect,useRef} from 'react'

export default function studentRegistration(props) {
    const[PhotoField,setPhotoField]=useState(props.data.Photo);
    const[formTitle,setFormtitle]=useState("Studentdetail")
    const[response,setResponse]=useState("")
    const setPhoto=(e)=>{
        var input = document.getElementById("PhotoField");
        var fReader = new FileReader();
        fReader.readAsDataURL(input.files[0]);
        fReader.onloadend = function(event){
            setPhotoField(event.target.result)
        }
    }

    // JS Object to Save Form Details

    const[FormDetails , setFormDetails]=useState({
        UniversityRollNo:props.data.IsformSaved?props.data.UniversityRollNo:"",
        Programme:props.data.IsformSaved?props.data.Programme:"",
        AdmissionSource:props.data.IsformSaved?props.data.AdmissionSource:"",
        EnrollmentNumber:props.data.IsformSaved?props.data.EnrollmentNumber:"",
        Branch:props.data.IsformSaved?props.data.Branch:"",
        CurrentSemester:props.data.IsformSaved?props.data.CurrentSemester:"",
        StudentName:props.data.IsformSaved?props.data.StudentName:"",
        DateOfBirth:props.data.IsformSaved?props.data.DateOfBirth:"2001-1-1",
        Contact:props.data.IsformSaved?props.data.Contact:"",
        HBTUEmail:props.data.IsformSaved?props.data.HBTUEmail:"",
        SubCategory:props.data.IsformSaved?props.data.SubCategory:"",
        BloodGroup:props.data.IsformSaved?props.data.BloodGroup:"",
        AadhaarCard:props.data.IsformSaved?props.data.AadhaarCard:"",
        Nationality:props.data.IsformSaved?props.data.Nationality:"",
        StudentNameHindi:props.data.IsformSaved?props.data.StudentNameHindi:"",
        Gender:props.data.IsformSaved?props.data.Gender:"",
        AlternateContact:props.data.IsformSaved?props.data.AlternateContact:"",
        PersonalEmail:props.data.IsformSaved?props.data.PersonalEmail:"",
        Category:props.data.IsformSaved?props.data.Category:"",
        FeeWaiver:props.data.IsformSaved?props.data.FeeWaiver:"",
        Hostel:props.data.IsformSaved?props.data.Hostel:"",
        ModeOfTransport:props.data.IsformSaved?props.data.ModeOfTransport:"",
        Religion:props.data.IsformSaved?props.data.Religion:"",
        EntranceExam:props.data.IsformSaved?props.data.EntranceExam:"",
        ApplicationNo:props.data.IsformSaved?props.data.ApplicationNo:"",
        CategoryRank:props.data.IsformSaved?props.data.CategoryRank:"",
        Year:props.data.IsformSaved?props.data.Year:"",
        AIRRank:props.data.IsformSaved?props.data.AIRRank:"",
        SeatCategory:props.data.IsformSaved?props.data.SeatCategory:"",
        FatherName:props.data.IsformSaved?props.data.FatherName:"",
        MotherName:props.data.IsformSaved?props.data.MotherName:"",
        FatherContact:props.data.IsformSaved?props.data.FatherContact:"",
        Landline:props.data.IsformSaved?props.data.Landline:"",
        ParentEmail:props.data.IsformSaved?props.data.ParentEmail:"",
        CurAddress:props.data.IsformSaved?props.data.CurAddress:"",
        CurAddress1:props.data.IsformSaved?props.data.CurAddress1:"",
        CurAddress2:props.data.IsformSaved?props.data.CurAddress2:"",
        CurZipCode:props.data.IsformSaved?props.data.CurZipCode:"",
        CurCity:props.data.IsformSaved?props.data.CurCity:"",
        CurState:props.data.IsformSaved?props.data.CurState:"",
        CurCountry:props.data.IsformSaved?props.data.CurCountry:"",
        PerAddress:props.data.IsformSaved?props.data.PerAddress:"",
        PerAddress1:props.data.IsformSaved?props.data.PerAddress1:"",
        PerAddress2:props.data.IsformSaved?props.data.PerAddress2:"",
        PerZipCode:props.data.IsformSaved?props.data.PerZipCode:"",
        PerCity:props.data.IsformSaved?props.data.PerCity:"",
        PerState:props.data.IsformSaved?props.data.PerState:"",
        PerCountry:props.data.IsformSaved?props.data.PerCountry:"",
        HighSchoolBoard:props.data.IsformSaved?props.data.HighSchoolBoard:"",
        HighSchoolRollNo:props.data.IsformSaved?props.data.HighSchoolRollNo:"",
        HighSchoolYear:props.data.IsformSaved?props.data.HighSchoolYear:"",
        HighSchoolInstitution:props.data.IsformSaved?props.data.HighSchoolInstitution:"",
        HighSchoolDivision:props.data.IsformSaved?props.data.HighSchoolDivision:"",
        HighSchoolSubjects:props.data.IsformSaved?props.data.HighSchoolSubjects:"",
        IntermediateBoard:props.data.IsformSaved?props.data.IntermediateBoard:"",
        IntermediateRollNo:props.data.IsformSaved?props.data.IntermediateRollNo:"",
        IntermediateYear:props.data.IsformSaved?props.data.IntermediateYear:"",
        IntermediateInstitution:props.data.IsformSaved?props.data.IntermediateInstitution:"",
        IntermediateDivision:props.data.IsformSaved?props.data.IntermediateDivision:"",
        IntermediateSubjects:props.data.IsformSaved?props.data.IntermediateSubjects:"",
        BSCBoard:props.data.IsformSaved?props.data.BSCBoard:"",
        BSCRollNo:props.data.IsformSaved?props.data.BSCRollNo:"",
        BSCYear:props.data.IsformSaved?props.data.BSCYear:"",
        BSCInstitution:props.data.IsformSaved?props.data.BSCInstitution:"",
        BSCDivision:props.data.IsformSaved?props.data.BSCDivision:"",
        BSCSubjects:props.data.IsformSaved?props.data.BSCSubjects:"",
        MtechBoard:props.data.IsformSaved?props.data.MtechBoard:"",
        MtechRollNo:props.data.IsformSaved?props.data.MtechRollNo:"",
        MtechYear:props.data.IsformSaved?props.data.MtechYear:"",
        MtechInstitution:props.data.IsformSaved?props.data.MtechInstitution:"",
        MtechDivision:props.data.IsformSaved?props.data.MtechDivision:"",
        MtechSubjects:props.data.IsformSaved?props.data.MtechSubjects:"",
        MSCBoard:props.data.IsformSaved?props.data.MSCBoard:"",
        MSCRollNo:props.data.IsformSaved?props.data.MSCRollNo:"",
        MSCYear:props.data.IsformSaved?props.data.MSCYear:"",
        MSCInstitution:props.data.IsformSaved?props.data.MSCInstitution:"",
        MSCDivision:props.data.IsformSaved?props.data.MSCDivision:"",
        MSCSubjects:props.data.IsformSaved?props.data.MSCSubjects:"",
        BtechBoard:props.data.IsformSaved?props.data.BtechBoard:"",
        BtechRollNo:props.data.IsformSaved?props.data.BtechRollNo:"",
        BtechYear:props.data.IsformSaved?props.data.BtechYear:"",
        BtechInstitution:props.data.IsformSaved?props.data.BtechInstitution:"",
        BtechDivision:props.data.IsformSaved?props.data.BtechDivision:"",
        BtechSubjects:props.data.IsformSaved?props.data.BtechSubjects:"",
        MCABoard:props.data.IsformSaved?props.data.MCABoard:"",
        MCARollNo:props.data.IsformSaved?props.data.MCARollNo:"",
        MCAYear:props.data.IsformSaved?props.data.MCAYear:"",
        MCAInstitution:props.data.IsformSaved?props.data.MCAInstitution:"",
        MCADivision:props.data.IsformSaved?props.data.MCADivision:"",
        MCASubjects:props.data.IsformSaved?props.data.MCASubjects:"",
        BCABoard:props.data.IsformSaved?props.data.BCABoard:"",
        BCARollNo:props.data.IsformSaved?props.data.BCARollNo:"",
        BCAYear:props.data.IsformSaved?props.data.BCAYear:"",
        BCAInstitution:props.data.IsformSaved?props.data.BCAInstitution:"",
        BCADivision:props.data.IsformSaved?props.data.BCADivision:"",
        BCASubjects:props.data.IsformSaved?props.data.BCASubjects:"",
        Member1Name:props.data.IsformSaved?props.data.Member1Name:"",
        Member1Relationship:props.data.IsformSaved?props.data.Member1Relationship:"",
        Member1Age:props.data.IsformSaved?props.data.Member1Age:"",
        Member1Address:props.data.IsformSaved?props.data.Member1Address:"",
        Member1EduQualification:props.data.IsformSaved?props.data.Member1EduQualification:"",
        Member1ProQualification:props.data.IsformSaved?props.data.Member1ProQualification:"",
        Member1EarningStatus:props.data.IsformSaved?props.data.Member1EarningStatus:"",
        Member1Occupation:props.data.IsformSaved?props.data.Member1Occupation:"",
        Member1Organization:props.data.IsformSaved?props.data.Member1Organization:"",
        Member1Income:props.data.IsformSaved?props.data.Member1Income:"",
        Member2Name:props.data.IsformSaved?props.data.Member2Name:"",
        Member2Relationship:props.data.IsformSaved?props.data.Member2Relationship:"",
        Member2Age:props.data.IsformSaved?props.data.Member2Age:"",
        Member2Address:props.data.IsformSaved?props.data.Member2Address:"",
        Member2EduQualification:props.data.IsformSaved?props.data.Member2EduQualification:"",
        Member2ProQualification:props.data.IsformSaved?props.data.Member2ProQualification:"",
        Member2EarningStatus:props.data.IsformSaved?props.data.Member2EarningStatus:"",
        Member2Occupation:props.data.IsformSaved?props.data.Member2Occupation:"",
        Member2Organization:props.data.IsformSaved?props.data.Member2Organization:"",
        Member2Income:props.data.IsformSaved?props.data.Member2Income:"",
        Member3Name:props.data.IsformSaved?props.data.Member3Name:"",
        Member3Relationship:props.data.IsformSaved?props.data.Member3Relationship:"",
        Member3Age:props.data.IsformSaved?props.data.Member3Age:"",
        Member3Address:props.data.IsformSaved?props.data.Member3Address:"",
        Member3EduQualification:props.data.IsformSaved?props.data.Member3EduQualification:"",
        Member3ProQualification:props.data.IsformSaved?props.data.Member3ProQualification:"",
        Member3EarningStatus:props.data.IsformSaved?props.data.Member3EarningStatus:"",
        Member3Occupation:props.data.IsformSaved?props.data.Member3Occupation:"",
        Member3Organization:props.data.IsformSaved?props.data.Member3Organization:"",
        Member3Income:props.data.IsformSaved?props.data.Member3Income:"",
        Member4Name:props.data.IsformSaved?props.data.Member4Name:"",
        Member4Relationship:props.data.IsformSaved?props.data.Member4Relationship:"",
        Member4Age:props.data.IsformSaved?props.data.Member4Age:"",
        Member4Address:props.data.IsformSaved?props.data.Member4Address:"",
        Member4EduQualification:props.data.IsformSaved?props.data.Member4EduQualification:"",
        Member4ProQualification:props.data.IsformSaved?props.data.Member4ProQualification:"",
        Member4EarningStatus:props.data.IsformSaved?props.data.Member4EarningStatus:"",
        Member4Occupation:props.data.IsformSaved?props.data.Member4Occupation:"",
        Member4Organization:props.data.IsformSaved?props.data.Member4Organization:"",
        Member4Income:props.data.IsformSaved?props.data.Member4Income:"",
        Member5Name:props.data.IsformSaved?props.data.Member5Name:"",
        Member5Relationship:props.data.IsformSaved?props.data.Member5Relationship:"",
        Member5Age:props.data.IsformSaved?props.data.Member5Age:"",
        Member5Address:props.data.IsformSaved?props.data.Member5Address:"",
        Member5EduQualification:props.data.IsformSaved?props.data.Member5EduQualification:"",
        Member5ProQualification:props.data.IsformSaved?props.data.Member5ProQualification:"",
        Member5EarningStatus:props.data.IsformSaved?props.data.Member5EarningStatus:"",
        Member5Occupation:props.data.IsformSaved?props.data.Member5Occupation:"",
        Member5Organization:props.data.IsformSaved?props.data.Member5Organization:"",
        Member5Income:props.data.IsformSaved?props.data.Member5Income:"",
        PhyMarks:props.data.IsformSaved?props.data.PhyMarks:"",
        ChemMarks:props.data.IsformSaved?props.data.ChemMarks:"",
        MathMarks:props.data.IsformSaved?props.data.MathMarks:"",
        Percentage:props.data.IsformSaved?props.data.Percentage:"",
        IsformSaved:"False",
        IsformSubmitted:"False",
    })
    const[isperchecked,setIsPerChecked]=useState()
    const setform=(e)=>{
        setFormtitle(e.target.id)
    }
    const firstRender=useRef(true)
    useEffect(()=>{
        if(firstRender.current){
            firstRender.current=false
            return
        }
        saveDetails()

    },[FormDetails.IsformSubmitted,FormDetails.IsformSaved])
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
    
    // Code For Saving Form Detail Starts here
    const updateaddresscheckbox=(e)=>{
        setIsPerChecked(e.target.checked)
    }
    const updateFormdetails=(e)=>{
        setFormDetails(prevState => ({
            ...prevState,
            [e.target.name]: e.target.value
        }));
    }
    const save=()=>{
        
        if(isperchecked){
            setFormDetails(prevState => ({
                ...prevState,
                CurAddress: FormDetails.CurAddress1+" "+FormDetails.CurAddress2+", "+FormDetails.CurZipCode,
                PerAddress:FormDetails.CurAddress,
                PerAddress1:FormDetails.CurAddress1,
                PerAddress2:FormDetails.CurAddress2,
                PerZipCode:FormDetails.CurZipCode,
                PerCity:FormDetails.CurCity,
                PerState:FormDetails.CurState,
                PerCountry:FormDetails.CurCountry,
                IsformSaved:"True"
    
            }));

        }
        else{
            setFormDetails(prevState => ({
                ...prevState,
                CurAddress: FormDetails.CurAddress1+" "+FormDetails.CurAddress2+", "+FormDetails.CurZipCode,
                PerAddress:FormDetails.PerAddress1+" "+FormDetails.PerAddress2+", "+FormDetails.PerZipCode,
                IsformSaved:"True"
    
            }));

        }
    //    saveDetails()
    }
    const submit= ()=>{
        console.log("Submitted")
        var reply=confirm("Before Submitting make sure all the details provided by you are correct.Once Submitted you will have to contact DSW Office for further Changes!")
        if(reply===true){
        setFormDetails(prevState=>({
            ...prevState,
            IsformSubmitted:"True",
        }))
    }
    }
    
    async function saveDetails(){
        // Requesting Backend to Save the Provided Data
        const requestoptions={
            method:"POST",
            headers:{'Content-Type':'application/json',
                        'X-CSRFToken': props.csrftoken
                        },
            body:JSON.stringify({
                user_name:props.data.username,
                details:FormDetails,
                Photo: PhotoField
            }),
          };
        props.setProgress(10) 
        let response =await fetch("/api/savedetails",requestoptions)
        props.setProgress(50)
        if(response.ok){
            props.setProgress(100)
            let Data=await response.json()
            setResponse("Success!! The Data you Entered was Saved Successfully.")
        }
        else{
            props.setProgress(100)
            setResponse("OOPS!! The Data was not Saved.")
            console.clear()
        }
        
    }
    document.title="Student Registration"
    const detail_saved_alert_style={
        color: response!="Success!! The Data you Entered was Saved Successfully."?"#800202":"darkgreen",
        backgroundColor: response!="Success!! The Data you Entered was Saved Successfully."?"pink":"lightgreen",
        border: response!="Success!! The Data you Entered was Saved Successfully."?"1px solid red":"1px solid darkgreen",
        display: response!=""?"block":"none",
        position: "absolute",
        userSelect: "none",
        top: "12.5vh",
        width: "99vw",
        height: "max-content",
        zIndex: "1",
        borderRadius: "4px",
        textAlign: "center"
    
      }
    return (
        <div className="student-registration">
                <p style={detail_saved_alert_style} className="response">{response}</p>
            <div className="tabs container mt-4">
                <div className="buttons">
                <button id="Studentdetail" style={(formTitle==="Studentdetail"?buttonstyleactive:buttonstyleinactive)} onClick={setform}>Student Detail</button>
                <button id="address" style={(formTitle==="address"?buttonstyleactive:buttonstyleinactive)} onClick={setform}>Address</button>
                <button id="academicdetail" style={(formTitle==="academicdetail"?buttonstyleactive:buttonstyleinactive)} onClick={setform}>Academic Detail</button>
                <button id="familydetail" style={(formTitle==="familydetail"?buttonstyleactive:buttonstyleinactive)} onClick={setform}>Family Detail</button>
                <button id="qualifyingexam" style={(formTitle==="qualifyingexam"?buttonstyleactive:buttonstyleinactive)} onClick={setform}>Qualifying Exam</button>
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
                        <div className="roll-input mb-3">
                            <label htmlFor="RollNo" className="mb-3">University Roll No.</label>
                            <input type="text" defaultValue={props.data.UniversityRollNo}name="UniversityRollNo" onChange={updateFormdetails} id="roll-no" />
                        </div>
                        <div className="programme mb-3">
                        <label htmlFor="Programme" className="mb-3">Programme</label>
                            <select htmlFor="Programme"  defaultValue={props.data.Programme}name="Programme" onChange={updateFormdetails}id="programme">
                                <option value="select">--Select--</option>
                                <option value="Btech">BTech</option>
                                <option value="Mtech">MTech</option>
                                <option value="PHD">Phd</option>
                                <option value="MCA">MCA</option>
                                <option value="MBA">MBA</option>
                            </select>
                        </div>
                        <div className="admission-source mb-3">
                            <label htmlFor="AdmissionSource" className="mb-3">Admission Source</label>
                            <select htmlFor="AdmissionSource"defaultValue={props.data.AdmissionSource}name="AdmissionSource" onChange={updateFormdetails} id="admissionsource">
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
                        <div className="enroll-input mb-3">
                            <label htmlFor="EnrollmentNumber" className="mb-3">Enrollment Number</label>
                            <input type="text" defaultValue={props.data.EnrollmentNumber}name="EnrollmentNumber" id="enrollment-no"onChange={updateFormdetails} /> 
                        </div>
                        <div className="branch mb-3">
                        <label htmlFor="Branch" className="mb-3">Branch</label>
                        <select htmlFor="Branch" defaultValue={props.data.Branch}name="Branch"id="Branch"onChange={updateFormdetails}>
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
                        <div className="current-semester mb-3">
                            <label htmlFor="CurrentSemester" className="mb-3">Current Semester</label>
                            <input type="text" defaultValue={props.data.CurrentSemester}name="CurrentSemester"onChange={updateFormdetails} id="currentsemester" />
                            
                        </div>

                        </div>
                        <div className="academicline3">
                            <div className="instructions">
                                Supported Format:png,jpg,jpeg
                                Minimum File size:50Kb
                                Maximum File size:200Kb
                            </div>
                            <div className="imagedisplay">
                               <img src={PhotoField} style={{position: "absolute", height: "150px", width: "150px", objectFit: "cover", padding: "10px"}} id="photouploaded" alt="" />
                            </div>
                            <div style={{position: "relative", top: "150px"}} className="imageinput">
                                <input type="file" name="" id="PhotoField" onChange={setPhoto}/>
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
                            <label htmlFor="StudentName" className="mb-3">Student Name</label>
                            <input type="text" defaultValue={props.data.StudentName}name="StudentName"onChange={updateFormdetails} id="studentname" />
                            </div>
                            <div className="dob mb-3">
                                <label htmlFor="DOB" className="mb-3">Date Of Birth</label>
                                <input type="date" defaultValue={props.data.DateOfBirth}name="DateOfBirth"onChange={updateFormdetails} id="" />
                            </div>
                            <div className="contactnumber mb-3">
                                <label htmlFor="ContactNumber" className="mb-3">Contact</label>
                                <input type="text" defaultValue={props.data.Contact}name="Contact" onChange={updateFormdetails}id="" />
                            </div>
                            <div className="hbtuemail mb-3">
                                <label htmlFor="HBTUEmail" className="mb-3">HBTU Email</label>
                                <input type="email" defaultValue={props.data.HBTUEmail}name="HBTUEmail"onChange={updateFormdetails} id="" />
                            </div>
                            <div className="subcategoryinput mb-3">
                                <label htmlFor="SubCategory" className="mb-3">SubCategory</label>
                                <select htmlFor="SubCategory" defaultValue={props.data.SubCategory}name="SubCategory"onChange={updateFormdetails}>
                                    <option value="select">--Select--</option>
                                    <option value="girl">Girl</option>
                                    <option value="af">AF</option>
                                    <option value="ff">FF</option>
                                    <option value="handicapped">Handicapped PH</option>
                                    <option value="not">Not Applicable</option>
                                </select>
                            </div>
                            <div className="bloodgroupinput mb-3">
                                <label htmlFor="BloodGroup" className="mb-3">Blood Group</label>
                                <input type="text" defaultValue={props.data.BloodGroup}name="BloodGroup"onChange={updateFormdetails} id="" />
                            </div>
                            <div className="aadhaarinput mb-3">
                                <label htmlFor="Aadhaar" className="mb-3">Aadhaar Card Number</label>
                                <input type="text" defaultValue={props.data.AadhaarCard}name="AadhaarCard"onChange={updateFormdetails} id="" />
                            </div>
                            <div className="nationalityinput mb-3">
                                <label htmlFor="Nationality" className="mb-3">Nationality</label>
                                <input type="text" defaultValue={props.data.Nationality}name="Nationality"onChange={updateFormdetails} id="" />
                            </div>
                        </div>
                        <div className="personalline2 mx-3">
                            <div className="hindiname mb-3">
                                <label htmlFor="StudentHindiName" className="mb-3">Student Name in Hindi</label>
                                <input type="text" defaultValue={props.data.StudentNameHindi}name="StudentNameHindi"onChange={updateFormdetails} id="" />
                            </div>
                            <div className="genderinput mb-3">
                                <label htmlFor="Gender" className="mb-3">Gender</label>
                                <input type="text" defaultValue={props.data.Gender}name="Gender"onChange={updateFormdetails} id="" />
                            </div>
                            <div className="alternatecontactinput mb-3">
                                <label htmlFor="AlternateContact" className="mb-3">Alternate Contact</label>
                                <input type="text" defaultValue={props.data.AlternateContact}name="AlternateContact"onChange={updateFormdetails} id="" />
                            </div>
                            <div className="personalemailinput mb-3">
                                <label htmlFor="PersonalEmail" className="mb-3">Personal Email</label>
                                <input type="text" defaultValue={props.data.PersonalEmail}name="PersonalEmail"onChange={updateFormdetails} id="" />
                            </div>
                            <div className="categoryinput mb-3">
                                <label htmlFor="Category" className="mb-3">Category</label>
                                <select htmlFor="Category" defaultValue={props.data.Category}name="Category"onChange={updateFormdetails}>
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
                                <label htmlFor="FeeWaiver" className="mb-3">Fee Waiver</label>
                                <input type="text" defaultValue={props.data.FeeWaiver}name="FeeWaiver"onChange={updateFormdetails} id="" />
                            </div>
                            <div className="hostelrequired mb-3">
                                <label htmlFor="Hostel" className="mb-3">Hostel Required</label>
                                <select htmlFor="Hostel" defaultValue={props.data.Hostel}name="Hostel"onChange={updateFormdetails}>
                                    <option value="select">--Select--</option>
                                    <option value="True">Yes</option>
                                    <option value="False">No</option>
                                </select>
                            </div>
                            <div className="transportmodeinput mb-3">
                                <label htmlFor="Mode" className="mb-3">Mode Of Transport</label>
                                <select htmlFor="Mode" defaultValue={props.data.ModeOfTransport}name="ModeOfTransport"onChange={updateFormdetails}>
                                    <option value="select">--Select--</option>
                                    <option value="Bus">Bus</option>
                                    <option value="pickedup">Picked Up</option>
                                    <option value="walker">Walker</option>
                                </select>
                            </div>
                            <div className="religioninput mb-3">
                                <label htmlFor="Releigion" className="mb-3">Religion</label>
                                <input type="text" defaultValue={props.data.Religion}name="Religion"onChange={updateFormdetails} id="" />
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
                                <label htmlFor="EntranceExam" className="mb-3">Entrane Exam</label>
                                <input type="text"defaultValue={props.data.EntranceExam}name="EntranceExam"onChange={updateFormdetails} id="" />
                            </div>
                            <div className="applicationno mb-3">
                                <label htmlFor="ApplicationNo" className="mb-3">Roll No./Application No.</label>
                                <input type="text" defaultValue={props.data.ApplicationNo}name="ApplicationNo"onChange={updateFormdetails} id="" />
                            </div>
                            <div className="categoryrank mb-3">
                                <label htmlFor="CategoryRank" className="mb-3">Category Rank</label>
                                <input type="text" defaultValue={props.data.CategoryRank}name="CategoryRank"onChange={updateFormdetails} />
                            </div>
                        </div>
                        <div className="entranceline2 mx-3">
                            <div className="yearinput mb-3">
                                <label htmlFor="YearInput" className="mb-3">Year</label>
                                <input type="text" defaultValue={props.data.Year}name="Year"onChange={updateFormdetails} id="" />
                            </div>
                            <div className="airrank mb-3">
                                <label htmlFor="AIRRank" className="mb-3">AIR Rank</label>
                                <input type="text" defaultValue={props.data.AIRRank}name="AIRRank"onChange={updateFormdetails} id="" />
                            </div>
                            <div className="seatcategoryinput mb-3">
                                <label htmlFor="SeatCategory" className="mb-3">Seat Allot in Category</label>
                                <select htmlFor="SeatCategory"defaultValue={props.data.SeatCategory}name="SeatCategory"onChange={updateFormdetails} id="">
                                    <option value="select">--Select--</option>
                                    <option value="BC-PH">BC-PH</option>
                                    <option value="OBC-NCL">OBC-NCL</option>
                                    <option value="OPEN">OPEN</option>
                                    <option value="OPEN-EWS">OPEN-EWS</option>
                                    <option value="OPEN-EWS-PH">OPEN-EWS-PH</option>
                                    <option value="OPEN-PH">OPEN-PH</option>
                                    <option value="OPEN-TFW">OPEN-TFW</option>
                                    <option value="SC">SC</option>
                                    <option value="SC-PH">SC-PH</option>
                                    <option value="ST">ST</option>
                                    <option value="ST-PH">ST-PH</option>
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
                             <label htmlFor="FatherName" className="mb-3">Father's Name</label>
                             <input type="text" defaultValue={props.data.FatherName}name="FatherName"onChange={updateFormdetails} id="" />
                         </div>
                         <div className="mothername mb-3">
                             <label htmlFor="MotherName" className="mb-3">Mother's Name</label>
                             <input type="text" defaultValue={props.data.MotherName}name="MotherName"onChange={updateFormdetails}/>
                         </div>
                     </div>
                     <div className="parentline2 mx-3">
                         <div className="fathercontact mb-3">
                             <label htmlFor="FatherContact" className="mb-3">Father's Contact Number</label>
                             <input type="text" defaultValue={props.data.FatherContact}name="FatherContact"onChange={updateFormdetails} id="" />
                         </div>
                         <div className="landline mb-3">
                             <label htmlFor="Landline" className="mb-3">LandLine Number</label>
                             <input type="text" defaultValue={props.data.Landline}name="Landline"onChange={updateFormdetails} />
                         </div>
                         <div className="parentemailid mb-3">
                             <label htmlFor="ParentEmailID" className="mb-3">Parent's Email ID</label>
                             <input type="email" defaultValue={props.data.ParentEmail}name="ParentEmail"onChange={updateFormdetails} id="" />
                         </div>
                     </div>
                    </div>
                </div>
                

            </div>
            <div className="mybutton mt-3" style={{display:(formTitle==="Studentdetail"?'block':'none')}}>
                <button className="savebutton btn-success"type="button" onClick={save}>Save</button>
            </div>
            <div className="form-body container" style={{display:(formTitle==="address"?'block':'none')}}>
            <div className="addressdetailscurrent ms-2">
                    <div className="currentaddressheading pt-2">
                        <h2>Current Address</h2>
                    </div>
                    <div className="address-input mt-3">
                    <div className="curraddressline1 ms-3">
                        <div className="addressline1 mb-3">
                            <label htmlFor="AddressLine1" className="mb-3">Address Line 1</label>
                            <input type="text" defaultValue={props.data.CurAddress1}name="CurAddress1"onChange={updateFormdetails} id="" />
                        </div>
                        <div className="addressline2 mb-3">
                            <label htmlFor="AddressLine2" className="mb-3">Address Line 2</label>
                            <input type="text" defaultValue={props.data.CurAddress2}name="CurAddress2"onChange={updateFormdetails} id="" />
                        </div>
                        <div className="zipcode">
                            <label htmlFor="Zipcode" className="mb-3">ZipCode</label>
                            <input type="text" defaultValue={props.data.CurZipCode}name="CurZipCode"onChange={updateFormdetails}/>
                        </div>
                    </div>
                    <div className="curraddressline2">
                        <div className="city mb-3">
                            <label htmlFor="City" className="mb-3">City</label>
                            <select htmlFor="City" defaultValue={props.data.CurCity}name="CurCity" onChange={updateFormdetails}>
                                <option value="select">--Select--</option>
                                <option value="Kanpur">Kanpur</option>
                                <option value="Lucknow">Lucknow</option>
                                <option value="Allahabad">Allahabad</option>
                                <option value="Vrindavan">Vrindavan</option>
                                <option value="Farukhabad">Farukhabad</option>
                                <option value="Gonda">Gonda</option>
                            </select>

                        </div>
                        <div className="state mb-3">
                            <label htmlFor="State" className="mb-3">State/District</label>
                            <select htmlFor="State"defaultValue={props.data.CurState}name="CurState"onChange={updateFormdetails}>
                                <option value="select">--Select--</option>
                                <option value="Andhra Pradesh">Andhra Pradesh</option>
                                <option value="Assam">Assam</option>
                                <option value="Bihar">Bihar</option>
                                <option value="Chandigarh">Chandigarh</option>
                                <option value="Chennai">Chennai</option>
                                <option value="Chattisgarh">Chattisgarh</option>
                                <option value="Dadra and nager haveli">Dadra and nager haveli</option>
                                <option value="Daman and Diu">Daman and Diu</option>
                                <option value="Goa">Goa</option>
                                <option value="Gujarat">Gujarat</option>
                                <option value="Haryana">Haryana</option>
                                <option value="Himachal Pradesh">Himachal Pradesh</option>
                                <option value="Jammu and kashmir">Jammu and kashmir</option>
                                <option value="Uttar Pradesh">Uttar Pradesh</option>
                            </select>
                        </div>
                        <div className="country mb-3">
                            <label htmlFor="Country" className="mb-3">Country</label>
                            <select htmlFor="Country"defaultValue={props.data.CurCountry}name="CurCountry"onChange={updateFormdetails} id="">
                                <option value="select">--Select--</option>
                                <option value="India">India</option>
                                <option value="Sri Lanka">Sri Lanka</option>
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
                            <input type="checkbox" name="CheckBox" onChange={updateaddresscheckbox}id="checkbox1" />
                            <label htmlFor="checkbox1" className="ms-1">If Permanent Address is same as current address</label>
                            </div>
                        </div>
                        <div className="permanent-address-input">
                            <div className="permanentaddressline1 ms-2">
                                <div className="addressline1 mb-3">
                                    <label htmlFor="AddressLine1" className="mb-3">Address Line 1</label>
                                    <input type="text" defaultValue={isperchecked?(FormDetails.CurAddress1):(props.data.PerAddress1)}name="PerAddress1" disabled={isperchecked} onChange={updateFormdetails}/>
                                </div>
                                <div className="addressline2 mb-3">
                                    <label htmlFor="Addressline2" className="mb-3">Address Line 2</label>
                                    <input type="text" defaultValue={isperchecked?(FormDetails.CurAddress2):(props.data.PerAddress2)}name="PerAddress2"disabled={isperchecked} onChange={updateFormdetails}/>
                                </div>
                                <div className="zipcode mb-3">
                                    <label htmlFor="Zipcode" className="mb-3">ZipCode</label>
                                    <input type="text" defaultValue={isperchecked?(FormDetails.CurZipCode):(props.data.PerZipCode)}name="PerZipCode" disabled={isperchecked}onChange={updateFormdetails}/>
                                </div>
                            </div>
                            <div className="permanentaddressline2 ms-2">
                            <div className="city mb-3">
                            <label htmlFor="City" className="mb-3">City</label>
                            <select htmlFor="City" defaultValue={isperchecked?(FormDetails.CurCity):(props.data.PerCity)}name="PerCity" disabled={isperchecked}onChange={updateFormdetails}>
                                <option value="select">--Select--</option>
                                <option defaultValue="Kanpur" value="Kanpur">Kanpur</option>
                                <option defaultValue="Lucknow" value="Lucknow">Lucknow</option>
                                <option defaultValue="Allahabad" value="Allahabad">Allahabad</option>
                                <option defaultValue="Vrindavan" value="Vrindavan">Vrindavan</option>
                                <option defaultValue="Farukhabad" value="Farukhabad">Farukhabad</option>
                                <option defaultValue="Farukhabad" value="Gonda">Gonda</option>
                            </select>
                            </div>
                        <div className="state mb-3">
                            <label htmlFor="State" className="mb-3">State/District</label>
                            <select htmlFor="State" defaultValue={isperchecked?(FormDetails.CurState):(props.data.PerState)}name="PerState" disabled={isperchecked} onChange={updateFormdetails}>
                                <option value="select">--Select--</option>
                                <option value="Andhra Pradesh">Andhra Pradesh</option>
                                <option value="Arunachal Pradesh">Arunachal Pradesh</option>
                                <option value="Assam">Assam</option>
                                <option value="Bihar">Bihar</option>
                                <option value="Chandigarh">Chandigarh</option>
                                <option value="Chennai">Chennai</option>
                                <option value="Chattisgarh">Chattisgarh</option>
                                <option value="Dadra and nager haveli">Dadra and nager haveli</option>
                                <option value="Daman and Diu">Daman and Diu</option>
                                <option value="Goa">Goa</option>
                                <option value="Gujarat">Gujarat</option>
                                <option value="Haryana">Haryana</option>
                                <option value="Himachal Pradesh">Himachal Pradesh</option>
                                <option value="Jammu and kashmir">Jammu and kashmir</option>
                                <option value="Uttar Pradesh">Uttar Pradesh</option>
                            </select>
                        </div>
                        <div className="country mb-3">
                            <label htmlFor="Country" className="mb-3">Country</label>
                            <select htmlFor="Country"defaultValue={isperchecked?(FormDetails.CurCountry):(props.data.PerCountry)}name="PerCountry" disabled={isperchecked} onChange={updateFormdetails}id="">
                                <option value="select">--Select--</option>
                                <option value="India">India</option>
                                <option value="Sri Lanka">Sri Lanka</option>
                            </select>
                        </div>
                            </div>
                        </div>
                    </div>
                     
            </div>
            <div className="mybutton mt-3" style={{display:(formTitle==="address"?'block':'none')}}>
                <button className="savebutton btn-success"type="button"onClick={save}>Save</button>
            </div>
            <div className="form-body container" style={{display:(formTitle==="academicdetail"?'block':'none')}}>
                <div className="schoolingdetails ms-2">
                    <div className="schoolingdetailsheading pt-2">
                        <h2>High School</h2>
                    </div>
                    <div className="highschool-detail-input mt-3">
                        <div className="highschoolline1 ms-2">
                            <div className="board mb-3">
                                <label htmlFor="Board" className="mb-3">Board/University</label>
                                <select htmlFor="Board" defaultValue={props.data.HighSchoolBoard}name="HighSchoolBoard" onChange={updateFormdetails}>
                                    <option value="ICSE">ICSE</option>
                                    <option value="CBSE">CBSE</option>
                                    <option value="UP-Board">UP Board</option>
                                </select>
                            </div>
                            <div className="rollno mb-3">
                                <label htmlFor="RollNo" className="mb-3">Roll No.</label>
                                <input type="text" defaultValue={props.data.HighSchoolRollNo}name="HighSchoolRollNo" onChange={updateFormdetails} />
                            </div>
                            <div className="year mb-3">
                                <label htmlFor="Year" className="mb-3">Year</label>
                                <input type="text" defaultValue={props.data.HighSchoolYear}name="HighSchoolYear"onChange={updateFormdetails}/>
                            </div>
                        </div>
                        <div className="highschoolline2 ms-2">
                            <div className="nameofinstitute mb-3">
                                <label htmlFor="Institute Name" className="mb-3">Name of Institution </label>
                                <input type="text" defaultValue={props.data.HighSchoolInstitution}name="HighSchoolInstitution"onChange={updateFormdetails} />
                            </div>
                            <div className="division mb-3">
                                <label htmlFor="Division" className="mb-3">Division</label>
                                <input type="text" defaultValue={props.data.HighSchoolDivision}name="HighSchoolDivision"onChange={updateFormdetails}/>
                            </div>
                            <div className="subjects mb-3">
                                <label htmlFor="Subjects" className="mb-3">Subjects</label>
                                <input type="text" defaultValue={props.data.HighSchoolSubjects}name="HighSchoolSubjects"onChange={updateFormdetails} />
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
                                <label htmlFor="Board" className="mb-3">Board/University</label>
                                <select htmlFor="Board" defaultValue={props.data.IntermediateBoard}name="IntermediateBoard"onChange={updateFormdetails}>
                                    <option value="select">--Select--</option>
                                    <option value="ISC">ISC</option>
                                    <option value="CBSE">CBSE</option>
                                    <option value="UP-Board">UP Board</option>
                                </select>
                            </div>
                            <div className="rollno mb-3">
                                <label htmlFor="RollNo" className="mb-3">Roll No.</label>
                                <input type="text" defaultValue={props.data.IntermediateRollNo}name="IntermediateRollNo"onChange={updateFormdetails}/>
                            </div>
                            <div className="year mb-3">
                                <label htmlFor="Year" className="mb-3">Year</label>
                                <input type="text" defaultValue={props.data.IntermediateYear}name="IntermediateYear"onChange={updateFormdetails}/>
                            </div>
                        </div>
                        <div className="highschoolline2 ms-2">
                            <div className="nameofinstitute mb-3">
                                <label htmlFor="Institute Name" className="mb-3">Name of Institution </label>
                                <input type="text" defaultValue={props.data.IntermediateInstitution}name="IntermediateInstitution"onChange={updateFormdetails}/>
                            </div>
                            <div className="division mb-3">
                                <label htmlFor="Division" className="mb-3">Division</label>
                                <input type="text" defaultValue={props.data.IntermediateDivision}name="IntermediateDivision"onChange={updateFormdetails}/>
                            </div>
                            <div className="subjects mb-3">
                                <label htmlFor="Subjects" className="mb-3">Subjects</label>
                                <input type="text" defaultValue={props.data.IntermediateSubjects}name="IntermediateSubjects"onChange={updateFormdetails}/>
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
                                <label htmlFor="Board" className="mb-3">Board/University</label>
                                <select htmlFor="Board" defaultValue={props.data.BSCBoard}name="BSCBoard"onChange={updateFormdetails}>
                                    <option value="select">--Select--</option>
                                    <option value="ISC">ICSE</option>
                                    <option value="CBSE">CBSE</option>
                                    <option value="UP-Board">UP Board</option>
                                </select>
                            </div>
                            <div className="rollno mb-3">
                                <label htmlFor="RollNo" className="mb-3">Roll No.</label>
                                <input type="text" defaultValue={props.data.BSCRollNo}name="BSCRollNo" onChange={updateFormdetails}/>
                            </div>
                            <div className="year mb-3">
                                <label htmlFor="Year" className="mb-3">Year</label>
                                <input type="text" defaultValue={props.data.BSCYear}name="BSCYear"onChange={updateFormdetails}/>
                            </div>
                        </div>
                        <div className="highschoolline2 ms-2">
                            <div className="nameofinstitute mb-3">
                                <label htmlFor="Institute Name" className="mb-3">Name of Institution </label>
                                <input type="text" defaultValue={props.data.BSCInstitution}name="BSCInstitution"onChange={updateFormdetails}/>
                            </div>
                            <div className="division mb-3">
                                <label htmlFor="Division" className="mb-3">Division</label>
                                <input type="text" defaultValue={props.data.BSCDivision}name="BSCDivision"onChange={updateFormdetails}/>
                            </div>
                            <div className="subjects mb-3">
                                <label htmlFor="Subjects" className="mb-3">Subjects</label>
                                <input type="text" defaultValue={props.data.BSCSubjects}name="BSCSubjects"onChange={updateFormdetails}/>
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
                                <label htmlFor="Board" className="mb-3">Board/University</label>
                                <select htmlFor="Board" defaultValue={props.data.MtechBoard}name="MtechBoard"onChange={updateFormdetails}>
                                    <option value="select">--Select--</option>
                                    <option value="ICSE">ICSE</option>
                                    <option value="CBSE">CBSE</option>
                                    <option value="UP-Board">UP Board</option>
                                </select>
                            </div>
                            <div className="rollno mb-3">
                                <label htmlFor="RollNo" className="mb-3">Roll No.</label>
                                <input type="text" defaultValue={props.data.MtechRollNo}name="MtechRollNo"onChange={updateFormdetails}/>
                            </div>
                            <div className="year mb-3">
                                <label htmlFor="Year" className="mb-3">Year</label>
                                <input type="text" defaultValue={props.data.MtechYear}name="MtechYear"onChange={updateFormdetails}/>
                            </div>
                        </div>
                        <div className="highschoolline2 ms-2">
                            <div className="nameofinstitute mb-3">
                                <label htmlFor="Institute Name" className="mb-3">Name of Institution </label>
                                <input type="text" defaultValue={props.data.MtechInstitution}name="MtechInstitution"onChange={updateFormdetails}/>
                            </div>
                            <div className="division mb-3">
                                <label htmlFor="Division" className="mb-3">Division</label>
                                <input type="text" defaultValue={props.data.MtechDivision}name="MtechDivision"onChange={updateFormdetails}/>
                            </div>
                            <div className="subjects mb-3">
                                <label htmlFor="Subjects" className="mb-3">Subjects</label>
                                <input type="text" defaultValue={props.data.MtechSubjects}name="MtechSubjects"onChange={updateFormdetails}/>
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
                                <label htmlFor="Board" className="mb-3">Board/University</label>
                                <select htmlFor="Board" defaultValue={props.data.BtechBoard}name="BtechBoard"onChange={updateFormdetails}>
                                    <option value="select">--Select--</option>
                                    <option value="ICSE">ICSE</option>
                                    <option value="CBSE">CBSE</option>
                                    <option value="UP-Board">UP Board</option>
                                </select>
                            </div>
                            <div className="rollno mb-3">
                                <label htmlFor="RollNo" className="mb-3">Roll No.</label>
                                <input type="text" defaultValue={props.data.BtechRollNo}name="BtechRollNo"onChange={updateFormdetails}/>
                            </div>
                            <div className="year mb-3">
                                <label htmlFor="Year" className="mb-3">Year</label>
                                <input type="text" defaultValue={props.data.BtechYear}name="BtechYear"onChange={updateFormdetails}/>
                            </div>
                        </div>
                        <div className="highschoolline2 ms-2">
                            <div className="nameofinstitute mb-3">
                                <label htmlFor="Institute Name" className="mb-3">Name of Institution </label>
                                <input type="text" defaultValue={props.data.BtechInstitution}name="BtechInstitution"onChange={updateFormdetails}/>
                            </div>
                            <div className="division mb-3">
                                <label htmlFor="Division" className="mb-3">Division</label>
                                <input type="text" defaultValue={props.data.BtechDivision}name="BtechDivision"onChange={updateFormdetails}/>
                            </div>
                            <div className="subjects mb-3">
                                <label htmlFor="Subjects" className="mb-3">Subjects</label>
                                <input type="text" defaultValue={props.data.BtechSubjects}name="BtechSubjects"onChange={updateFormdetails}/>
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
                                <label htmlFor="Board" className="mb-3">Board/University</label>
                                <select htmlFor="Board" defaultValue={props.data.MCABoard}name="MCABoard"onChange={updateFormdetails}>
                                    <option value="select">--Select--</option>
                                    <option value="ICSE">ICSE</option>
                                    <option value="CBSE">CBSE</option>
                                    <option value="Ip-Board">UP Board</option>
                                </select>
                            </div>
                            <div className="rollno mb-3">
                                <label htmlFor="RollNo" className="mb-3">Roll No.</label>
                                <input type="text" defaultValue={props.data.MCARollNo}name="MCARollNo"onChange={updateFormdetails}/>
                            </div>
                            <div className="year mb-3">
                                <label htmlFor="Year" className="mb-3">Year</label>
                                <input type="text" defaultValue={props.data.MCAYear}name="MCAYear"onChange={updateFormdetails}/>
                            </div>
                        </div>
                        <div className="highschoolline2 ms-2">
                            <div className="nameofinstitute mb-3">
                                <label htmlFor="Institute Name" className="mb-3">Name of Institution </label>
                                <input type="text" defaultValue={props.data.MCAInstitution}name="MCAInstitution"onChange={updateFormdetails}/>
                            </div>
                            <div className="division mb-3">
                                <label htmlFor="Division" className="mb-3">Division</label>
                                <input type="text" defaultValue={props.data.MCADivision}name="MCADivision"onChange={updateFormdetails}/>
                            </div>
                            <div className="subjects mb-3">
                                <label htmlFor="Subjects" className="mb-3">Subjects</label>
                                <input type="text" defaultValue={props.data.MCASubjects}name="MCASubjects"onChange={updateFormdetails}/>
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
                                <label htmlFor="Board" className="mb-3">Board/University</label>
                                <select htmlFor="Board"defaultValue={props.data.MSCBoard}name="MSCBoard"onChange={updateFormdetails}>
                                    <option value="select">--Select--</option>
                                    <option value="ICSE">ICSE</option>
                                    <option value="CBSE">CBSE</option>
                                    <option value="UP-Board">UP Board</option>
                                </select>
                            </div>
                            <div className="rollno mb-3">
                                <label htmlFor="RollNo" className="mb-3">Roll No.</label>
                                <input type="text" defaultValue={props.data.MSCRollNo}name="MSCRollNo"onChange={updateFormdetails}/>
                            </div>
                            <div className="year mb-3">
                                <label htmlFor="Year" className="mb-3">Year</label>
                                <input type="text" defaultValue={props.data.MSCYear}name="MSCYear"onChange={updateFormdetails}/>
                            </div>
                        </div>
                        <div className="highschoolline2 ms-2">
                            <div className="nameofinstitute mb-3">
                                <label htmlFor="Institute Name" className="mb-3">Name of Institution </label>
                                <input type="text" defaultValue={props.data.MSCInstitution}name="MSCInstitution"onChange={updateFormdetails}/>
                            </div>
                            <div className="division mb-3">
                                <label htmlFor="Division" className="mb-3">Division</label>
                                <input type="text" defaultValue={props.data.MSCDivision}name="MSCDivision"onChange={updateFormdetails}/>
                            </div>
                            <div className="subjects mb-3">
                                <label htmlFor="Subjects" className="mb-3">Subjects</label>
                                <input type="text" defaultValue={props.data.MSCSubjects}name="MSCSubjects"onChange={updateFormdetails}/>
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
                                <label htmlFor="Board" className="mb-3">Board/University</label>
                                <select htmlFor="Board"defaultValue={props.data.BCABoard}name="BCABoard"onChange={updateFormdetails}>
                                    <option value="select">--Select--</option>
                                    <option value="ICSE">ICSE</option>
                                    <option value="CBSE">CBSE</option>
                                    <option value="Ip-Board">UP Board</option>
                                </select>
                            </div>
                            <div className="rollno mb-3">
                                <label htmlFor="RollNo" className="mb-3">Roll No.</label>
                                <input type="text" defaultValue={props.data.BCARollNo}name="BCARollNo"onChange={updateFormdetails}/>
                            </div>
                            <div className="year mb-3">
                                <label htmlFor="Year" className="mb-3">Year</label>
                                <input type="text" defaultValue={props.data.BCAYear}name="BCAYear"onChange={updateFormdetails}/>
                            </div>
                        </div>
                        <div className="highschoolline2 ms-2">
                            <div className="nameofinstitute mb-3">
                                <label htmlFor="Institute Name" className="mb-3">Name of Institution </label>
                                <input type="text" defaultValue={props.data.BCAInstitution}name="BCAInstitution"onChange={updateFormdetails}/>
                            </div>
                            <div className="division mb-3">
                                <label htmlFor="Division" className="mb-3">Division</label>
                                <input type="text" defaultValue={props.data.BCADivision}name="BCADivision"onChange={updateFormdetails}/>
                            </div>
                            <div className="subjects mb-3">
                                <label htmlFor="Subjects" className="mb-3">Subjects</label>
                                <input type="text" defaultValue={props.data.BCASubjects}name="BCASubjects"onChange={updateFormdetails}/>
                            </div>
                        </div>
                    </div>

                </div>        
            </div>
            <div className="mybutton mt-3" style={{display:(formTitle==="academicdetail"?'block':'none')}}>
                <button className="savebutton btn-success"type="button" onClick={save}>Save</button>
            </div>
            <div className="form-body container" style={{display:(formTitle==="familydetail"?'block':'none')}}>   
                  <div className="familydetais ms-2">
                      <div className="familydetailheading pt-3">
                          <h2>Member 1</h2>
                      </div>
                      <div className="family-detail-input mt-3">
                        <div className="familydetailline1">
                            <div className="membername mb-3">
                                <label htmlFor="Member Name" className="mb-3">Name</label>
                                <input type="text" defaultValue={props.data.Member1Name}name="Member1Name"onChange={updateFormdetails}/>
                            </div>
                            <div className="relationship mb-3">
                                <label htmlFor="Relationship" className="mb-3">Relationship</label>
                                <select htmlFor="Relationship" defaultValue={props.data.Member1Relationship}name="Member1Relationship"onChange={updateFormdetails} id="">
                                    <option value="select">--Select--</option>
                                    <option value="Father">Father</option>
                                    <option value="Mother">Mother</option>
                                    <option value="Brother">Brother</option>
                                    <option value="Sister">Sister</option>
                                    <option value="LocalGuardian">Local Guardian</option>
                                    <option value="Sister">Sister</option>
                                </select>
                            </div>
                            <div className="ageinput mb-3">
                                <label htmlFor="Age" className="mb-3">Age</label>
                                <input type="text" defaultValue={props.data.Member1Age}name="Member1Age"onChange={updateFormdetails}/>
                            </div>
                            <div className="familyaddressinput mb-3">
                                <label htmlFor="Address" className="mb-3">Address</label>
                                <input type="text" defaultValue={props.data.Member1Address}name="Member1Address"onChange={updateFormdetails}/>
                            </div>
                            <div className="eduqualification mb-3">
                                <label htmlFor="eduqualification" className="mb-3">Educational Qualification</label>
                                <input type="text" defaultValue={props.data.Member1EduQualification}name="Member1EduQualification"onChange={updateFormdetails}/>
                            </div>
                            </div>
                            <div className="familydetailline2">
                            <div className="proqualification mb-3">
                                <label htmlFor="proqualification" className="mb-3">Professional Qualification</label>
                                <input type="text" defaultValue={props.data.Member1ProQualification}name="Member1ProQualification"onChange={updateFormdetails}/>
                            </div>
                            <div className="earningstatus mb-3">
                                <label htmlFor="status" className="mb-3">Earning Status</label>
                                <select htmlFor="status"defaultValue={props.data.Member1EarningStatus} name="Member1EarningStatus"onChange={updateFormdetails}>
                                    <option value="select">--Select--</option>
                                    <option value="Working">Working</option>
                                    <option value="Retired">Retired</option>
                                    <option value="Studying">Studying</option>
                                </select>
                            </div>
                            <div className="occupation mb-3">
                                <label htmlFor="occupation" className="mb-3">Occupation</label>
                                <select htmlFor="occupation"defaultValue={props.data.Member1Occupation}name="Member1Occupation"onChange={updateFormdetails} id="">
                                    <option value="select">--Select--</option>
                                    <option value="Service">Service</option>
                                    <option value="Buiseness">Buiseness</option>
                                    <option value="Student">Student</option>
                                    <option value="Agriculture">Agriculture</option>
                                </select>
                            </div>
                            <div className="organization mb-3">
                                <label htmlFor="Organization" className="mb-3">Organization</label>
                                <input type="text" defaultValue={props.data.Member1Organization}name="Member1Organization"onChange={updateFormdetails}/>
                            </div>
                            <div className="incomepermonth mb-3">
                                <label htmlFor="Income" className="mb-3">Income Per Month</label>
                                <input type="text" defaultValue={props.data.Member1Income}name="Member1Income"onChange={updateFormdetails}/>
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
                                <label htmlFor="Member Name" className="mb-3">Name</label>
                                <input type="text" defaultValue={props.data.Member2Name}name="Member2Name"onChange={updateFormdetails}/>
                            </div>
                            <div className="relationship mb-3">
                                <label htmlFor="Relationship" className="mb-3">Relationship</label>
                                <select htmlFor="Relationship" defaultValue={props.data.Member2Relationship}name="Member2Relationship"onChange={updateFormdetails} id="">
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
                                <label htmlFor="Age" className="mb-3">Age</label>
                                <input type="text" defaultValue={props.data.Member2Age}name="Member2Age"onChange={updateFormdetails}/>
                            </div>
                            <div className="familyaddressinput mb-3">
                                <label htmlFor="Address" className="mb-3">Address</label>
                                <input type="text" defaultValue={props.data.Member2Address}name="Member2Address"onChange={updateFormdetails}/>
                            </div>
                            <div className="eduqualification mb-3">
                                <label htmlFor="eduqualification" className="mb-3">Educational Qualification</label>
                                <input type="text" defaultValue={props.data.Member2EduQualification}name="Member2EduQualification"onChange={updateFormdetails}/>
                            </div>
                            </div>
                            <div className="familydetailline2">
                            <div className="proqualification mb-3">
                                <label htmlFor="proqualification" className="mb-3">Professional Qualification</label>
                                <input type="text" defaultValue={props.data.Member2ProQualification}name="Member2ProQualification"onChange={updateFormdetails}/>
                            </div>
                            <div className="earningstatus mb-3">
                                <label htmlFor="status" className="mb-3">Earning Status</label>
                                <select htmlFor="status" defaultValue={props.data.Member2EarningStatus}name="Member2EarningStatus"onChange={updateFormdetails}>
                                    <option value="select">--Select--</option>
                                    <option value="Working">Working</option>
                                    <option value="Retired">Retired</option>
                                    <option value="Studying">Studying</option>
                                </select>
                            </div>
                            <div className="occupation mb-3">
                                <label htmlFor="occupation" className="mb-3">Occupation</label>
                                <select htmlFor="occupation"defaultValue={props.data.Member2Occupation}name="Member2Occupation"onChange={updateFormdetails} id="">
                                    <option value="select">--Select--</option>
                                    <option value="Service">Service</option>
                                    <option value="Buiseness">Buiseness</option>
                                    <option value="Student">Student</option>
                                    <option value="Agriculture">Agriculture</option>
                                </select>
                            </div>
                            <div className="organization mb-3">
                                <label htmlFor="Organization" className="mb-3">Organization</label>
                                <input type="text" defaultValue={props.data.Member2Organization}name="Member2Organization"onChange={updateFormdetails}/>
                            </div>
                            <div className="incomepermonth mb-3">
                                <label htmlFor="Income" className="mb-3">Income Per Month</label>
                                <input type="text" defaultValue={props.data.Member2Income}name="Member2Income"onChange={updateFormdetails}/>
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
                                <label htmlFor="Member Name" className="mb-3">Name</label>
                                <input type="text" defaultValue={props.data.Member3Name}name="Member3Name"onChange={updateFormdetails}/>
                            </div>
                            <div className="relationship mb-3">
                                <label htmlFor="Relationship" className="mb-3">Relationship</label>
                                <select htmlFor="Relationship" defaultValue={props.data.Member3Relationship}name="Member3Relationship"onChange={updateFormdetails} id="">
                                    <option value="select">--Select--</option>
                                    <option value="Father">Father</option>
                                    <option value="Mother">Mother</option>
                                    <option value="Brother">Brother</option>
                                    <option value="Sister">Sister</option>
                                    <option value="LocalGuardian">Local Guardian</option>
                                    <option value="Sister">Sister</option>
                                </select>
                            </div>
                            <div className="ageinput mb-3">
                                <label htmlFor="Age" className="mb-3">Age</label>
                                <input type="text" defaultValue={props.data.Member3Age}name="Member3Age"onChange={updateFormdetails}/>
                            </div>
                            <div className="familyaddressinput mb-3">
                                <label htmlFor="Address" className="mb-3">Address</label>
                                <input type="text" defaultValue={props.data.Member3Address}name="Member3Address"onChange={updateFormdetails}/>
                            </div>
                            <div className="eduqualification mb-3">
                                <label htmlFor="eduqualification" className="mb-3">Educational Qualification</label>
                                <input type="text" defaultValue={props.data.Member3EduQualification}name="Member3EduQualification"onChange={updateFormdetails}/>
                            </div>
                            </div>
                            <div className="familydetailline2">
                            <div className="proqualification mb-3">
                                <label htmlFor="proqualification" className="mb-3">Professional Qualification</label>
                                <input type="text"defaultValue={props.data.Member3ProQualification}name="Member3ProQualification"onChange={updateFormdetails} />
                            </div>
                            <div className="earningstatus mb-3">
                                <label htmlFor="status" className="mb-3">Earning Status</label>
                                <select htmlFor="status"defaultValue={props.data.Member3EarningStatus}name="Member3EarningStatus"onChange={updateFormdetails}>
                                    <option value="select">--Select--</option>
                                    <option value="Working">Working</option>
                                    <option value="Retired">Retired</option>
                                    <option value="Studying">Studying</option>
                                </select>
                            </div>
                            <div className="occupation mb-3">
                                <label htmlFor="occupation" className="mb-3">Occupation</label>
                                <select htmlFor="occupation"defaultValue={props.data.Member3Occupation}name="Member3Occupation"onChange={updateFormdetails} id="">
                                    <option value="select">--Select--</option>
                                    <option value="Service">Service</option>
                                    <option value="Buiseness">Buiseness</option>
                                    <option value="Student">Student</option>
                                    <option value="Agriculture">Agriculture</option>
                                </select>
                            </div>
                            <div className="organization mb-3">
                                <label htmlFor="Organization" className="mb-3">Organization</label>
                                <input type="text" defaultValue={props.data.Member3Organization}name="Member3Organization"onChange={updateFormdetails}/>
                            </div>
                            <div className="incomepermonth mb-3">
                                <label htmlFor="Income" className="mb-3">Income Per Month</label>
                                <input type="text" defaultValue={props.data.Member3Income}name="Member3Income"onChange={updateFormdetails}/>
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
                                <label htmlFor="Member Name" className="mb-3">Name</label>
                                <input type="text" defaultValue={props.data.Member4Name}name="Member4Name"onChange={updateFormdetails}/>
                            </div>
                            <div className="relationship mb-3">
                                <label htmlFor="Relationship" className="mb-3">Relationship</label>
                                <select htmlFor="Relationship" defaultValue={props.data.Member4Relationship}name="Member4Relationship"onChange={updateFormdetails} id="">
                                    <option value="select">--Select--</option>
                                    <option value="Father">Father</option>
                                    <option value="Mother">Mother</option>
                                    <option value="Brother">Brother</option>
                                    <option value="Sister">Sister</option>
                                    <option value="LocalGuardian">Local Guardian</option>
                                    <option value="Sister">Sister</option>
                                </select>
                            </div>
                            <div className="ageinput mb-3">
                                <label htmlFor="Age" className="mb-3">Age</label>
                                <input type="text" defaultValue={props.data.Member4Age}name="Member4Age"onChange={updateFormdetails}/>
                            </div>
                            <div className="familyaddressinput mb-3">
                                <label htmlFor="Address" className="mb-3">Address</label>
                                <input type="text" defaultValue={props.data.Member4Address}name="Member4Address"onChange={updateFormdetails}/>
                            </div>
                            <div className="eduqualification mb-3">
                                <label htmlFor="eduqualification" className="mb-3">Educational Qualification</label>
                                <input type="text" defaultValue={props.data.Member4EduQualification}name="Member4EduQualification"onChange={updateFormdetails}/>
                            </div>
                            </div>
                            <div className="familydetailline2">
                            <div className="proqualification mb-3">
                                <label htmlFor="proqualification" className="mb-3">Professional Qualification</label>
                                <input type="text" defaultValue={props.data.Member4ProQualification}name="Member4ProQualification"onChange={updateFormdetails}/>
                            </div>
                            <div className="earningstatus mb-3">
                                <label htmlFor="status" className="mb-3">Earning Status</label>
                                <select htmlFor="status"defaultValue={props.data.Member4EarningStatus}name="Member4EarningStatus"onChange={updateFormdetails}>
                                    <option value="select">--Select--</option>
                                    <option value="Working">Working</option>
                                    <option value="Retired">Retired</option>
                                    <option value="Studying">Studying</option>
                                </select>
                            </div>
                            <div className="occupation mb-3">
                                <label htmlFor="occupation" className="mb-3">Occupation</label>
                                <select htmlFor="occupation"defaultValue={props.data.Member4Occupation}name="Member4Occupation"onChange={updateFormdetails} id="">
                                    <option value="select">--Select--</option>
                                    <option value="Service">Service</option>
                                    <option value="Buiseness">Buiseness</option>
                                    <option value="Student">Student</option>
                                    <option value="Agriculture">Agriculture</option>
                                </select>
                            </div>
                            <div className="organization mb-3">
                                <label htmlFor="Organization" className="mb-3">Organization</label>
                                <input type="text" defaultValue={props.data.Member4Organization}name="Member4Organization"onChange={updateFormdetails}/>
                            </div>
                            <div className="incomepermonth mb-3">
                                <label htmlFor="Income" className="mb-3">Income Per Month</label>
                                <input type="text"defaultValue={props.data.Member4Income}name="Member4Income"onChange={updateFormdetails} />
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
                                <label htmlFor="Member Name" className="mb-3">Name</label>
                                <input type="text" defaultValue={props.data.Member5Name}name="Member5Name"onChange={updateFormdetails}/>
                            </div>
                            <div className="relationship mb-3">
                                <label htmlFor="Relationship" className="mb-3">Relationship</label>
                                <select htmlFor="Relationship" defaultValue={props.data.Member5Relationship}name="Member5Relationship"onChange={updateFormdetails} id="">
                                    <option value="select">--Select--</option>
                                    <option value="Father">Father</option>
                                    <option value="Mother">Mother</option>
                                    <option value="Brother">Brother</option>
                                    <option value="Sister">Sister</option>
                                    <option value="LocalGuardian">Local Guardian</option>
                                    <option value="Sister">Sister</option>
                                </select>
                            </div>
                            <div className="ageinput mb-3">
                                <label htmlFor="Age" className="mb-3">Age</label>
                                <input type="text" defaultValue={props.data.Member5Age}name="Member5Age"onChange={updateFormdetails}/>
                            </div>
                            <div className="familyaddressinput mb-3">
                                <label htmlFor="Address" className="mb-3">Address</label>
                                <input type="text" defaultValue={props.data.Member5Address}name="Member5Address"onChange={updateFormdetails}/>
                            </div>
                            <div className="eduqualification mb-3">
                                <label htmlFor="eduqualification" className="mb-3">Educational Qualification</label>
                                <input type="text" defaultValue={props.data.Member5EduQualification}name="Member5EduQualification"onChange={updateFormdetails}/>
                            </div>
                            </div>
                            <div className="familydetailline2">
                            <div className="proqualification mb-3">
                                <label htmlFor="proqualification" className="mb-3">Professional Qualification</label>
                                <input type="text" defaultValue={props.data.Member5ProQualification}name="Member5ProQualification"onChange={updateFormdetails}/>
                            </div>
                            <div className="earningstatus mb-3">
                                <label htmlFor="status" className="mb-3">Earning Status</label>
                                <select htmlFor="status"defaultValue={props.data.Member5EarningStatus}name="Member5EarningStatus"onChange={updateFormdetails}>
                                    <option value="select">--Select--</option>
                                    <option value="Working">Working</option>
                                    <option value="Retired">Retired</option>
                                    <option value="Studying">Studying</option>
                                </select>
                            </div>
                            <div className="occupation mb-3">
                                <label htmlFor="occupation" className="mb-3">Occupation</label>
                                <select htmlFor="occupation"defaultValue={props.data.Member5Occupation}name="Member5Occupation"onChange={updateFormdetails} id="">
                                    <option value="select">--Select--</option>
                                    <option value="Service">Service</option>
                                    <option value="Buiseness">Buiseness</option>
                                    <option value="Student">Student</option>
                                    <option value="Agriculture">Agriculture</option>
                                </select>
                            </div>
                            <div className="organization mb-3">
                                <label htmlFor="Organization" className="mb-3">Organization</label>
                                <input type="text" defaultValue={props.data.Member5Organization}name="Member5Organization"onChange={updateFormdetails}/>
                            </div>
                            <div className="incomepermonth mb-3">
                                <label htmlFor="Income" className="mb-3">Income Per Month</label>
                                <input type="text" defaultValue={props.data.Member5Income}name="Member5Income"onChange={updateFormdetails}/>
                            </div>

                         </div>

                        </div>
                      </div>
                  </div>
                  <div className="mybutton mt-3" style={{display:(formTitle==="familydetail"?'block':'none')}}>
                    <button className="savebutton btn-success"type="button" onClick={save}>Save</button>
                    </div>  
            <div className="form-body container" style={{display:(formTitle==="qualifyingexam"?'block':'none')}}>
                <div className="physics ms-2">
                    <div className="physicsheading pt-3">
                        <h2>Marks in Physics</h2>
                    </div>
                    <div className="physics-marks-input mt-3">
                        <div className="physicsline1 ms-2">
                            <div className="obtainedmarks mb-3">
                                <label htmlFor="ObtainedMarks" className="mb-3">Marks Obtained</label>
                                <input type="text"defaultValue={props.data.PhyMarks}name="PhyMarks"onChange={updateFormdetails} />
                            </div>
                        </div>
                        <div className="physicsline2 mb-3">
                            <div className="totalmarks mb-3">
                                <label htmlFor="TotalMarks" className="mb-3">Total Marks</label>
                                <input type="text" defaultValue="100"/>
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
                                <label htmlFor="ObtainedMarks"  className="mb-3">Marks Obtained</label>
                                <input type="text"defaultValue={props.data.ChemMarks}name="ChemMarks"onChange={updateFormdetails} />
                            </div>
                        </div>
                        <div className="physicsline2 ms-2">
                            <div className="totalmarks mb-3" >
                                <label htmlFor="TotalMarks" className="mb-3">Total Marks</label>
                                <input type="text" defaultValue="100"/>
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
                                <label htmlFor="ObtainedMarks" className="mb-3">Marks Obtained</label>
                                <input type="text" defaultValue={props.data.MathMarks}name="MathMarks"onChange={updateFormdetails}/>
                            </div>
                        </div>
                        <div className="physicsline2 ms-2">
                            <div className="totalmarks mb-3" >
                                <label htmlFor="TotalMarks" className="mb-3">Total Marks</label>
                                <input type="text" defaultValue="100"/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="percentage mb-3 ms-2">
                        <div className="percentageheading pt-3 mb-3">
                            <h2>Percentage</h2>
                            <input type="text"defaultValue={props.data.Percentage}name="Percentage"onChange={updateFormdetails} />
                        </div>
                </div>

            </div>
            <div className="mybutton mt-3" style={{display:(formTitle==="qualifyingexam"?'block':'none')}}>
                <button className="savebutton btn-success"type="button" onClick={save}>Save</button>
                <button className="savebutton btn-success mx-4"type="button" onClick={submit}>Submit</button>
            </div>
            </form>
            </div>

            

    )
}