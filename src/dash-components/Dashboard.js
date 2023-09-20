import React, { useEffect, useState } from "react";
import axios from "axios";
import "./dash.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

const Dashboard = () => {
  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterValue, setFilterValue] = useState("");
  const [regionValue, setRegionValue] = useState("");
  const [countryValue, setCountryValue] = useState("");
  const [pestleValue, setPestleValue] = useState("");
  const [sourceValue, setSourceValue] = useState("");
  const [endyearValue, setendyearValue] = useState("");

  const FetchAlldata = async () => {
    try {
      const response = await axios.get(`http://localhost:1010/api/data`);
      if (typeof response.data === "object") {
        setData(response.data.data);
        console.log(response.data.data);
      } else {
        console.error("API response data is not an object:", response.data);
      }
    } catch (err) {
      console.error("Error fetching data:", err);
    }
  };
  const clearFilters = () => {
    setSearchTerm("");
    setFilterValue("");
    setRegionValue("");
    setCountryValue("");
    setPestleValue("");
    setSourceValue("");
    setendyearValue("");
  };

  useEffect(() => {
    FetchAlldata();
  }, []);

  const filteredData = data.filter((item) => {
    return (
      item.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
      item.pestle.toLowerCase().includes(pestleValue.toLowerCase()) &&
      item.topic.toLowerCase().includes(filterValue.toLowerCase()) &&
      item.source.toLowerCase().includes(sourceValue.toLowerCase()) &&
      item.country.toLowerCase().includes(countryValue.toLowerCase()) &&
      item.end_year.toLowerCase().includes(endyearValue.toLowerCase()) &&
      item.region.toLowerCase().includes(regionValue.toLowerCase())
    );
  });

  return (
    <Container>
      <div className="navbar">
        <div className="navbar-select">
          <select
            value={filterValue}
            onChange={(e) => setFilterValue(e.target.value)}
            style={{ marginLeft: "10px", width: "180px" }}
          >
            <option value="">All</option>
            <option value="Energy">Energy</option>
            <option value="Technology">Technology</option>
            <option value="Finance">Finance</option>
          </select>
          <select
            value={regionValue}
            onChange={(e) => setRegionValue(e.target.value)}
            style={{ marginLeft: "10px", width: "180px" }}
          >
            <option value="">Filter By region</option>
            <option value="Western Asia">Western Asia</option>
            <option value="South-Eastern Asia">South-Eastern Asia</option>
            <option value="Southern Asia">Southern Asia</option>
            <option value="Northern America">Northern America</option>
          </select>
          <select
            value={countryValue}
            onChange={(e) => setCountryValue(e.target.value)}
            style={{ marginLeft: "10px", width: "180px" }}
          >
            <option value="">Filter By Country</option>
            <option value="United States of America">USA</option>
            <option value="Mexico">Mexico</option>
            <option value="Nigeria">Nigeria</option>
            <option value="Lebanon">Lebanon</option>
            <option value="Russia">Russia</option>
          </select>
          <select
            value={pestleValue}
            onChange={(e) => setPestleValue(e.target.value)}
            style={{ marginLeft: "10px", width: "180px" }}
          >
            <option value="">Filter By Pestle</option>
            <option value="Industries">Industries</option>
            <option value="Economic">Economic</option>
            <option value="Technological">Technological</option>
            <option value="Political">Political</option>
            <option value="Organization">Organization</option>
          </select>
          <select
            value={sourceValue}
            onChange={(e) => setSourceValue(e.target.value)}
            style={{ marginLeft: "10px", width: "180px" }}
          >
            <option value="">Filter By Source</option>
            <option value="The Next Web">The Next Web</option>
            <option value="Cii Radio">Cii Radio</option>
            <option value="Global Money Trends">Global Money Trends</option>
            <option value="Convenience Store Decisions">
              Convenience Store Decisions
            </option>
            <option value="Guardian Sustainable Business">
              Guardian Sustainable Business
            </option>
          </select>
          <select
            value={endyearValue}
            onChange={(e) => setendyearValue(e.target.value)}
            style={{ marginLeft: "10px", width: "180px" }}
          >
            <option value="">Filter By End Year</option>
            <option value="2018">2018</option>
            <option value="2019">2019</option>
            <option value="2025">2025</option>
            <option value="2040">2040</option>
            <option value="2200">2200</option>
          </select>
        </div>
        <div>
          <Button
            className="clear-filter-button"
            onClick={clearFilters}
            style={{ marginTop: "5px", marginLeft: "10px" }}
          >
            Clear Filters
          </Button>
        </div>
      </div>
      <Row>
        {filteredData &&
          filteredData.map((gasdata, index) => {
            return (
              <Col md={4} key={index}>
                <div
                  className="card"
                  style={{
                    width: "350px",
                    padding: "20px",
                    border: "1px solid #ccc",
                    borderRadius: "5px",
                    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    textAlign: "center",
                    color: "dark purple",
                  }}
                >
                  <h5 style={{ color: "purple" }}>{gasdata.title}</h5>
                  <p className="feature-label">Topic: {gasdata.topic}</p>
                  <p className="feature-label">Region: {gasdata.Region}</p>
                  <p className="feature-label">Country: {gasdata.country}</p>
                  <p className="feature-label">Pestle: {gasdata.pestle}</p>
                  <p className="feature-label">End Year: {gasdata.end_year}</p>
                  <p className="feature-label">
                    Published Date:
                    {new Date(gasdata.published).toLocaleString()}
                  </p>
                  <p className="feature-label">Insight:{gasdata.insight}</p>
                  <p className="feature-label">Source:{gasdata.source}</p>
                  <a className="source-link" href={gasdata.url} target="_blank">
                    TRAC News
                  </a>
                </div>
              </Col>
            );
          })}
      </Row>
    </Container>
  );
};

export default Dashboard;
