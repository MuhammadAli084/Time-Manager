import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import "../auth/auth.css";
import axios from 'axios';

const SignUp = ({moveLeft,setMoveLeft}) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post('http://localhost:8000/api/v1/auth/register',{name,email,password})
  .then((response)=>console.log(response))
  .catch((err)=>console.log(err))
  };
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  
  return (
    <div className={`auth-wrapper ${moveLeft && "change"} `}>
        <div className="auth-inner">
          <Form onSubmit={handleSubmit}>
            <Form.Group>
              <Form.Control
                required
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="First name"
              />
            </Form.Group>
            <Form.Group>
              <Form.Control
                type="email"
                name="email"
                placeholder="Enter email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                autoComplete="off"
                required
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Control
                type="password"
                name="password"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                required
              />
            </Form.Group>
            <Button className="black-btn" type="submit">Sign Up</Button>
          </Form>
          <div className="signUp-btn">
            <span>Already registered?</span>
            <Button onClick={() => setMoveLeft(false)}>Sign In</Button>
          </div>
        </div>
    </div>
  );
};

export default SignUp;
