import React, { useEffect, useRef } from 'react';
import Button from 'react-bootstrap/Button'
import "./result.css";
import { useState } from "react";
import XLSX from "./xlsx.full.min.js"

const useDidMountEffect = (func, deps) => {
    const didMount = useRef(false);

    useEffect(() => {
        if (didMount.current) func();
        else didMount.current = true;
    }, deps);
}

function Result( {data, setProgress} ) {
    const [selectedYear, setSelectedYear] = useState("")
    const [selectedType, setSelectedType] = useState("")
    const [loads, setLoads] = useState(false)
    const [errer,setErrer] = useState("")
    const [errev,setErrerv] = useState(false)
    const [oddcon, setOddcon] = useState([])
    const [evencon, setEvencon] = useState([])
    
    const handleYearChange = (e) => {
        setSelectedYear(e.target.value)
    }
    const handleTypeChange = (e) => {
        setSelectedType(e.target.value)
    }
    const checkValidity = (e) => {
        setOddcon("")
        setEvencon("")
        if(selectedYear!="" && selectedType!=""){
            fetchAndShow();
        }
        else{
            setLoads(false)
        } 
    }
    useDidMountEffect(() => {
        checkValidity();
      }, [selectedYear, selectedType]);
    
    const strifyOdd = (e) => {
        if(e=="1") return "ResultSem1" 
        if(e=="2") return "ResultSem3" 
        if(e=="3") return "ResultSem5" 
        if(e=="4") return "ResultSem7" 
    }
    const strifyEven = (e) => {
        if(e=="1") return "ResultSem2"
        if(e=="2") return "ResultSem4"
        if(e=="3") return "ResultSem6"
        if(e=="4") return "ResultSem8"
    }

    async function fetchAndShow(e) {
        setProgress(10)
        setTimeout(function(){ setProgress(60) }, 200);
        setTimeout(function(){ setProgress(100) }, 400);
        setErrer("")
        setErrerv(false)
        setLoads(false)
        let selectedFileOdd = await fetch(await data[strifyOdd(selectedYear)]);
        let selectedFileEven = await fetch(await data[strifyEven(selectedYear)]);
        printerodd(await selectedFileOdd);
        printereven(await selectedFileEven)
    }

    const printerodd = async (e) => {
        if (XLSX) {
            let data = [{}];
            var selectedFile = await e.blob();
            XLSX.utils.json_to_sheet(data, "out.xlsx");
            if (selectedFile) {
                let str = ``;
                let fileReader = new FileReader();
                fileReader.readAsBinaryString(selectedFile);
                if(selectedFile.type=="text/html"){
                    str+=`Result Not Declared`
                    openerodd(str);
                    return
                } 
                fileReader.onload = (event) => {
                    let data = event.target.result;
                    let workbook = XLSX.read(data, { type: "binary" });
                    workbook.SheetNames.forEach((sheet) => {
                        let rowObject = XLSX.utils.sheet_to_row_object_array(
                            workbook.Sheets[sheet]
                        );
                        var to_use = JSON.parse(JSON.stringify(rowObject, undefined, 4));
                        setOddcon(to_use)
                        // console.log(to_use)
                        // console.log(Object.keys(to_use[0]))
                        str += `<table>`;
                        str += `<tr>`;
                        for (var j = 1; j < Object.keys(to_use[0]).length; j++) {
                            str += `<th>${Object.keys(to_use[0])[j]}</th>`;
                        }
                        str += `</tr>`;
                        var isData = false
                        for (var i = 0; i < to_use.length; i++) {
                            if (
                                (to_use[i][Object.keys(to_use[0])[0]] == "Regular" &&
                                    selectedType == "Regular") ||
                                (to_use[i][Object.keys(to_use[0])[0]] == "CarryOver" &&
                                    selectedType == "CarryOver") ||
                                (to_use[i][Object.keys(to_use[0])[0]] ==
                                    "Special CarryOver" &&
                                    selectedType == "Special CarryOver") ||
                                (to_use[i][Object.keys(to_use[0])[0]] == "Re-Admission" &&
                                    selectedType == "Re-Admission") ||
                                (to_use[i][Object.keys(to_use[0])[0]] == "Ex-Student" &&
                                    selectedType == "Ex-Student")
                            ) {
                                str += `<tr>`;
                                for (var j = 1; j < Object.keys(to_use[0]).length; j++) {
                                    str += `<td>${to_use[i][Object.keys(to_use[0])[j]]}</td>`;
                                    isData = true
                                }
                                str += `</tr>`;
                            }
                        }
                        str += `</table>`;
                        if(!isData) str = `No ${selectedType} result found for this semester`
                        openerodd(str);
                    });
                };
            }
        }
    };

    const printereven = async (e) => {
        if (XLSX) {
            let data = [{}];
            var selectedFile = await e.blob();
            XLSX.utils.json_to_sheet(data, "out.xlsx");
            if (selectedFile) {
                let str = ``;
                let fileReader = new FileReader();
                fileReader.readAsBinaryString(selectedFile);
                if(selectedFile.type=="text/html"){
                    str+=`Result Not Declared`
                    openereven(str);
                    return
                } 
                fileReader.onload = (event) => {
                    let data = event.target.result;
                    let workbook = XLSX.read(data, { type: "binary" });
                    workbook.SheetNames.forEach((sheet) => {
                        let rowObject = XLSX.utils.sheet_to_row_object_array(
                            workbook.Sheets[sheet]
                        );
                        var to_use = JSON.parse(JSON.stringify(rowObject, undefined, 4));
                        setEvencon(to_use)
                        // console.log(to_use)
                        // console.log(Object.keys(to_use[0]))
                        str += `<table>`;
                        str += `<tr>`;
                        var isData = false
                        for (var j = 1; j < Object.keys(to_use[0]).length; j++) {
                            str += `<th>${Object.keys(to_use[0])[j]}</th>`;
                        }
                        str += `</tr>`;
                        for (var i = 0; i < to_use.length; i++) {
                            if (
                                (to_use[i][Object.keys(to_use[0])[0]] == "Regular" &&
                                    selectedType == "Regular") ||
                                (to_use[i][Object.keys(to_use[0])[0]] == "CarryOver" &&
                                    selectedType == "CarryOver") ||
                                (to_use[i][Object.keys(to_use[0])[0]] ==
                                    "Special CarryOver" &&
                                    selectedType == "Special CarryOver") ||
                                (to_use[i][Object.keys(to_use[0])[0]] == "Re-Admission" &&
                                    selectedType == "Re-Admission") ||
                                (to_use[i][Object.keys(to_use[0])[0]] == "Ex-Student" &&
                                    selectedType == "Ex-Student")
                            ) {
                                str += `<tr>`;
                                for (var j = 1; j < Object.keys(to_use[0]).length; j++) {
                                    str += `<td>${to_use[i][Object.keys(to_use[0])[j]]}</td>`;
                                    isData = true
                                }
                                str += `</tr>`;
                            }
                        }
                        str += `</table>`;
                        if(!isData) str = `No ${selectedType} result found for this semester`
                        openereven(str);
                    });
                };
            }
        }
    };

    const openerodd = (e) => {
        if (document.getElementsByClassName('result-block-odd')) {
            document.getElementsByClassName('result-block-odd')[0].innerHTML = e
            // console.log(document.getElementsByClassName('block')[0])
            // console.log(e)
        }
        if(e!="Result Not Declared" && e!=`No ${selectedType} result found for this semester`){setLoads(true); setTimeout(function(){ setErrerv(false); }, 5); setErrerv("");}
        else{setErrerv(true); setErrerv("No Result Found For This Selection");}
    }
    const openereven = (e) => {
        if (document.getElementsByClassName('result-block-even')) {
            document.getElementsByClassName('result-block-even')[0].innerHTML = e
            // console.log(document.getElementsByClassName('block')[0])
            // console.log(e)
        }
        if(e!="Result Not Declared" && e!=`No ${selectedType} result found for this semester`){setLoads(true); setTimeout(function(){ setErrerv(false); }, 5); setErrerv("");}
        else{setErrerv(true); setErrer("No Result Found For This Selection");}
    }

    const processToTable = (e,sem) =>{
        var str = ``
        str += `<table>`
        
        str += `<tr><th>${sem}</th></tr>`
        str += `<tr>`
        for(var i=0 ; i<e.length ; i++){
            str += `<th> ${i+1} </th>`
        }
        str += `</tr>`


        str += `<tr>`
        for(var i=0 ; i<e.length ; i++){
            str += `<th> ${e[i][Object.keys(e[0])[2]]} </th>`
        }
        str += `</tr>`


        str += `<tr>`
        for(var i=0 ; i<e.length ; i++){
            str += `<th> ${e[i][Object.keys(e[0])[3]]}.00 </th>`
        }
        str += `</tr>`

        for(var j = 4; j<=8 ; j++){
            str += `<tr>`
            for(var i=0 ; i<e.length ; i++){
                str += `<th> ${Object.keys(e[0])[j]} </th>`
            }
            str += `</tr>`
        }


        var isData = false;
        for(var j = 4; j<=8 ; j++){
            str += `<tr>`
            for(var i=0 ; i<e.length ; i++){
                if(e[i][Object.keys(e[0])[0]]==selectedType){
                    str += `<td> ${e[i][Object.keys(e[0])[j]]} </td>`
                    isData = true
                }
            }
            str += `</tr>`
        }
    
        str+=`</table>`
        if(isData)
        return str
        else
        return ``
    }

    const showfull = (e) => {
        if(e=="Btech") return "Bachelor of Technology"
    }

    const downloadresult = async (e) => {
        if(document.getElementsByClassName("resultpdf")[0]){
        var block = document.getElementsByClassName("resultpdf")[0];
        var opt = {
            margin: 0.2,
            filename: 'result.pdf',
            image: { type: 'jpeg', quality: 8 },
            html2canvas: { scale: 2 },
            jsPDF: { unit: 'in', format: 'letter', orientation: 'landscape' },
            pagebreak: { mode: ['avoid-all'] }
        };
        if(await html2pdf().from(block).set(opt).save()){
            return true
        }
        else{
            return false
        }
        }
    }
    document.title="Result"
    return (
        <div className="result-container">
            <div className='hider' style={{backgroundColor: "white", width: "1100px", display: "none"}}>
                <div className='resultpdf' style={{display: "flex", flexDirection: "column"}}>
                    <h2>{`RESULT - ${"20"+(parseInt(data.UniversityRollNo.slice(0,2))+parseInt(selectedYear)-1)}-${"20"+(parseInt(data.UniversityRollNo.slice(0,2))+parseInt(selectedYear))} ${selectedType}`}</h2>
                    <h4>{`HARCOURT BUTLER TECHNICAL UNIVERSITY , NAWABGANJ , KANPUR , ( U.P. ) - INDIA`}</h4>
                    
                    <div className='flex-row'>
                        <div className='flex-coloumn'>
                            <p>{`RollNo : ${data.UniversityRollNo}`}</p>
                            <p>{`Name : ${data.StudentName}`}</p>
                            <p>{`Father's Name : ${data.FatherName}`}</p>
                        </div>
                        <div className='flex-coloumn'>
                            <p>{`COURSE : ${data.Programme}`}</p>
                            <p>{`BRANCH : ${data.Branch}`}</p>
                            <p>{`YEAR : ${selectedYear}`}</p>
                        </div>
                    </div>
                    
                    <div className='result-box'>
                        <div className="sem-result sem-legends">
                            <table className='legends'>
                                <tr><th>&nbsp;</th></tr>
                                <tr><th>SR NO</th></tr>
                                <tr><th>SUBJECT CODE</th></tr>
                                <tr><th>CREDIT</th></tr>
                                <tr><th>&nbsp;</th></tr>
                                <tr><th>&nbsp;</th></tr>
                                <tr><th>&nbsp;</th></tr>
                                <tr><th>&nbsp;</th></tr>
                                <tr><th>&nbsp;</th></tr>
                                <tr><td>&nbsp;</td></tr>
                                <tr><td>&nbsp;</td></tr>
                                <tr><td>&nbsp;</td></tr>
                                <tr><td>&nbsp;</td></tr>
                                <tr><td>&nbsp;</td></tr>
                            </table>
                        </div>
                        <div className="sem-result oddsem-result" dangerouslySetInnerHTML={{ __html: processToTable(oddcon, `SEM- ${(function(){if(selectedYear=="1")return"I";if(selectedYear=="2")return"III";if(selectedYear=="3")return"V";if(selectedYear=="4")return"VII"})()}`) }}></div>
                        <div className="sem-result evensem-result" dangerouslySetInnerHTML={{ __html: processToTable(evencon, `SEM- ${(function(){if(selectedYear=="1")return"II";if(selectedYear=="2")return"IV";if(selectedYear=="3")return"VI";if(selectedYear=="4")return"VIII"})()}`) }}></div>
                    </div>

                    <p className='p'>1) Although utmost care has been exercised in preparation of result ; yet if at any stage any error is detected based on facts ; these marks will
                    be treated as null and void and the revised result will be given based on actual marks.</p>
                    <p className='p'>2) If it is detected at any stage that a student appeared in the examination in violation of admission/examination rules/norms, the statement of
                    marks given herein will be treated as null and void.</p>
                    <p className='p'>3) Above Result is Pandemic Result based on 'Average Marks'. If any student's SGPA is getting affected due to rounding off of average
                    marks they may contact COE office through Email : coe.hbti@gmail.com with in 10 days from the date of declaration of result.</p>
                    <p className='p'>4) In case of any discrepancy in marks, please contact either personally or through your representative in the Controller of Examination
                    Office, HBTU, Kanpur with original marksheets(s) and submit application with the self attested photocopy of documents with in 10 days from
                    the date of declaration of result.</p>
                    <p className='p'>5) Please Note : This is a tentative result & does not form basis in terms of seeking Registration / Admission / Service until or unless verified
                    from Office of The Controller of Examination , HBTU , Kanpur.</p>
                </div>
            </div>
            <p className='errerp' style={{display:errev?"block":"none"}}><div>{errer}</div></p>
            <div className="option-form">
                <div className="resultHead">
                    <h1>Result</h1>
                    <div className="hr"></div>
                </div>
                <div className="option-container">
                    <div className="options">
                        <label>Course</label>
                        <input type="text" value={showfull(data.Programme)} readOnly style={{pointerEvents: "none"}}></input>
                    </div>
                    <div className="options">
                        <label>Branch</label>
                        <input type="text" value={data.Branch} readOnly style={{pointerEvents: "none"}}></input>
                    </div>
                    <div className="options">
                        <label>Session</label>
                        <select onChange={handleYearChange}>
                            <option value="">--Year--</option>
                            <option value="1">1st Year</option>
                            <option value="2">2nd Year</option>
                            <option value="3">3rd Year</option>
                            <option value="4">Final Year</option>
                        </select>
                    </div>
                    <div className="options">
                        <label>Result Type</label>
                        <select onChange={handleTypeChange}>
                            <option value="">--Result Type--</option>
                            <option value="Regular">Regular</option>
                            <option value="CarryOver">CarryOver</option>
                            <option value="Special CarryOver">Special CarryOver</option>
                            <option value="Re-Admission">Re-Admission</option>
                            <option value="Ex-Student">Ex-Student</option>
                        </select>
                    </div>
                </div>
                <div className="resultbutton">
                    <Button variant="secondary" onClick={downloadresult} disabled={!loads}><i className="fas fa-download"></i>{" Download Result"}</Button>
                </div>
            </div>
            <div className="result-div" style={{display : loads ? "flex" : "none"}}>
                <label>Odd Sem Result:</label>
                <div className='result-block-odd result-block'></div>
                <br></br>
                <br></br>
                <br></br>
                <label>Even Sem Result:</label>
                <div className='result-block-even result-block'></div>
            </div>
        </div>
    )
}
export default Result;
