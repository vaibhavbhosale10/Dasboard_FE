import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  Chart as Chartjs,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import "./bar.css";

Chartjs.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

//barchart setup
const options = {
  indexAxis: "x",
  elements: {
    bar: {
      borderWidth: 1,
    },
  },
  responsive: true,
  plugins: {
    legend: {
      position: "left",
    },
    title: {
      display: true,
      text: "For Energy sector Topic vs Intensity graph",
    },
  },
};

const labels = [];

const BarChart = () => {
  const [data, setdata] = useState({
    labels,
    datasets: [
      {
        label: "Intensity",
        data: [1, 2, 3, 4, 5],
        borderColor: "rgb(53,132,0.5)",
        backgroundColor: "rgba (53,162,325,0.5)",
      },
    ],
  });

  //datafetching
  const fetchBar = async () => {
    await axios
      .get("http://localhost:1010/api/data?sector=Energy&pageNo=10&perPage=35")
      .then((data) => {
        console.log(data.data);
        console.log("type of api data is", typeof data.data);
        const ApiObject = data.data;
        const extractedArray = ApiObject.data;
        const intensity = [];
        const topic = [];
        extractedArray.forEach((array) => {
          intensity.push(array.intensity);
          topic.push(array.topic);
          setdata({
            labels: topic,
            datasets: [
              {
                label: "Intensity",
                data: intensity,
                borderColor: "black",
                backgroundColor: "yellow",
              },
            ],
          });
        });
        console.log("INTENSITY", intensity);
        console.log("TOPIC", topic);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(() => {
    fetchBar();
  });
  return (
    <>
      <Container>
        <Row>
          <Col lg={12} xs={12}>
            <div className="barchart">
              <Bar data={data} options={options} className="responsive-bar" />
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default BarChart;
