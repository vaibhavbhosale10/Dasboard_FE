import React from "react";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import BarChart from "../charts/barCharts";

const VisualBar = () => {
  return (
    <>
      <Container>
        <Row>
          <Col>
            <BarChart />
          </Col>
          <Col lg={12}></Col>
        </Row>
      </Container>
    </>
  );
};

export default VisualBar;
