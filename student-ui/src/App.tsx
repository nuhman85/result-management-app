import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Link } from 'react-router-dom';
import { Route, Router, Routes } from 'react-router';
import AddNewStudent from './components/AddNewStudent/AddNewStudent';
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import GridViewRoundedIcon from "@mui/icons-material/GridViewRounded";
import ReceiptRoundedIcon from "@mui/icons-material/ReceiptRounded";
import BarChartRoundedIcon from "@mui/icons-material/BarChartRounded";
import TimelineRoundedIcon from "@mui/icons-material/TimelineRounded";
import BubbleChartRoundedIcon from "@mui/icons-material/BubbleChartRounded";
import WalletRoundedIcon from "@mui/icons-material/WalletRounded";
import AccountBalanceRoundedIcon from "@mui/icons-material/AccountBalanceRounded";
import SavingsRoundedIcon from "@mui/icons-material/SavingsRounded";
import MonetizationOnRoundedIcon from "@mui/icons-material/MonetizationOnRounded";
import SettingsApplicationsRoundedIcon from "@mui/icons-material/SettingsApplicationsRounded";
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";
import ShieldRoundedIcon from "@mui/icons-material/ShieldRounded";
import NotificationsRoundedIcon from "@mui/icons-material/NotificationsRounded";
import LogoutRoundedIcon from "@mui/icons-material/LogoutRounded";
import { Sidebar, Menu, MenuItem, SubMenu, useProSidebar } from "react-pro-sidebar";
import Results from './components/Results/Results';
import Students from './components/Students/Students';
import Courses from './components/Courses/Courses';


const Home = () => {
  return (
    <>
      <h1 className="header">WELCOME TO STUDENT PRO</h1>
      <h3>Bank of the free</h3>
      <p>Lorem ipsum dolor sit amet...</p>
    </>
  );
};

const Dashboard = () => {
  return (
    <>
      <h1 className="header"> DASHBOARD PAGE</h1>
      <h3>Welcome User</h3>
      <p>Lorem ipsum dolor sit amet...</p>
    </>
  );
};

const Transactions = () => {
  return (
    <>
      <h1 className="header">KEEP TRACK OF YOUR SPENDINGS</h1>
      <h3>Seamless Transactions</h3>
      <p>Lorem ipsum dolor sit amet...</p>
    </>
  );
};

function App() {
  const { collapseSidebar } = useProSidebar();
  return (
    
    <div style={{ display: "flex", height: "100vh" }}>
    <Sidebar className="app">
      <Menu>
      <MenuItem
            component={<Link to="/" className="link" />}
            className="menu1"
            icon={
              <MenuRoundedIcon
                onClick={() => {
                  collapseSidebar();
                }}
              />
            }
          >
            <h4>STUDENT PRO</h4>
          </MenuItem>
        <MenuItem
          component={<Link to="dashboard" className="link" />}
          icon={<GridViewRoundedIcon />}
        >
          Dashboard
        </MenuItem>
        <MenuItem component={<Link to="addNewStudent" className="link" />} icon={<ReceiptRoundedIcon />}> Add New Student </MenuItem>
        <MenuItem component={<Link to="students" className="link" />} 
        icon={<LogoutRoundedIcon />}> Student List</MenuItem>
        <MenuItem component={<Link to="courses" className="link" />} 
        icon={<LogoutRoundedIcon />}> Courses List</MenuItem>
           <MenuItem component={<Link to="results" className="link" />} 
        icon={<LogoutRoundedIcon />}> Results List</MenuItem>
      </Menu>
    </Sidebar>
    <section>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="results" element={<Results />} />
        <Route path="students" element={<Students />} />
        <Route path="courses" element={<Courses />} />
        <Route path="addNewStudent" element={<AddNewStudent />} />
      </Routes>
    </section>
  </div>
  );
}

export default App;
