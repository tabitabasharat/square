import React from "react";
import { Col, Container, Nav, Navbar, Row } from "react-bootstrap";
import styled from "styled-components";
import logo from "../../Assets/Logo.png";
import teamwork from "../../Assets/Team Work.png";
import { Input } from "@mui/material";
import Close from "../..//Assets/Close.png"
import { Checkbox, FormControlLabel } from "@mui/material";
import gog from "../../Assets/Logo Google.png"
import fblog from "../../Assets/F_icon.png"


const Col1 = styled.div`
  width: 1180px !important;
  height: 612px !important;
`;
const Side1 = styled.div`
  width: 565px;
  height: 610px;
  gap: 0px;
  border-radius: 50px 0px 0px 50px;
  opacity: 0px;
  background: rgba(28, 28, 36, 1);
  padding: 60px 50px 60px 50px;
`;
const Side2 = styled.div`
  width: 615px;
  height: 610px;
  gap: 0px;
  border-radius: 0px 50px 50px 0px;
  opacity: 0px;
  background: rgba(41, 41, 50, 1);
  padding: 60px 60px 50px 60px;
  position: relative;
`;
const Slogin = styled.button`
  width: 130px;
  height: 48px;
  gap: 0px;
  opacity: 0px;
  background: rgba(41, 41, 50, 1);
  font-size: 12px;
  border-radius: 12px;
  font-weight: 600;
  line-height: 18px;
  text-align: center;
  color: white;
`;
const Teamwork = styled.div`
  display: flex;
  justify-content: center;
  align-items: end;
`;
const Pra = styled.p`
  font-size: 24px;
  line-height: 36px;
  letter-spacing: 0.10000000149011612px;
  font-weight: 500;
  text-align: center;
  color: white;
`;
const Get = styled.button`
  width: 100% !important;
  height: 48px !important;
  border-radius: 12px;
  background: rgba(80, 181, 255, 1);
  color: white;
  font-size: 12px;
  font-weight: 600;
  line-height: 18px;
  text-align: center;
  margin: 20px 0px 20px 0px;
`;
const Gog = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100% !important;
  height: 48px !important;
  border-radius: 12px;
  background: rgba(252, 90, 90, 1);
  color: white;
  font-size: 12px;
  font-weight: 600;
  line-height: 18px;
  text-align: center;
  margin: 20px 0px 20px 0px;
  gap: 10px;
`;
const Fb = styled.button`
 display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  width: 100% !important;
  height: 48px !important;
  border-radius: 12px;
background: rgba(30, 117, 255, 1);
  color: white;
  font-size: 12px;
  font-weight: 600;
  line-height: 18px;
  text-align: center;
  margin: 0px 0px 50px 0px;
`;
const Space = styled.span`
letter-spacing: 0.2rem;
`
function Loginacnt() {
  return (
    <>
    {/* <Signup/> */}
    {/* <SignIn/> */}
    {/* <Register/> */}
    {/* <Auth/> */}
      <Container
        fluid
        className="bg-black min-height-100vh d-flex justify-content-center align-items-center"
      >
        <Col1>
          <Row>
            <Side1>
              <div className="d-flex justify-content-between">
                <img src={logo} />
                <Slogin>Create Account</Slogin>
              </div>
              <Teamwork>
                <img src={teamwork} className="TWimg" />
              </Teamwork>
              <Pra>
                Monitoring your Sales Anytime.
                <br />
                Easier & Effective than Before
              </Pra>
            </Side1>
            <Side2>
              <div className="position-absolute">
                <img src={Close}/>
                </div>
                <div>
                <h3 className="text-white">Log In to Your Account </h3>
                <div className="email1">
                  <Input placeholder="Email or Username" variant="soft" className="email" />
                </div>
                <div className="email11">
                  <Input
                    placeholder="Password"
                    type="password"
                    variant="soft"
                    className="email"
                  />
                </div>
                <Row>
                  <Col>
                    <FormControlLabel
                      control={<Checkbox value="remember" color="warning"  />}
                      label="Remember me"
                      className="text-secondary"
                    />
                  </Col>
                  <Col className="d-flex justify-content-center align-items-center">
                    <p className="mb-0 text-secondary">Forgot Password</p>
                  </Col>
                </Row>
                <Get>Login</Get>
                <p className="text-secondary gap-2 d-flex justify-content-center"><Space>--------------------</Space> Instant Login<Space>----------------------</Space></p>

                <Gog> <img src={gog}/>Continue with Google</Gog>
                <Fb> <img src={fblog}/>Continue with Facebook</Fb>
              </div>
            </Side2>
          </Row>
        </Col1>
      </Container>
    </>
  );
}

export default Loginacnt;
