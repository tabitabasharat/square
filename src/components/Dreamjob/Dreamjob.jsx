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
// import RgisHead from "../src/components/Register/RgisHead";
// import Login from "../src/components/Login/Login";
// import Register from "../src/components/Register/Register";
import switchbtm from "../../Assets/Switcher.png";

const Apply = styled.div`
  width: 560px !important;
  height: 750px !important;
  top: 421px;
  left: 520px;
  gap: 0px;
  opacity: 0px;
  background: rgba(28, 28, 36, 1);
  color: white;
  border-radius: 12px;
  position: absolute;
  top: 300px;
  left: 350px;
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

function Dreamjob() {
  return (
    <>
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
            <p className="text-secondary text-center">GET STARTED</p>
            <h3 className="text-center">
              Apply for Million Chance
              <br />
              to Get Dreams Job
            </h3>
            <p className="text-secondary d-flex mb-3 justify-content-center text-end">
              Standard
              <span className="d-flex justify-content-center align-items-center px-2">
                <img src={switchbtm} />
              </span>
              Premium
            </p>

            <div className="d-flex justify-content-center flex-row">
              <div className="btonn1">
                <Input
                  placeholder="First Name"
                  variant="soft"
                  className="emaill"
                />
              </div>
              <div className="btonn1">
                <Input
                  placeholder="Last Name"
                  variant="soft"
                  className="emaill"
                />
              </div>
            </div>
            <div className="d-flex justify-content-center flex-wrap flex-row">
              <div className="btonn1  mt-3">
                <Input
                  placeholder="Major"
                  variant="soft"
                  className="emaill"
                />
              </div>
              <div className="btonn11  mt-3">
                <Input
                  placeholder="From"
                  variant="soft"
                  className="emaill"
                  type="from"
                />
              </div>
              <div className="btonn12  mt-3">
                <Input
                  placeholder="To"
                  variant="soft"
                  className="emaill"
                  type="to"
                />
              </div>
            </div>

            <div className="btonn width-full d-flex justify-content-start">
              <Input
                placeholder="Your Institution / University"
                variant="soft"
                className="emaill"
              />
            </div>
            <div className="btonn my-2 d-flex justify-content-start">
              <Input
                placeholder="Your Email"
                variant="soft"
                className="emaill"
              />
            </div>
            <div className="d-flex justify-content-center flex-row">
              <div className="btonn1 my-2">
                <Input
                  placeholder="Create Password"
                  type="password"
                  variant="soft"
                  className="emaill"
                />
              </div>
              <div className="btonn1 my-2">
                <Input
                  placeholder="Repeat Password"
                  type="password"
                  variant="soft"
                  className="emaill"
                />
              </div>
            </div>
            <Get className="my-3">Create an account</Get>
            <Clickk className="my-3">By clicking "Get Started - Free!" I agree to Square’s Terms of Service</Clickk>
          </div>
        </Apply>
      </Container>
    </>
  );
}

export default Dreamjob;
