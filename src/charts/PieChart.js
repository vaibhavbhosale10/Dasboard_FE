import React, { useEffect, useState } from "react";
import {
  Chart as Chartjs,
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  Title,
} from "chart.js";
import { Pie } from "react-chartjs-2";
import "./pie.css";
import axios from "axios";

Chartjs.register(
  CategoryScale,
  LinearScale,
  ArcElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
);

const PieChart = () => {
  const [piedata, setPieData] = useState({
    labels: ["Red", "Blue", "Yellow", "Green", "Purple"],
    datasets: [
      {
        data: [12, 19, 3, 5, 2],
        backgroundColor: ["red", "blue", "yellow", "green", "purple"],
      },
    ],
  });
  const fetchPie = async () => {
    await axios
      .get("http://localhost:1010/api/data?topic=consumption")
      .then((data) => {
        console.log(data.data);
        console.log("type of api data is", typeof data.data);
        const ApiObject = data.data;
        const extractedArray = ApiObject.data;
        const source = [];
        const intensity = [];
        extractedArray.forEach((array) => {
          source.push(array.source);
          intensity.push(array.intensity);
          console.log("intensity", intensity);
          console.log("source", source);
          setPieData({
            labels: source,
            datasets: [
              {
                data: intensity,
                backgroundColor: [
                  "#FF6B6B",
                  "#3D84A8",
                  "#FFD700",
                  "#4CAF50",
                  "#7D3C98",
                ],
              },
            ],
          });
        });

        console.log("state maintained data of datatable", piedata);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(() => {
    fetchPie();
  });

  // Data for the pie chart

  const data = {
    labels: ["Red", "Blue", "Yellow", "Green", "Purple"],
    datasets: [
      {
        data: [12, 19, 3, 5, 2],
        backgroundColor: ["red", "blue", "yellow", "green", "purple"],
      },
    ],
  };

  return (
    <div className="pie-chart">
      <h5>Sources and its intensity</h5>
      <p>on topic of consumption</p>
      <Pie data={piedata} />
    </div>
  );
};

export default PieChart;
