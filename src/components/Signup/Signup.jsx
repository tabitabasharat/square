import React, { useState } from "react";
import { Container, Row } from "react-bootstrap";
import logoo from "../../Assets/Logo.png";
import styled from "styled-components";
import { Input } from "@mui/material";
import { Stack } from "@mui/material";
import googleimg from "../../Assets/Logo Google.png";
import { useNavigate } from "react-router-dom";

const Logoimg = styled.div`
  display: flex;
  justify-content: center;
  padding: 180px 0px 40px 0px;
`;
const Signupdiv = styled.div`
  width: 360px;
  height: 515px;
  top: 269px;
  left: 620px;
  gap: 0px;
  background: rgba(28, 28, 36, 1);
  border-radius: 10px;
  display: flex;
  /* justify-content: center; */
  flex-direction: column;
  /* padding-bottom: 240px; */
`;
const Signupacnt = styled.h5`
  font-size: 18px;
  line-height: 27px;
  text-align: left;
  color: #ffff;
  padding: 30px 67px 29px 67px;
  margin-bottom: 0px;
  display: flex;
  justify-content: center;
`;
const Terms = styled.p`
  font-size: 12px;
  line-height: 20px;
  text-align: center;
  color: rgba(250, 250, 251, 1) !important;
  padding: 15px 45px 20px 50px;
  margin-bottom: 0px;
`;
const Register = styled.button`
  width: 320px;
  height: 38px;
  top: 337px;
  left: 20px;
  gap: 0px;
  opacity: 0px;
  background: rgba(30, 117, 255, 1);
  font-size: 12px;
  font-weight: 600;
  line-height: 18px;
  text-align: center;
  color: rgba(250, 250, 251, 1);
  border-radius: 10px;
  display: flex;
  justify-content: center;
  gap: 10px;
  align-items: center;
`;
const Register1 = styled.button`
  width: 320px;
  height: 38px;
  top: 337px;
  left: 20px;
  gap: 0px;
  opacity: 0px;
  background: rgba(68, 68, 79, 1) !important;
  font-size: 12px;
  font-weight: 600;
  line-height: 18px;
  text-align: center;
  color: rgba(250, 250, 251, 1);
  border-radius: 10px;
  display: flex;
  justify-content: center;
  gap: 10px;
  align-items: center;
`;
const Already = styled.div`
  background: rgba(41, 41, 50, 1);
  color: rgba(250, 250, 251, 1);
  font-size: 12px !important;
  line-height: 14.06px;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  bottom: 0px;
  width: 360px;
  height: 48px;
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
`;

const Signup = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const rgis = () => {
    if (email && name && password) {
      {
        navigate("/Register");
      }
    } else {
      console.log("plase enter the above info first");
    }
  };

  return (
    <Container fluid className="bg-black text white min-height-100vh">
      <Row>
        <Logoimg>
          <img src={logoo} />
        </Logoimg>
      </Row>
      <div className="d-flex justify-content-center position-relative">
        <Signupdiv>
          <Signupacnt>Sign Up to your account</Signupacnt>
          <div className="btonn">
            <Input
              placeholder="Your email"
              variant="soft"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              className="email"
            />
          </div>
          <div className="btonn-signup">
            <Input
              placeholder="Your name"
              variant="soft"
              className="email"
              type="text"
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
          </div>
          <div className="btonn">
            <Input
              placeholder="Create Password"
              variant="soft"
              className="email"
              type="password"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </div>
          <div>
            <Terms>
              By signing up, you confirm that you’ve read
              <br />
              and accepted our
              <span className="text-primary"> User Notice </span>and{" "}
              <span className="text-primary">Privacy Policy.</span>
            </Terms>
          </div>
          <Stack className="d-flex align-items-center" spacing={1}>
            <Register
              type="submit"
              onClick={() => {
                rgis();
              }}
            >
              Register
            </Register>
            <p className="text-secondary">OR</p>
            <Register1 type="submit" className="bg-secondary">
              <img src={googleimg} />
              Continue with Google
            </Register1>
          </Stack>
          <Already>
            <p className="mb-0">Already have an Square account? Log in</p>
          </Already>
        </Signupdiv>
      </div>
    </Container>
  );
};

export default Signup;
