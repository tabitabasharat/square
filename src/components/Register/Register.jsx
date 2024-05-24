import React from "react";
import { Button, Col, Container, Nav, Navbar, Row } from "react-bootstrap";
import styled from "styled-components";
import { Stack, Checkbox, FormControlLabel } from "@mui/material";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import RgisHead from "./RgisHead";
import { countries } from "./RgisData";

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

function App() {

  
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
        <div className="d-flex justify-content-center position-relative">
          <Signup1div>
            {/* <Signupacnt>Sign Up to your account</Signupacnt>
            <div className="btonn">
              <Input
                placeholder="Your email"
                variant="soft"
                className="email"
              />
            </div>
            <div className="btonn">
              <Input placeholder="Your name" variant="soft" className="email" />
            </div>
            <div className="btonn">
              <Input
                placeholder="Create Password"
                variant="soft"
                className="email"
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
              <Register type="submit">Register</Register>
              <p className="text-secondary">OR</p>
              <Register1 type="submit" className="bg-secondary">
                <img src={googleimg} />
                Continue with Google
              </Register1> */}
            {/* </Stack> */}
            <div className="regis-div bg-white" >
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
                    inputProps={{ style: { color: "red" } }}
                    InputLabelProps={{ style: { color: "red" } }}
                  
                    sx={{
                      "& .MuiOutlinedInput-notchedOutline": {
                        border: "2px dotted brown"
                      },
            
                      "& .MuiOutlinedInput-root": {
                        "&.Mui-focused fieldset": {
                          border: "2px solid red"
                        }
                      },
                      "input::placeholder": {
                        color: "orange",
                        opacity: 1
                      }
                    }}
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
                    />
                  </Col>
                  <Col>
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
                  autoFocus
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
                    />
                  </Col>
                </Row>
                <Col>
                  <p>Tell us about yourself</p>
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    label="hello..."
                  />
                </Col>
                <FormControlLabel
                  control={<Checkbox value="remember" color="primary" />}
                  label="Remember me"
                />
              </Box>

              <Row>
                <Col className="gap-2 d-flex justify-content-center">
                  <Login>Login</Login>
                  <Get>Get Started</Get>
                </Col>
              </Row>
            </div>
          </Signup1div>
        </div>
      </Container>
    </>
  );
}

export default App;
