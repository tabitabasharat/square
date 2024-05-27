import React from "react";
import {
  Container,
  Image,
  Col,
  FormFloating,
  FormLabel,
  FormGroup,
  FormCheck,
  FormControl,
  Row,
  Button,
} from "react-bootstrap";
import { useState } from "react";

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isLogin) {
      // Handle login logic
      console.log("Logging in with", { email, password });
    } else {
      // Handle signup logic
      if (password !== confirmPassword) {
        alert("Passwords don't match");
      } else {
        console.log("Signing up with", { email, password });
      }
    }
  };

  const toggleForm = () => {
    setIsLogin(!isLogin);
    setEmail("");
    setPassword("");
    setConfirmPassword("");
  };

  return (
    <div>
      <Container>
        <Row className="flex text-start">
          <Col className="bgca w-full h-screen">
            <Col className="pl-32 mr-96">
              <Image src="src/assets/Group 1.png" className="w-32 pt-20" />
              <h1 className="m-10 mt-5 mb-2 ml-0 pr-32 font-medium text-md">
                Join Piqsol!
              </h1>
              <p className="pb-6">
                {" "}
                With Piqsol you can Buy, Sell, Create or
                <br /> Rent Super Rare NFTs
              </p>
              <FormFloating>
                <Row>
                  <h2>{isLogin ? "Login" : "Sign Up"}</h2>
                  <FormLabel
                    htmlFor="floatingPasswordCustom"
                    className="flex align-text-top"
                  >
                    Email Address
                  </FormLabel>
                  <FormControl
                    onSubmit={handleSubmit}
                    id="floatingPasswordCustom"
                    type="email"
                    placeholder="Enter Email Address"
                    className=" rounded-md p-2 mb-3 border border-gray-500"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </Row>
              </FormFloating>

              <FormFloating>
                <Row>
                  <FormLabel
                    htmlFor="floatingPasswordCustom"
                    className="flex align-text-top"
                  >
                    Password
                  </FormLabel>
                  <FormControl
                    id="floatingPasswordCustom"
                    type="Password"
                    placeholder="Enter Password"
                    className=" rounded-md p-2 mb-3 border border-gray-500"
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </Row>
                {!isLogin && (
                  <Row>
                    <FormLabel
                      htmlFor="floatingPasswordCustom"
                      className="flex align-text-top"
                    >
                      Confirm Password
                    </FormLabel>
                    <FormControl
                      id="floatingPasswordCustom"
                      type="Confirm Password"
                      placeholder="Enter Confirm Password"
                      className=" rounded-md p-2 mb-3 border border-gray-500"
                      onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                  </Row>
                )}
              </FormFloating>
              <Row className="pb-24">
                <Row>
                  <FormGroup controlId="formBasicCheckbox">
                    <FormCheck
                      type="checkbox"
                      label=" I agree to the Terms and Privacy Policy"
                      className=" text-xs pt-1"
                    />
                  </FormGroup>
                </Row>

                <Button
                  type="submit"
                  className=" bg-violet-500 rounded-md mt-5 text-white w-64 h-12"
                >
                  {isLogin ? "Login" : "Sign Up"}
                </Button>
                <p className=" pt-3">
                  Did have an account?{" "}
                  <a href=" Signup" className=" text-none">
                    {" "}
                    <span onClick={toggleForm}>
                      {isLogin ? "Sign Up" : "Login"}
                    </span>
                  </a>
                </p>
              </Row>
            </Col>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Auth;
