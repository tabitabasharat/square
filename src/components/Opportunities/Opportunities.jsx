import React from "react";
import {
  Button,
  CloseButton,
  Col,
  Container,
  Nav,
  Navbar,
  Row,
} from "react-bootstrap";
import { Input } from "@mui/material";
import styled from "styled-components";
// import "./App.css";
import bgimg from "../../Assets/Bitmap.png";
import gugl from "../../Assets/Logo Google.png"
import fbook from "../../Assets/Fb.png"
import twiter from "../../Assets/Twitter BW.png"
import RgisHead from "../Register/RgisHead";


const Apply = styled.div`
  width: 560px !important;
  height: 600px !important;
  top: 421px;
  left: 520px;
  gap: 0px;
  opacity: 0px;
  background: rgba(28, 28, 36, 1);
  color: white;
  border-radius: 12px;
  position: absolute;
  top: 300px;
  left: 600px;
  padding: 40px 30px 40px 30px;
`;
const Applydiv = styled.div`
  width: 100% !important;
  height: 100% !important;
  top: 421px;
  left: 520px;
  gap: 0px;
  opacity: 0px;
  /* background: rgba(28, 28, 36, 1); */
  color: white;
  border-radius: 12px;
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
`;
 const Clickk = styled.p`
font-size: 12px;
line-height: 14.06px;
text-align: left;
color: rgba(146, 146, 157, 1);
display: flex;
justify-content: center;

 `
const Gugl = styled.div`
width: 155px;
height: 48px;
background: rgba(68, 68, 79, 1);
display: flex;
align-items: center;
justify-content: center;
border-radius: 12px;
margin: 10px 5px 10px 5px;
`
function Opportunities() {
    
  return (
    <>
        <RgisHead/>

      <Container

        fluid
        className="bg-black min-height-100vh d-flex flex-column px-0"
      >
        <div className="position-relative">
          <div className="position-absolute">
            <h3 className="text-center">
              Welcome to the <br />
              Professional Community
            </h3>
            <p>
              Find thousand opportunities and ready to level up your careers.
            </p>
          </div>
          <img src={bgimg} className="px-0 bgimg" />
        </div>

        <Apply>
          <div>
            <p className="text-secondary text-center">JUST LOGIN FIRST</p>
            <h3 className="text-center">
            Find the Million Opportunities   <br />
to Level Up u’r Careers
    
            </h3>
            <div className="btonn my-2 d-flex justify-content-start">
              <Input
                placeholder="Your Email"
                variant="soft"
                className="emaill"
              />
            </div>
            {/* <div className="d-flex justify-content-center flex-row"> */}
              <div className="btonn111 my-2 d-flex justify-content-start">
                <Input
                  placeholder="Create Password"
                  variant="soft"
                  type="password"
                  className="emaill"
                />
              </div>
              <div className="btonn111 my-2 d-flex justify-content-start">
                <Input
                  placeholder="Repeat Password"
                  variant="soft"
                  className="emaill"
                  type="password"

                />
              </div>
            {/* </div> */}
            <Get className="my-3">Login</Get>
            <Clickk className="my-3">OR</Clickk>
            <div className="d-flex flex-row">
              <Gugl><img src={gugl}/></Gugl>
              <Gugl><img src={fbook}/></Gugl>
              <Gugl><img src={twiter}/></Gugl>
            </div>
          </div>
        </Apply>
      </Container>
    </>
  );
}

export default Opportunities;
