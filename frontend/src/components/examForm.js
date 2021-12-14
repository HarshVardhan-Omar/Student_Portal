import React from "react";
import { useState,useRef,useEffect } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/Table";
import logo from "./logo.png"
import "./examform.css";
import XLSX from "./xlsx.full.min.js"
function examForm(props) {
    document.title="Exam Form"
    const[semester,setSemester]=useState("Select")
    const[examtype,setExamType]=useState("Select")
    const[subjects,setSubjects]=useState([])
    const[subjectcode,setSubjectCode]=useState([])

    const handleSemester=(e)=>{
        setSemester(e.target.value);     
    }
    const handleExamType=(e)=>{
        setExamType(e.target.value);     
    }
    const firstRender = useRef(true)

    useEffect(() => {
        if (firstRender.current) {
            firstRender.current = false
            return
        }
        fetchsubjects()

    }, [semester,examtype])
    async function fetchsubjects(){
        if(semester!="Select"&&examtype!="Select"){
            const requestoptions = {
                method: "POST",
                headers: {
                  'Content-Type': 'application/json',
                  'X-CSRFToken': props.csrftoken
                },
                body: JSON.stringify({
                  Branch: props.data.Branch,
                }),
              };
              props.setProgress(10)
              let response = await fetch("/api/fetchsyllabus", requestoptions)
              props.setProgress(50)
              if (response.status == 200) {
                props.setProgress(100)
                let datum = await response.json()
                let selectedFile = await fetch(await datum.Content);
                printsubjects(selectedFile)
              }
              else {
                  props.setProgress(100)
              }
        }
    }

    //Function to Print Subjects Based on User's Current Semester and Exam Type
    const printsubjects = async (e) => {
      setSubjects([])
      setSubjectCode([])
      
        if (XLSX) {
          let data = [{}]
          var selectedFile = await e.blob()
          XLSX.utils.json_to_sheet(data, 'out.xlsx');
          if (selectedFile) {
            let str = ``;
            let str1 = ``;
            let str2= ``;
            let str3 = ``;
            let fileReader = new FileReader();
            fileReader.readAsBinaryString(selectedFile);
            fileReader.onload = (event) => {
              let data = event.target.result;
              let workbook = XLSX.read(data, { type: "binary" });
              workbook.SheetNames.forEach(sheet => {
                let rowObject = XLSX.utils.sheet_to_row_object_array(workbook.Sheets[sheet]);
                var to_use = JSON.parse(JSON.stringify(rowObject, undefined, 4))
                for (var i = 0; i < to_use.length; i++) {
                  if (  (to_use[i][Object.keys(to_use[0])[0]]==1 && to_use[i][Object.keys(to_use[0])[1]]=="Odd"  && semester=="1") ||
                        (to_use[i][Object.keys(to_use[0])[0]]==1 && to_use[i][Object.keys(to_use[0])[1]]=="Even" && semester=="2") ||
                        (to_use[i][Object.keys(to_use[0])[0]]==2 && to_use[i][Object.keys(to_use[0])[1]]=="Odd"  && semester=="3") ||
                        (to_use[i][Object.keys(to_use[0])[0]]==2 && to_use[i][Object.keys(to_use[0])[1]]=="Even" && semester=="4") ||
                        (to_use[i][Object.keys(to_use[0])[0]]==3 && to_use[i][Object.keys(to_use[0])[1]]=="Odd"  && semester=="5") ||
                        (to_use[i][Object.keys(to_use[0])[0]]==3 && to_use[i][Object.keys(to_use[0])[1]]=="Even" && semester=="6") ||
                        (to_use[i][Object.keys(to_use[0])[0]]==4 && to_use[i][Object.keys(to_use[0])[1]]=="Odd"  && semester=="7") ||
                        (to_use[i][Object.keys(to_use[0])[0]]==4 && to_use[i][Object.keys(to_use[0])[1]]=="Even" && semester=="8")
                  ) {
                      var subject=to_use[i][Object.keys(to_use[0])[2]]
                      var subjectscode=to_use[i][Object.keys(to_use[0])[4]]
                      setSubjects(prevArray => [...prevArray, subject])
                      setSubjectCode(prevArray => [...prevArray, subjectscode])
                      
                    str +=
                      `<tr>
                      <input type="checkbox"  id="subjectcheckbox"value='${subject}'></input>
                      </tr>`;
                    str1+=`<tr>
                           <p>${to_use[i][Object.keys(to_use[0])[3]]}</p>
                           </tr>`
                    str2+=`<tr>
                           <p>${to_use[i][Object.keys(to_use[0])[4]]}</p>
                           </tr>`
                    str3+=`<tr>
                           <p>${to_use[i][Object.keys(to_use[0])[2]]}</p>
                           </tr>`
                  }
                }
                appendelement(str,str1,str2,str3)
              });
            }
          }
        }
      }



    //Function to Add the fetched Subjects into the DOM
    function appendelement(str,str1,str2,str3){
        if(document.getElementsByClassName("default")[0]!=null){
        var defaultelement=document.getElementsByClassName("default")[0];
        defaultelement.style.display="none";
        }
       
        var block=document.getElementsByClassName("selecttablecontent")[0];
        block.innerHTML=str;
        var block=document.getElementsByClassName("typetablecontent")[0];
        block.innerHTML=str1;
        var block=document.getElementsByClassName("codestablecontent")[0];
        block.innerHTML=str2;
        var block=document.getElementsByClassName("nametablecontent")[0];
        block.innerHTML=str3;
        var subjects=document.getElementsByClassName("subjecttable")[0];
        subjects.style.display="flex"
    }
    var content="";
    const downloadexamform=async ()=>{
        
        content+=`<div class="ExamForm">
                  <div class="ExamFormHeading">
                  <div class="Headinglogo">
                    <img class="examformlogo"src=${logo} alt="HBTU">
                  </div>
                  <div class="headingcontent">
                  <h2>HARCOURT BUTLER TECHNICAL UNIVERSITY</h2>
                  <h3>( Examination Form For Regular / Readmitted / Ex / Carry Over Students for ODD SEMESTER , 2020-2021 )</h3>
                  </div>
                  </div>
                  <div class="initialdetails">
                  <div class="examformrollno">
                  <div class="rollheading">
                   <h2>Roll No.</h2>
                  </div>
                  <div class="rollcontent">
                   <p>${props.data.UniversityRollNo}</p>
                  </div>
                  </div>
                  <div class="examformrollno">
                  <div class="rollheading">
                   <h2>Branch</h2>
                  </div>
                  <div class="rollcontent">
                   <p>${props.data.Branch}</p>
                  </div>
                  </div>
                  <div class="examformrollno">
                  <div class="rollheading">
                   <h2>Studying in Year</h2>
                  </div>
                  <div class="rollcontent">
                   <p>${props.data.Year}</p>
                  </div>
                  </div>
                  <div class="examformrollno">
                  <div class="rollheading">
                   <h2>Semester</h2>
                  </div>
                  <div class="rollcontent">
                   <p>${props.data.CurrentSemester}</p>
                  </div>
                  </div>
                  <div class="examformrollno">
                  <div class="rollheading">
                   <h2>Mobile No.</h2>
                  </div>
                  <div class="rollcontent">
                   <p>${props.data.Contact}</p>
                  </div>
                  </div>
                  </div>
                  <div class="vcmessage">
                  <p>
                  To,<br>
                    <br>
                    &nbsp&nbsp&nbsp<strong>Hon'ble Vice Chancellor</strong><br>
                    &nbsp&nbsp&nbspHarcourt Butler Technical University , Kanpur<br>
                    <br>
                    Sir,<br>
                    <br>
                    &nbsp&nbsp&nbspKindly grant me permission to appear in the ensuing I / II / III / IV year Semester
                    Final Examination for Bachelor of Technology / Master of Technology / Master of Computer Appications / Ph.D.<br>
                    I declare that:<br>
                    <br>
                    1.I have read the rules, relevant ordinances, Statutes etc. and undertake to abide by them. I will
                    not claim any benefit arising out of some error or mistake on the part of the university office.<br>
                    2.I am not appearing for any other examination of the University not permitted under the Ordinance.<br>
                    3.I have not been debarred from appearing in the examination by any University on account of use of unfair means<br>
                    4.I will have no objection if i am being searched by any one deputed by the supritendent of the Examination
                    during course of examination<br>
                    <br>
                    <br>
                    &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp
                    &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp
                    &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp
                    &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp
                    &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp
                    &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp(Signature of Candidate)
                  </p>
                  </div>
                  <div class="particulars">
                  <h2>PARTICULAR TO BE FILLED BY THE STUDENT</h2>
                  <br>
                  <p>
                   1.&nbspName of the Course:&nbsp ${props.data.Programme}&nbsp&nbsp&nbsp&nbsp2.&nbspSession:&nbsp2020-2021<br>
                   <br>
                   3.&nbspSemester:&nbsp${props.data.CurrentSemester}&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp4.Branch Code:&nbsp08<br>
                   <br>
                   5.&nbsp Status of Students:<br>
                   <br>
                   6.&nbspName of candidate in capital letter ( records as per High School,In English ):<br>
                   ${(props.data.StudentName).toUpperCase()}<br>
                   Name of Candidate( records as per High School, In Hindi ):<br>
                   <input type="text"></input><br>
                   <br>
                   7.&nbsp Father's Name( as per High School records, In English ):<br>
                   ${(props.data.FatherName)}<br>
                   Father's Name( as per High School records, In Hindi):<br>
                   <input type="text"></input><br>
                   <br>
                   8.&nbsp Mother's Name( as per High School records, In English):<br>
                   ${(props.data.MotherName)}<br>
                   Mother's Name( as per High School records, In Hindi):<br>
                   <input type="text"></input><br>
                   <br>
                   9.&nbspDate of Birth:&nbsp&nbsp${props.data.DateOfBirth}<br>
                   <br>
                   10.&nbspCategory:&nbsp&nbsp${props.data.Category}<br>
                   <br>
                   11.&nbspGender:&nbsp&nbsp${props.data.Gender}&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp
                   &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp
                   &nbsp12.&nbspYear of Admission:&nbsp<br>
                   <br>
                   13.&nbspEnrollment No.:&nbsp${props.data.EnrollmentNumber}&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp14.&nbspRoll No:&nbsp${props.data.UniversityRollNo}<br>
                   <br>
                   15.&nbspE-mail ID:&nbsp${props.data.PersonalEmail}&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp16. Aadhaar No.:&nbsp${props.data.AadhaarCard}<br>
                   <br>
                   17. Particulars of the Qualifying Examination passed :( Inter / Graduation / Diploma / B.Tech I / II /III / MCA I / II, M.Tech )<br>
                   Name of Examination :__________512sz  bnm,./  _______ Year :_______ Roll No :_______________<br><br>
                   18. Whether he / she has appeared at this Examination Before . If so , give details :<br>
                   Name of Examination :__________________ Year :_______ Roll No :________________ Result of Examination :_____________
                   <br><br>
                   19. Particulars of passing First , Second and Third year of the Programme<br><br>
                   <table class="ExamForms">
                     <tr>
                       <th>Examination 
                       B.Tech / MCA / 
                       M.Tech</th>
                       <th>Year</th>
                       <th>Roll No.</th>
                       <th>
                       Marks 
                     Obtained</th>
                       <th>
                       Maximum 
                       Marks</th>
                       <th>
                       Result</th>
                       <th> If promoted with Carry Over Papers
                       provide name of papers and whether it is 
                       cleared / not cleared</th>
                     </tr>
                     <tr>
                       <td>First Year</td>
                       <td></td>
                       <td></td>
                       <td></td>
                       <td></td>
                       <td></td>
                       <td></td>
                       </tr>
                     <tr>
                     <td>Second Year</td>
                     <td></td>
                     <td></td>
                     <td></td>
                     <td></td>
                     <td></td>
                     <td></td>
                     </tr>
                     <tr>
                     <td>Third Year</td>
                     <td></td>
                     <td></td>
                     <td></td>
                     <td></td>
                     <td></td>
                     <td></td>
                     </tr>
                     <tr>
                     <td>Final Year</td>
                     <td></td>
                     <td></td>
                     <td></td>
                     <td></td>
                     <td></td>
                     <td></td>
                     </tr>
                    </table>
                    <br>
                    <br>
                    20. Subject Codes and Paper ID in which student wishes to appear in this Examination<br><br>
                    <table class="ExamForms">
                     <tr>
                       <th colspan="2">
                       Theory Subjects</th>
                       <th colspan="2"> Practical And Other Subjects</th>
                     </tr>
                     <tr>
                       <td>Paper Name</td>
                       <td>Paper Code</td>
                       <td>Paper Name</td>
                       <td>Paper Code</td>
                       </tr>
                     <tr>
                     <td>${subjects[0]}</td>
                     <td>${subjectcode[0]}</td>
                     <td></td>
                     <td></td>
                     </tr>
                     <tr>
                     <td>${subjects[1]}</td>
                     <td>${subjectcode[1]}</td>
                     <td></td>
                     <td></td>
                     </tr>
                     <tr>
                     <td>${subjects[2]}</td>
                     <td>${subjectcode[2]}</td>
                     <td></td>
                     <td></td>
                     </tr>
                     <tr>
                     <td>${subjects[3]}</td>
                     <td>${subjectcode[3]}</td>
                     <td></td>
                     <td></td>
                     </tr>
                     <tr>
                     <td>${subjects[4]}</td>
                     <td>${subjectcode[4]}</td>
                     <td></td>
                     <td></td>
                     </tr>
                     <tr>
                     <td>${subjects[5]}</td>
                     <td>${subjectcode[5]}</td>
                     <td></td>
                     <td></td>
                     </tr>
                    </table>
                    <br>
                    <br>
                    <br>
                    <br>
                    <br>
                    21. Complete permanent mailing address of the student<br>
                    <div class="details">
                    Name:  Name<br>
                    Address: Address<br>
                    Contact No.(Presently used by student): 1234
                    &nbsp&nbsp&nbsp&nbsp&nbsp
                    Pincode: 123455
                    </div>
                    <br><br>
                    <h4>DECLARATION BY THE CANDIDATE</h4>
                    <br>
                    I hereby declare that the information given above has been filled by me and is correct to the best of my knowledge and belief .
                    <br><br><br>
                    &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp
                    &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp
                    &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp
                    &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp
                    &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp
                    &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp
                    (Signature of Candidate)




                  </p>
                  </div>
                  </div>`;
                  
        var block=document.getElementsByClassName("pdflayout")[0]
        block.innerHTML=content
        
        downloadpdf();
    }
    function downloadpdf(){
        var block=document.getElementsByClassName("pdflayout")[0]
        var opt = {
            margin: 0.2,
            filename: 'ExamForm.pdf',
            image: { type: 'jpeg', quality: 8 },
            html2canvas: { scale: 2 },
            jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' },
        };
        html2pdf().from(block).set(opt).save()
        

    }
    return (
        <>
        <div className="parentpdf">
        <div className="pdflayout"></div>
        </div>
        <div className="exam-form">
            <h1 className="exam-head">Examination Form</h1>
            <Form>
                <Form.Group className="ele-form" controlId="exampleForm.ControlSelect1">
                    <Form.Label >Semester</Form.Label>
                    <Form.Control onChange={handleSemester}className="selectip ele-lab" as="select">
                        <option value="Select">Select Semester</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                    </Form.Control>
                </Form.Group>
                <Form.Group className="ele-form" controlId="exampleForm.ControlSelect1">
                    <Form.Label >Exam Type</Form.Label>
                    <Form.Control onChange={handleExamType}className="selectip ele-lab" as="select">
                        <option value="Select">Select Exam Type</option>
                        <option value="Regular">Regular</option>
                        <option value="CarryOver">CarryOver</option>
                        <option value="Spl. CarryOver">Spl. CarryOver</option>
                    </Form.Control>
                </Form.Group>
                
                <Form.Group className="ele-form" controlId="exampleForm.ControlSelect1">
                    <Form.Label >Branch</Form.Label>
                    <Form.Control as="input"type="text" style={{'padding':'6px 12px','background':'none'}}className="selectip ele-lab" value={props.data.Branch} disabled={true}></Form.Control>
                </Form.Group>
                <div className="subjectlistheading ele-form">
                 <Form.Label >Subjects</Form.Label>
                </div>
                <div className="subjectlist">
                    <p className="default ele-lab">Choose Semester and Exam Type to see subjects...</p>
                    <div className="subjecttable mt-2">
                    <div className="selecttab mx-2">
                        <Form.Label className="ele-form">Select</Form.Label>
                        <div className="selects">
                        <Table striped bordered hover variant="dark">
                            <tbody className="selecttablecontent">
                                
                            </tbody>
                        </Table>

                        </div>
                    </div>
                    <div className="subjecttype mx-2">
                        <Form.Label className="ele-form">Subject Type</Form.Label>
                        <div className="types">
                        <Table striped bordered hover variant="dark">
                            <tbody className="typetablecontent">
                                
                            </tbody>
                        </Table>
                        </div>
                    </div>
                    <div className="subjectcode mx-2">
                        <Form.Label className="ele-form">Subject Code</Form.Label>
                        <div className="codes">
                        <Table striped bordered hover variant="dark">
                            <tbody className="codestablecontent">
                                
                            </tbody>
                        </Table>

                        </div>
                    </div>
                    <div className="subjectname mx-2">
                        <Form.Label className="ele-form">Subject Name</Form.Label>
                        <div className="names">
                        <Table striped bordered hover variant="dark">
                            <tbody className="nametablecontent">
                                
                            </tbody>
                        </Table>

                        </div>
                    </div>
                    </div>
                </div>
                <Form.Group className="ele-form button">
                    <Button className="buttn" onClick={downloadexamform} disabled={(semester!="Select"&&examtype!="Select")?false:true}variant="outline-dark" type="button">
                        Download Exam Form
                    </Button>
                </Form.Group>
            </Form>
        </div>
        </>
    );
}
export default examForm;