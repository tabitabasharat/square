import React, { useState } from "react";
import { Container, Row } from "react-bootstrap";
import logoo from "../../Assets/Logo.png";
import styled from "styled-components";
import { Input } from "@mui/material";
import { Stack } from "@mui/material";
import googleimg from "../../Assets/Logo Google.png";
import fbimg from "../../Assets/Fb.png";
import dot from "../../Assets/Oval.png";
import { useNavigate } from "react-router-dom";

const Logoimg = styled.div`
  display: flex;
  justify-content: center;
  padding: 180px 0px 40px 0px;
`;
const Signupdiv = styled.div`
  width: 360px;
  /* height: 365px; */
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

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState();

  const loginss = () => {
    if (email) {
      navigate("/SignIn");
    } else {
      console.log("please enter email");
    }
  };

  return (
    <Container fluid className="bg-black text white min-height-100vh">
      <Row>
        <Logoimg>
          <img src={logoo} />
        </Logoimg>
      </Row>
      <div className="d-flex justify-content-center align-items-center flex-column position-relative">
        <Signupdiv>
          <Signupacnt>Login to your acount</Signupacnt>
          <div className="btonn">
            <Input
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              placeholder="Your email"
              variant="soft"
              className="email"
            />
          </div>
          <div></div>
          <Stack className="d-flex align-items-center" spacing={1}>
            <Register
              type="submit"
              onClick={() => {
                loginss();
              }}
            >
              Continue
            </Register>
            <p className="text-secondary">OR</p>
            <Register1 type="submit" className="bg-secondary">
              <img src={googleimg} />
              Continue with Google
            </Register1>
            <Register1 type="submit" className="bg-secondary">
              <img src={fbimg} />
              Continue with Google
            </Register1>
          </Stack>
          <hr className="hr" />
          <p className="text-white d-flex justify-content-center align-items-center">
            Can’t login?
            <img src={dot} className="dot mx-1" />
            Sign up for new user?
          </p>
        </Signupdiv>
        <p className="text-white d-flex justify-content-center align-items-center pt-5">
          Privacy policy
          <img src={dot} className="dot mx-1" />
          Terms of use
        </p>
      </div>
    </Container>
  );
};

export default Login;
