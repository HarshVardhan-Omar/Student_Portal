import React from 'react'
import { useState } from 'react'
var SHA512 = require("crypto-js/sha512");

function Cp() {
    const [pwd,setPwd] = useState("");
    const setpwd=(e)=>{
        setPwd(e.target.value)
    }
    const [hpwd,setHpwd] = useState("");
    const loghashed=(e)=>{
        var plaindata = pwd
        var hasheddata = SHA512(plaindata).toString()
        setHpwd(hasheddata); // 'my message'
    }
    return (
        <div>
            <input onChange={setpwd} style={{margin: "30px", padding: "12px", height: "50px", width: "500px"}} type="text" placeholder="password to be encrypted"></input>
            <button type="button" onClick={loghashed}> Press to Hash </button>
            <p>{hpwd}</p>
        </div>
    )
}

export default Cp
