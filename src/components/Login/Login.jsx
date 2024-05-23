// import React from 'react'
// import { Col, Container, Row } from "react-bootstrap";
// import logoo from "../../Assets/Logo.png";
// import styled from "styled-components";
// import { Input } from "@mui/material";
// import { Stack } from "@mui/material";

// const Login = () => {
//   return (
    
//   )
// }

// export default Login

// src/SignUpForm.js
import React, { useState } from 'react';
import { Container, Form, Button, Row, Col } from 'react-bootstrap';
import './styles.css';

const SignUpForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phoneNumber: '',
    country: '',
    email: '',
    password: '',
    confirmPassword: '',
    about: '',
    agree: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add form submission logic here
    console.log('Form submitted:', formData);
  };

  return (
    <Container className="form-container">
      <Form onSubmit={handleSubmit}>
        <Row>
          <Col>
            <Form.Group className="mb-3" controlId="formFirstName">
              <Form.Label>First Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="First Name"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
              />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group className="mb-3" controlId="formLastName">
              <Form.Label>Last Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Last Name"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
              />
            </Form.Group>
          </Col>
        </Row>

        <Row>
          <Col xs={3}>
            <Form.Group className="mb-3" controlId="formPhoneCode">
              <Form.Label>Code</Form.Label>
              <Form.Control
                type="text"
                placeholder="+62"
                disabled
              />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group className="mb-3" controlId="formPhoneNumber">
              <Form.Label>Phone Number</Form.Label>
              <Form.Control
                type="text"
                placeholder="Phone Number"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
              />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group className="mb-3" controlId="formCountry">
              <Form.Label>Country</Form.Label>
              <Form.Control
                as="select"
                name="country"
                value={formData.country}
                onChange={handleChange}
              >
                <option>Your Country</option>
                <option value="Indonesia">Indonesia</option>
                {/* Add more options as needed */}
              </Form.Control>
            </Form.Group>
          </Col>
        </Row>

        <Form.Group className="mb-3" controlId="formEmail">
          <Form.Label>Mail Address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Mail Address"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </Form.Group>

        <Row>
          <Col>
            <Form.Group className="mb-3" controlId="formPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                name="password"
                value={formData.password}
                onChange={handleChange}
              />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group className="mb-3" controlId="formConfirmPassword">
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Confirm Password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
              />
            </Form.Group>
          </Col>
        </Row>

        <Form.Group className="mb-3" controlId="formAbout">
          <Form.Label>Tell us about yourself</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            placeholder="Hello my name..."
            name="about"
            value={formData.about}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formAgree">
          <Form.Check
            type="checkbox"
            label={<span>I agree to Square's <a href="/cookie-policy">Cookie</a> and <a href="/privacy-policy">Privacy Policy</a>.</span>}
            name="agree"
            checked={formData.agree}
            onChange={handleChange}
          />
        </Form.Group>

        <Row>
          <Col>
            <Button variant="secondary" className="btn-secondary-custom" type="button">
              Login
            </Button>
          </Col>
          <Col>
            <Button variant="primary" className="btn-custom" type="submit">
              Get Started
            </Button>
          </Col>
        </Row>
      </Form>
    </Container>
  );
};

export default SignUpForm;
