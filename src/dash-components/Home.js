import React from "react";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import "./home.css";

const Home = () => {
  return (
    <div className="home-container">
      <Container>
        <Row>
          <Col lg={12} xs={12}>
            <div className="dummy-content">
              <h1
                className="header"
                style={{
                  fontFamily: "monteserrat,sans-serif",
                  color: "#8B4513",
                }}
              >
                GasInsight: A World of Data at Your Fingertips
              </h1>
              <p
                className="intro"
                style={{
                  color: "#000000",
                  fontFamily: "Lato,sans-serif",
                }}
              >
                GasInsight is a comprehensive database of information about gas
                resources, including production, consumption, infrastructure,
                and market trends. We provide data from a variety of sources,
                including government agencies, industry associations, and
                research institutions.
              </p>
              <p
                className="benefits"
                style={{
                  color: "#000000",
                  fontFamily: "Lato,sans-serif",
                }}
              >
                Our data is used by a wide range of stakeholders, including
                energy companies, investors, policymakers, and researchers. Our
                users rely on our data to make informed decisions about the gas
                industry.
              </p>
              <p
                className="features"
                style={{
                  color: "#000000",
                  fontFamily: "Lato,sans-serif",
                }}
              >
                GasInsight offers a variety of features to help you find and use
                the data you need. You can search our database by topic, region,
                country, and time period. You can also export data to Excel or
                CSV for further analysis.
              </p>
              <a href="/signup" className="signup-button">
                Sign up for free today
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Home;
