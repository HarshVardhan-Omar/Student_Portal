import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import "./changepassword.css"
import { AiOutlineLock } from "react-icons/ai";
export default function ChangePassword(props) {
  // document.documentElement.style.setProperty('--cpcol','#fff')
    return (
        <div class="password-body">
          
          <Form style={{background: "black54"}}>
            
        <AiOutlineLock className="illustration"  />
  <Form.Group className="old mystyle" controlId="formBasicEmail">
    <Form.Label>Old Password</Form.Label>
    <Form.Control type="password" placeholder="Old Password" />
    {/* <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text> */}
  </Form.Group>

  <Form.Group className="old mystyle" controlId="formBasicPassword">
    <Form.Label>New Password</Form.Label>
    <Form.Control type="password" placeholder="New Password" />
  </Form.Group>
  <Form.Group className="old mystyle" controlId="formBasicPassword">
    <Form.Label>Re-enter New Password</Form.Label>
    <Form.Control type="password" placeholder="Re-enter old Password" />
  </Form.Group>
  {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Check me out" />
  </Form.Group> */}
  <Button variant="secondary" type="submit">
    Reset Password
  </Button>
</Form>
        </div>
    )
}

