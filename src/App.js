import logo from "./logo.svg";
import "./App.css";
import Homepage from "./components/homepage/homepage";
import { Routes, Route } from "react-router-dom";
import MainDash from "./components/dashboard/Dashboard";
import LineChart from "./charts/lineChart";

function App() {
  return (
    <div className="App">
      <MainDash />
    </div>
  );
}

export default App;
