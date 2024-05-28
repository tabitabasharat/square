import React, { useState } from "react";
import { Button, Col, Container, Nav, Navbar, Row } from "react-bootstrap";
import styled from "styled-components";
import { Stack, Checkbox, FormControlLabel } from "@mui/material";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import RgisHead from "./RgisHead";
import { countries } from "./RgisData";
import { grey } from "@mui/material/colors";
import { redirect, useNavigate } from "react-router-dom";

const Signup1div = styled.div`
  width: 560px;
  height: 597px;
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

const Login = styled.button`
  width: 150px;
  height: 48px;
  top: 841px;
  left: 550px;
  background: rgba(79, 79, 90, 1);
  color: white;
  border-radius: 12px;
  font-size: 12px;
  font-weight: 600;
  line-height: 18px;
  text-align: center;
`;
const Get = styled.button`
  width: 340px !important;
  height: 48px !important;
  border-radius: 12px;
  background: rgba(30, 117, 255, 1);
  color: white;
  font-size: 12px;
  font-weight: 600;
  line-height: 18px;
  text-align: center;
`;

function Register() {
  const navigate = useNavigate();
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [number, setNumber] = useState("");
  // const [country, setCountry] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confrimpass, setConfrimpass] = useState("");
 
  const registration = () => {
    if (firstname && lastname && number && email && password && confrimpass) {
      
      {navigate("/CreateAccnt")};
    } else {
      alert("plase enter your info");
    }
  };

  return (
    <>
      <RgisHead />
      {/* Register */}
      <Container fluid className="bg-black text white min-height-100vh">
        <Row>
          <Col className="register">
            <h3 className="text-white text-center">Register</h3>
            <p className="text-secondary text-center">
              Let’s Sign up first for enter into Square Website. Uh She Up!
            </p>
          </Col>
        </Row>
        <div className="d-flex justify-content-center position-relative divs">
          <Signup1div>
            <div className="regis-div bg-dark">
              <Row>
                <Col>
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    name="First Name"
                    label="First Name"
                    type="text"
                    id="Fisrt-Name"
                    autoComplete="current-password"
                    inputProps={{ style: { background: (146, 146, 157, 1) } }}
                    InputLabelProps={{
                      style: { color: "grey" },
                    }}
                    sx={{
                      "& .MuiOutlinedInput-notchedOutline": {
                        border: "2px solid grey",
                      },

                      "& .MuiOutlinedInput-root": {
                        "&.Mui-focused fieldset": {
                          border: "2px solid grey",
                        },
                      },
                      "input::placeholder": {
                        color: grey,
                        opacity: 1,
                      },
                    }}
                    onChange={(e) => {setFirstname(e.target.value);}}
                  />
                </Col>
                <Col>
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    name="Last Name"
                    label="Last Name"
                    type="text"
                    id="Last-Name"
                    autoComplete="current-password"
                    inputProps={{ style: { background: (146, 146, 157, 1) } }}
                    InputLabelProps={{
                      style: { color: "grey" },
                      
                    }}
                    sx={{
                      "& .MuiOutlinedInput-notchedOutline": {
                        border: "2px solid grey",
                      },

                      "& .MuiOutlinedInput-root": {
                        "&.Mui-focused fieldset": {
                          border: "2px solid grey",
                        },
                      },
                      "input::placeholder": {
                        color: grey,
                        opacity: 1,
                      },
                    }}
                    onChange={(e)=>setLastname(e.target.value)}

                  />
                </Col>
                <Row>
                  <Col>
                    <TextField
                      margin="normal"
                      required
                      fullWidth
                      name="Phone Number"
                      label="Phone Number"
                      type="number"
                      id="number"
                      autoComplete="current-password"
                      inputProps={{ style: { background: (146, 146, 157, 1) } }}
                      InputLabelProps={{
                        style: { color: "grey" },
                      }}
                      sx={{
                        "& .MuiOutlinedInput-notchedOutline": {
                          border: "2px solid grey",
                        },

                        "& .MuiOutlinedInput-root": {
                          "&.Mui-focused fieldset": {
                            border: "2px solid grey",
                          },
                        },
                        "input::placeholder": {
                          color: grey,
                          opacity: 1,
                        },
                      }}
                      onChange={(e)=>setNumber(e.target.value)}

                    />
                  </Col>
                  <Col className="d-flex justify-content-center align-items-center">
                    <Autocomplete
                      id="country-select-demo"
                      sx={{ width: 300 }}
                      options={countries}
                      autoHighlight
                      getOptionLabel={(option) => option.label}
                      renderOption={(props, option) => (
                        <Box
                          component="li"
                          sx={{ "& > img": { mr: 2, flexShrink: 0 } }}
                          {...props}
                        >
                          <img
                            loading="lazy"
                            width="20"
                            srcSet={`https://flagcdn.com/w40/${option.code.toLowerCase()}.png 2x`}
                            src={`https://flagcdn.com/w20/${option.code.toLowerCase()}.png`}
                            alt=""
                          />
                          {option.label} ({option.code}) +{option.phone}
                        </Box>
                      )}
                      renderInput={(params) => (
                        <TextField
                          {...params}
                          label="Choose a country"
                          inputProps={{
                            ...params.inputProps,
                            autoComplete: "new-password", // disable autocomplete and autofill
                          }}
                        />
                      )}
                      // onChange={(e)=>setCountry(e.target.value)}

                    />
                  </Col>
                </Row>
              </Row>
              <Box component="form" noValidate sx={{ mt: 1 }}>
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="email"
                  label="Mail Address"
                  name="email"
                  autoComplete="email"
                  inputProps={{ style: { background: (146, 146, 157, 1) } }}
                  InputLabelProps={{
                    style: { color: "grey" },
                  }}
                  sx={{
                    "& .MuiOutlinedInput-notchedOutline": {
                      border: "2px solid grey",
                    },

                    "& .MuiOutlinedInput-root": {
                      "&.Mui-focused fieldset": {
                        border: "2px solid grey",
                      },
                    },
                    "input::placeholder": {
                      color: grey,
                      opacity: 1,
                    },
                  }}
                  onChange={(e)=>setEmail(e.target.value)}

                />
                <Row>
                  <Col>
                    <TextField
                      margin="normal"
                      required
                      fullWidth
                      name="password"
                      label="Password"
                      type="password"
                      id="password"
                      autoComplete="current-password"
                      inputProps={{ style: { background: (146, 146, 157, 1) } }}
                      InputLabelProps={{
                        style: { color: "grey" },
                      }}
                      sx={{
                        "& .MuiOutlinedInput-notchedOutline": {
                          border: "2px solid grey",
                        },

                        "& .MuiOutlinedInput-root": {
                          "&.Mui-focused fieldset": {
                            border: "2px solid grey",
                          },
                        },
                        "input::placeholder": {
                          color: grey,
                          opacity: 1,
                        },
                      }}
                      onChange={(e)=>setPassword(e.target.value)}

                    />
                  </Col>
                  <Col>
                    <TextField
                      margin="normal"
                      required
                      fullWidth
                      name="password"
                      label="Confirm Password"
                      type="password"
                      id="Confirm-password"
                      autoComplete="current-password"
                      inputProps={{ style: { background: (146, 146, 157, 1) } }}
                      InputLabelProps={{
                        style: { color: "grey" },
                      }}
                      sx={{
                        "& .MuiOutlinedInput-notchedOutline": {
                          border: "2px solid grey",
                        },

                        "& .MuiOutlinedInput-root": {
                          "&.Mui-focused fieldset": {
                            border: "2px solid grey",
                          },
                        },
                        "input::placeholder": {
                          color: grey,
                          opacity: 1,
                        },
                      }}
                    onChange={(e)=>setConfrimpass(e.target.value)}

                      // onChange={(e) => {
                      //   setConfrimpass(e.target.value);
                      // }}
                    />
                  </Col>
                </Row>
                <Col>
                  <p className="text-secondary   m-0 mt-4">
                    Tell us about yourself
                  </p>

                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    label="hello..."
                    inputProps={{ style: { background: (146, 146, 157, 1) } }}
                    InputLabelProps={{
                      style: { color: "grey" },
                    }}
                    sx={{
                      "& .MuiOutlinedInput-notchedOutline": {
                        border: "2px solid grey",
                      },

                      "& .MuiOutlinedInput-root": {
                        "&.Mui-focused fieldset": {
                          border: "2px solid grey",
                        },
                      },
                      "input::placeholder": {
                        color: grey,
                        opacity: 1,
                      },
                    }}
                    
                  />
                </Col>
                <FormControlLabel
                  control={<Checkbox value="remember" color="primary" />}
                  label={`I agree to Square’s Cookie and Privacy Policy.`}
                  className="text-white"
                />
              </Box>

              <Row>
                <Col className="gap-2 d-flex justify-content-center">
                  <Login>Login</Login>
                  <Get
                  type="submit"
                    onClick={() =>{registration();
                    }}
                  >
                    Get Started
                  </Get>
                </Col>
              </Row>
            </div>
          </Signup1div>
        </div>
      </Container>
    </>
  );
}

export default Register;
