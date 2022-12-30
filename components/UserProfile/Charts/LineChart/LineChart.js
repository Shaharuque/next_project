import React, { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import { Chart, registerables } from "chart.js";
import axios from "axios";
Chart.register(...registerables);

const LineChart = () => {
  const [LineChartGraph, SetLineChartGraph] = useState([]);
  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/users`)
      .then((response) => {
        SetLineChartGraph(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    // <div div className="lg:w-4/12 md:w-6/12">
    <div style={{ backgroundColor: "#FFFEFE", marginTop: "10px" }}>
      <h1></h1>
      {LineChartGraph.length > 0 ? (
        <Line
          className=" chart p-2"
          data={{
            labels: LineChartGraph.map((x) => x.name.slice(1, 8)),
            datasets: [
              {
                label: "Billed",
                data: [3328, 1000, 1940, 700, 6000, 6050, 9000, 10000],
                backgroundColor: "#9C4083",
                barThickness: 25,
              },
            ],
          }}
          options={{
            backgroundColor: "#f5f5f5", // Set the background color here
          }}
        ></Line>
      ) : (
        <p>load</p>
      )}
    </div>
  );
};

export default LineChart;
