import React from 'react'
import { useState } from 'react'
import axios from "axios"
import homepage from "./homepage"

export default class login extends React.Component{
    constructor(props){
        super(props);
        this.state={
            user_name:"",
            password:0,
        }
        this.login=this.login.bind(this);
        this.handleusernamechange=this.handleusernamechange.bind(this);
        this.handlepasswordchange=this.handlepasswordchange.bind(this);
    }
    handleusernamechange(e){
        this.setState({
            user_name:e.target.value
        })
    }
    handlepasswordchange(e){
        this.setState({
            password:e.target.value
        })
    }
    
    login(e){
        e.preventDefault();
        console.log(this.state);
        const requestoptions={
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify({
                user_name:this.state.user_name,
                password:this.state.password
            }),
        };
        fetch("/api/verifystudent",requestoptions).then((response)=>
            {if(response.ok){
                this.props.history.push({
                    pathname:'/getstudentdetails',
                    state:{user_name:this.state.user_name}
                });
            }
            })
    }
    render(){
    return (
        <div>
                <form onSubmit={this.login}>
                <input type="text" onChange={this.handleusernamechange}/>Username
                <input type="password" name="" id="" onChange={this.handlepasswordchange}/>password
                <button type="submit">Login</button>
                </form>
        </div>
    )
    }
}