import React, { useEffect, useState } from "react";
import {Container,Row } from "react-bootstrap";
import styled from "styled-components";
import logo from "../../Assets/Logo.png";
import teamwork from "../../Assets/Team Work.png";
import { Input } from "@mui/material";
import Close from "../../Assets/Close.png"
import { useNavigate } from "react-router-dom";

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
`;

function CreateAccnt() {
  const navigate = useNavigate();
  const [fullname, setFullname] = useState();
  const [email,setEmail] = useState();
  const [url,setUrl] = useState();
  const [pass, setPass] = useState();
  const [validation,setValidation] = useState(false);

useEffect(()=>{
  if(fullname && email && pass && url ){
    setValidation(true);
}else{
  setValidation(false)
}},[fullname, email,url,pass,])

  const freeaccnts=()=>{
    if(validation){
      {navigate("/Dreamjob")}
    }else{
      alert("please enter info");

    }
  }

  return (
    <>
      <Container
        fluid
        className="bg-black min-height-100vh div-height d-flex justify-content-center align-items-center"
      >
        <Col1>
          <Row>
            <Side1>
              <div className="d-flex justify-content-between">
                <img src={logo} />
                <Slogin>Login</Slogin>
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
                <h3 className="text-white">Create your Free Account</h3>
                <div className="email1">
                  <Input
                    placeholder="Full Name"
                    variant="soft"
                    className="email"
                    onChange={(e)=>setFullname(e.target.value)}
                  />
                </div>
                <div className="email1">
                  <Input placeholder="Email Address" variant="soft" className="email"
                    onChange={(e)=>setEmail(e.target.value)}
                   />
                </div>
                <div className="email1">
                  <Input placeholder="Business URL" variant="soft" className="email"
                    onChange={(e)=>setUrl(e.target.value)}
                  />
                </div>
                <div className="email11">
                  <Input
                    placeholder="Password"
                    type="password"
                    variant="soft"
                    className="email"
                    onChange={(e)=>setPass(e.target.value)}
                  />
                </div>
                <Get onClick={()=>(freeaccnts())}>Create an account</Get>
              </div>
            </Side2>
          </Row>
        </Col1>
      </Container>
    </>
  );
}

export default CreateAccnt;
