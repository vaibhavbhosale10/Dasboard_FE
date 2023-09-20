import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Signup from "../forms/signup";
import Login from "../forms/login";
import "./home.css";

const Homepage = () => {
  const [isLoginFormVisible, setIsLoginFormVisible] = useState(true);
  return (
    <div>
      <Container>
        <Row>
          <Col xs={12} lg={6}>
            <button
              id="mainbtn"
              onClick={() => setIsLoginFormVisible(!isLoginFormVisible)}
            >
              {isLoginFormVisible
                ? "Click here to Sign Up"
                : "Click here to Login"}
            </button>
            {isLoginFormVisible ? <Login /> : <Signup />}
          </Col>
          <Col className="mt-5" xs={12} lg={6}>
            <h2>Welcome to Dashboard</h2>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Homepage;
