import React, { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import axios from "axios";
import "./line.css";

import {
  Chart,
  Colors,
  BarController,
  CategoryScale,
  LinearScale,
  BarElement,
  Legend,
  PointElement,
  LineElement,
} from "chart.js";

Chart.register(
  Colors,
  BarController,
  BarElement,
  CategoryScale,
  LinearScale,
  Legend,
  PointElement,
  LineElement
);
const options = {
  indexAxis: "x",
  elements: {
    Line: {
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
      text: "Region  vs Likellhood line chart",
    },
  },
};
const labels = [];

const LineChart = () => {
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
  const fetchLine = async () => {
    await axios
      .get("http://localhost:1010/api/data?sector=Energy&pageNo=2&perPage=35")
      .then((data) => {
        console.log(data.data);
        console.log("type of api data is", typeof data.data);
        const ApiObject = data.data;
        const extractedArray = ApiObject.data;
        const region = [];
        const likelihood = [];
        extractedArray.forEach((array) => {
          region.push(array.region);
          likelihood.push(array.likelihood);
          setdata({
            labels: region,
            datasets: [
              {
                label: "Likelihood",
                data: likelihood,
                borderColor: "yellow",
                backgroundColor: "blue",
              },
            ],
          });
        });
        console.log("region", region);
        console.log("Likelihood", likelihood);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(() => {
    fetchLine();
  });

  return (
    <div className="line-chart">
      <Line data={data} options={options} />
    </div>
  );
};

export default LineChart;
