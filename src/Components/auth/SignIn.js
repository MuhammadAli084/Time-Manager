import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import "../auth/auth.css";
import axios from "axios";
import { useHistory } from "react-router-dom";

const SignIn = ({moveLeft,setMoveLeft}) => {
  const history = useHistory();
const handleSubmit = (event) => {
  event.preventDefault();
  // console.log("value", email);
  // console.log("value", password);
  axios.post('http://localhost:8000/api/v1/auth/login',{email,password})
  .then((response)=>{
    localStorage.setItem('token',response.data.token);
    localStorage.setItem("name",response.data.user.name);
    history.push('/Dashboard');
  })
  .catch((err)=>console.log(err))
}
const [email,setEmail] = useState("");
const [password,setPassword] = useState("");

  return (
    <div className={`auth-wrapper ${moveLeft  && "move"}`}>
        <div className="auth-inner">
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
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
            <Button className="black-btn" type="submit">Sign In</Button>
          </Form>
          <div className="signUp-btn signIn-btn">
            <span>Not registered? </span>
            <Button onClick={()=> setMoveLeft(true)}>Create an account</Button>
          </div>
        </div>
    </div>
  );
};

export default SignIn;
