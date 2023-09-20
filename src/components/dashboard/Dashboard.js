import React, { useState, useEffect } from "react";
import {
  Sidebar,
  Menu,
  MenuItem,
  SubMenu,
  useProSidebar,
} from "react-pro-sidebar";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import HomeRoundedIcon from "@mui/icons-material/HomeMaxRounded";
import GridViewRoundedIcon from "@mui/icons-material/GridViewRounded";
import ReceiptRoundedIcon from "@mui/icons-material/ReceiptRounded";
import BarChartRoundedIcon from "@mui/icons-material/BarChartRounded";
import PieChartIcom from "@mui/icons-material/PieChart";
import BarChartIcon from "@mui/icons-material/BarChart";
import LineChartIcon from "@mui/icons-material/StackedLineChart";
import ReportsIcon from "@mui/icons-material/ReportSharp";
import SettingsApplicationsRoundedIcon from "@mui/icons-material/SettingsApplicationsRounded";
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";
import ShieldRoundedIcon from "@mui/icons-material/ShieldRounded";
import NotificationsRoundedIcon from "@mui/icons-material/NotificationsRounded";
import LogoutRoundedIcon from "@mui/icons-material/LogoutRounded";
import "./dashboard.css";
import { Routes, Route, Link } from "react-router-dom";
import Home from "../../dash-components/Home";
import Dashboard from "../../dash-components/Dashboard";
import Charts from "../../dash-components/Charts";
import Reports from "../../dash-components/Reports";
import Analytics from "../../dash-components/Analytics";
import LineChart from "../../charts/lineChart";
import PieChart from "../../charts/PieChart";

const MainDash = () => {
  const { collapseSidebar, toggleSidebar, collapsed, toggled, broken, rtl } =
    useProSidebar();
  return (
    <div style={{ display: "flex", height: "100vh" }}>
      <Sidebar className="app" style={{ backgroundColor: "blue" }}>
        <Menu>
          <MenuItem
            // component={<Link to="/" className="link" />}
            className="menu1"
            onClick={() => {
              collapseSidebar();
            }}
            icon={<MenuRoundedIcon />}
          >
            <h2 style={{ fontFamily: "Caveat,sans-serif" }}>GasInsight</h2>
          </MenuItem>
          <MenuItem
            component={<Link to="/" className="link" />}
            icon={<GridViewRoundedIcon />}
          >
            <h5 style={{ fontFamily: "monospace" }}>Home</h5>
          </MenuItem>
          <MenuItem
            component={<Link to="dashboard" className="link" />}
            icon={<HomeRoundedIcon />}
          >
            <h5 style={{ fontFamily: "monospace" }}>Dashboard</h5>
          </MenuItem>
          <SubMenu
            className="Label"
            label="Charts"
            icon={<BarChartRoundedIcon />}
          >
            <MenuItem
              icon={<BarChartIcon />}
              component={<Link to="charts" id="chart" />}
            >
              <p className="submenu">Energy Sector</p>
            </MenuItem>
            <MenuItem
              component={<Link to="LineChart" />}
              icon={<LineChartIcon />}
            >
              <p className="submenu">Likelihood region-wise</p>
            </MenuItem>
            <MenuItem
              icon={<PieChartIcom />}
              component={<Link to="PieChart" />}
            >
              <p className="submenu">Sources & intensity</p>
            </MenuItem>
          </SubMenu>
          <MenuItem
            component={<Link to="analytics" />}
            icon={<ReceiptRoundedIcon />}
          >
            <h5 style={{ fontFamily: "monospace" }}>Analytics</h5>
          </MenuItem>
          <MenuItem component={<Link to="reports" />} icon={<ReportsIcon />}>
            <h5 style={{ fontFamily: "monospace" }}>Reports</h5>
          </MenuItem>
          <SubMenu
            className="Label"
            label="Settings"
            icon={<SettingsApplicationsRoundedIcon />}
          >
            <MenuItem icon={<AccountCircleRoundedIcon />}> Account </MenuItem>
            <MenuItem icon={<ShieldRoundedIcon />}> Privacy </MenuItem>
            <MenuItem icon={<NotificationsRoundedIcon />}>
              <h5 style={{ fontFamily: "monospace" }}>Notifications</h5>
            </MenuItem>
          </SubMenu>
          <MenuItem icon={<LogoutRoundedIcon />}>
            {" "}
            <h5 style={{ fontFamily: "monospace" }}>Logout</h5>
          </MenuItem>
        </Menu>
      </Sidebar>
      <section>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="analytics" element={<Analytics />} />
          <Route path="charts" element={<Charts />} />
          <Route path="reports" element={<Reports />} />
          <Route path="LineChart" element={<LineChart />} />
          <Route path="PieChart" element={<PieChart />} />
        </Routes>
      </section>
    </div>
  );
};

export default MainDash;
