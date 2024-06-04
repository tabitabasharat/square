// import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import styled from "styled-components";
import { Checkbox, FormControlLabel } from "@mui/material";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import RgisHead from "../../components/Register/RgisHead";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const Signup1div = styled.div`
  width: 560px;
  height: 314px;
  gap: 0px;
  opacity: 0px;
  background: rgba(28, 28, 36, 1);
  border-radius: 10px;
  display: flex;
  flex-direction: column;
`;
const Get = styled.button`
  width: 100% !important;
  height: 48px !important;
  border-radius: 12px;
  background: rgba(30, 117, 255, 1);
  color: white;
  font-size: 12px;
  font-weight: 600;
  line-height: 18px;
  text-align: center;
`;

function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [FormValidate,setFormValidate] = useState(false)
  const navigate = useNavigate();
useEffect (()=>{
  if(email && password){
    setFormValidate(true)
    console.log('updatevalue')
  }else{
    setFormValidate(false)
    console.log('mount')
}
})

  const signinn = () => {
    if (FormValidate) {
      navigate("/Loginacnt");
      console.log('unmount')
    } else {
      alert("please enter email and password");
    }
  };

  return (
    <>
      <RgisHead />
      <Container fluid className="bg-black text-white min-height-100vh">
        <Row>
          <Col className="register">
            <h3 className="text-white text-center">Sign In</h3>
            <p className="text-secondary text-center">
              Just sign in if you have an account in here. Enjoy our Website
            </p>
          </Col>
        </Row>
        <div className="d-flex justify-content-center position-relative">
          <Signup1div>
            <div className="regis-div">
              <Box component="form" noValidate sx={{ mt: 1 }}>
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="email"
                  label="Your Email / Username"
                  name="email"
                  autoComplete="email"
                  autoFocus
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                />
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  name="password"
                  label="Enter Password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                />
                <Row>
                  <Col>
                    <FormControlLabel
                      control={<Checkbox value="remember" color="primary" />}
                      label="Remember me"
                      className="text-secondary"
                    />
                  </Col>
                  <Col className="d-flex justify-content-center align-items-center">
                    <p className="mb-0 text-secondary">Forgot Password</p>
                  </Col>
                </Row>
              </Box>

              <Row>
                <Col className="gap-2 d-flex justify-content-center">
                  <Get onClick={signinn}>Login</Get>
                </Col>
              </Row>
            </div>
          </Signup1div>
        </div>
        <p className="text-white d-flex justify-content-center p-5">
          Already have a Square account? Log in
        </p>
      </Container>
    </>
  );
}

export default SignIn;
