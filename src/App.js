import React from "react";
import { Button, CloseButton, Col, Container, Nav, Navbar, Row } from "react-bootstrap";
import styled from "styled-components";
import "./App.css";
import bgimg from "../src/Assets/Bitmap.png"
import RgisHead from '../src/components/Register/RgisHead'
import Login from '../src/components/Login/Login'
import Register from '../src/components/Register/Register'

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
`
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
`

function App() {
  return (
    <>
    <RgisHead/>
    {/* <Login/> */}
    <Register/>
      {/* <Container
        fluid
        className="bg-black min-height-100vh d-flex position-relative flex-column px-0"
      >
    <div className="position-relative">
      <div className="position-absolute">
        <h3 className="text-center">Welcome to the <br/>
Professional Community</h3>
      <p>Find thousand opportunities and ready to level up your careers.</p>
      </div>
      <img src={bgimg} className="px-0 bgimg"/> 
    </div>
    <Applydiv>
    <Apply>

      fdsfd
      </Apply>
    </Applydiv>
      </Container> */}
    </>
  );
}

export default App;
