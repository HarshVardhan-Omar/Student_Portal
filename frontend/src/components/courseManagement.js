import React from "react";
import Button from "react-bootstrap/Button";
import { useState } from "react";
import "./coursemanagement.css";
import XLSX from "./xlsx.full.min.js"
import { IoBookOutline } from "react-icons/io5";
export default function CourseManagement({ csrftoken, setProgress }) {
  const [branch, setBranch] = useState("")
  const [semester, setSemester] = useState("")
  const [syllabusVisibility, setSyllabusVisibility] = useState(false)
  const showsyllabus = (e) => {
    setSyllabusVisibility(true)
  }
  const hidesyllabus = (e) => {
    setSyllabusVisibility(false)
  }
  const handleBranchChange = (e) => {
    setBranch(e.target.value)
  }
  const handleSemChange = (e) => {
    setSemester(e.target.value)
  }
  const callSyllabusApi = (e) => {
    e.preventDefault();
    fetchSyllabus();
  }

  async function fetchSyllabus() {
    const requestoptions = {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        'X-CSRFToken': csrftoken
      },
      body: JSON.stringify({
        Branch: branch,
      }),
    };
    setProgress(10)
    let response = await fetch("/api/fetchsyllabus", requestoptions)
    setProgress(50)
    if (response.status == 200) {
      setProgress(100)
      let datum = await response.json()
      let selectedFile = await fetch(await datum.Content);
      printer(selectedFile);
    }
    else {
      setProgress(100)
    }
  }

  const download_with_progress = (e) => {
    e.preventDefault();
    setProgress(40)
    if(download()){
      setTimeout(function(){ setProgress(60) }, 387);
      setTimeout(function(){ setProgress(100) }, 687);
    }
    else{
      setTimeout(function(){ setProgress(100) }, 387);
    }
  }

  const printer = async (e) => {
    if (XLSX) {
      let data = [{}]
      var selectedFile = await e.blob()
      XLSX.utils.json_to_sheet(data, 'out.xlsx');
      if (selectedFile) {
        let str = ``;
        let fileReader = new FileReader();
        fileReader.readAsBinaryString(selectedFile);
        if(selectedFile.type=="text/html"){
          console.clear();
          return
        }
        fileReader.onload = (event) => {
          let data = event.target.result;
          let workbook = XLSX.read(data, { type: "binary" });
          workbook.SheetNames.forEach(sheet => {
            let rowObject = XLSX.utils.sheet_to_row_object_array(workbook.Sheets[sheet]);
            var to_use = JSON.parse(JSON.stringify(rowObject, undefined, 4))
            // console.log(to_use)
            // console.log(Object.keys(to_use[0]))
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
                str +=
                  `<div class="subblock">
                    <div class="subname">
                    <h1>
                    ${to_use[i][Object.keys(to_use[0])[2]]}
                    </h1>
                    </div>
                    <div class="uppersection">
                      <div class="miniblock">
                        <div class="head">
                        ${Object.keys(to_use[0])[3]}:
                        </div>
                        <div class="detail">
                        ${to_use[i][Object.keys(to_use[0])[3]]}
                        </div>
                      </div>
                      <div class="miniblock">
                        <div class="head">
                        ${Object.keys(to_use[0])[4]}:
                        </div>
                        <div class="detail">
                        ${to_use[i][Object.keys(to_use[0])[4]]}
                        </div>
                      </div>
                      <div class="miniblock">
                        <div class="head">
                        ${Object.keys(to_use[0])[5]}:
                        </div>
                        <div class="detail">
                        ${to_use[i][Object.keys(to_use[0])[5]]}
                        </div>
                      </div>
                    </div>
                    <div class="uppersection">
                      <div class="miniblock">
                        <div class="head">
                        ${Object.keys(to_use[0])[6]}:
                        </div>
                        <div class="detail">
                        ${to_use[i][Object.keys(to_use[0])[6]]}
                        </div>
                      </div>
                      <div class="miniblock">
                        <div class="head">
                        ${Object.keys(to_use[0])[7]}:
                        </div>
                        <div class="detail">
                        ${to_use[i][Object.keys(to_use[0])[7]]}
                        </div>
                      </div>
                      <div class="miniblock">
                        <div class="head">
                        ${Object.keys(to_use[0])[8]}:
                        </div>
                        <div class="detail">
                        ${to_use[i][Object.keys(to_use[0])[8]]}
                        </div>
                      </div>
                      <div class="miniblock">
                        <div class="head">
                        ${Object.keys(to_use[0])[9]}:
                        </div>
                        <div class="detail">
                        ${to_use[i][Object.keys(to_use[0])[9]]}
                        </div>
                      </div>
                    </div>
                    <div class="lowersection">
                      <div class="downwardblock">
                        <div class="unitheading">
                        ${Object.keys(to_use[0])[10]}:
                        </div>
                        <div class="unitdesc">
                        ${to_use[i][Object.keys(to_use[0])[10]]}
                        </div>
                      </div>
                      <div class="downwardblock">
                        <div class="unitheading">
                        ${Object.keys(to_use[0])[11]}:
                        </div>
                        <div class="unitdesc">
                        ${to_use[i][Object.keys(to_use[0])[11]]}
                        </div>
                      </div>
                      <div class="downwardblock">
                        <div class="unitheading">
                        ${Object.keys(to_use[0])[12]}:
                        </div>
                        <div class="unitdesc">
                        ${to_use[i][Object.keys(to_use[0])[12]]}
                        </div>
                      </div>
                      <div class="downwardblock">
                        <div class="unitheading">
                        ${Object.keys(to_use[0])[13]}:
                        </div>
                        <div class="unitdesc">
                        ${to_use[i][Object.keys(to_use[0])[13]]}
                        </div>
                      </div>
                      <div class="downwardblock">
                        <div class="unitheading">
                        ${Object.keys(to_use[0])[14]}:
                        </div>
                        <div class="unitdesc">
                        ${to_use[i][Object.keys(to_use[0])[14]]}
                        </div>
                      </div>
                    </div>
                  </div>`
              }
            }
            opener(str)
          });
        }
      }
    }
  }

  const opener = (e) => {
    if (document.getElementsByClassName('block')) {
      document.getElementsByClassName('block')[0].innerHTML = e
      // console.log(document.getElementsByClassName('block')[0])
      // console.log(e)
    }
    setSyllabusVisibility(true)
  }


  return (
    <div className="course-management student-registration">
      <div className="contain">
        <IoBookOutline className="book-icon" />
        <div className="branch mb-2">
          <label htmlFor="Branch" className="mb-4">
            Branch
          </label>
          <select htmlFor="Branch" id="Branch" onChange={handleBranchChange}>
            <option value="">--Select--</option>
            <option value="CS">Computer Science and Engineering</option>
            <option value="IT">Information Technology</option>
            <option value="ET">Electronics Technology</option>
            <option value="ME">Mechanical Engineering</option>
            <option value="EE">Electrical Engineering</option>
            <option value="CE">Civil Engineering</option>
            <option value="CH">Chemical Engineering</option>
            <option value="PT">Paint Technology</option>
            <option value="OT">Oil Technology</option>
            <option value="PT">Leather Technology</option>
            <option value="PL">Plastic Technology</option>
            <option value="FT">Food Technology</option>
            <option value="BE">Bio-Chemical Engineering</option>
          </select>
        </div>
        <div className="current-semester mb-4">
          <label htmlFor="CurrentSemester" className="mb-2">
            Current Semester
          </label>
          <select htmlFor="" id="" onChange={handleSemChange}>
            <option value="">--Select--</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
          </select>
        </div>
        <Button disabled={branch == "" || semester == ""} variant="secondary" onClick={callSyllabusApi}>
          See Syllabus
        </Button>
      </div>
      <div className="syllabusOpacity" style={{ display: syllabusVisibility ? "flex" : "none" }}>
        <div className="syllabus" >
          <div className="cross" onClick={hidesyllabus} style={{ cursor: "pointer" }}>x</div>
          <div className="block">
          </div>
          <div className="buttonarea">
            <button onClick={download_with_progress} className="downloadbutton btn-secondary">Download as PDF</button>
          </div>
        </div>
      </div>
    </div>
  );
}
