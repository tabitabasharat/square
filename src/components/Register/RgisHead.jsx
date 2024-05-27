import React from 'react'
import logo from "../../Assets/Logo.png";
import profile from "../../Assets/Profile.png";
import { Button, Col, Container, Nav, Navbar, Row } from "react-bootstrap";
import styled from "styled-components";


const ButtonsSty = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 89%;
`;

const Createbtn = styled.button`
  width: Hug (149px) px;
  height: Hug (38px) px;
  top: 16px;
  left: 1398px;
  padding: 7px 18px 7px 18px;
  gap: 8px;
  border-radius: 10px;
  opacity: 0px;
  background: rgba(56, 178, 172, 1) !important;
  color: white;
`;

const RgisHead = () => {
  return (
      <Container fluid className="bg">
        <div className="nav">
          <img src={logo} className="logo" />
          <ButtonsSty>
            <input placeholder="Find" variant="soft" className="find" />
            <Createbtn className="ms-4 me-1"> + Create Link</Createbtn>
          </ButtonsSty>
          <img src={profile} />
        </div>
      </Container>
  )
}

export default RgisHead;
