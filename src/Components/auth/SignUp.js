import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import "../auth/auth.css";
import axios from "axios";

const SignUp = ({ moveLeft, setMoveLeft }) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log({ firstName, lastName, email, password, passwordConf })
    axios
      .post("http://34.210.129.167/api/register", { firstName, lastName, email, password, password_confirmation:passwordConf })
      .then((response) => console.log(response))
      .catch((err) => console.log(err));

  };
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [passwordConf, setPasswordConf] = useState("");

  return (
    <div className={`auth-wrapper ${moveLeft && "change"} `}>
      <div className="auth-inner">
        <Form onSubmit={handleSubmit}>
          <Form.Group>
            <Form.Control
              required
              type="text"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              placeholder="First name"
            />
          </Form.Group>
          <Form.Group>
            <Form.Control
              required
              type="text"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              placeholder="Last name"
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
          <Form.Group>
            <Form.Control
              type="password"
              name="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              required
            />
          </Form.Group>
          <Form.Group>
            <Form.Control
              type="password"
              name="password"
              placeholder="Password Confirmation"
              onChange={(e) => setPasswordConf(e.target.value)}
              value={passwordConf}
              required
            />
          </Form.Group>
          <Button className="black-btn" type="submit">
            Sign Up
          </Button>
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
