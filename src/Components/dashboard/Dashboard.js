import React from "react";
import Header from "../header/Header";
import "../dashboard/dashboard.css";

const Dashboard = () => {
  const name = localStorage.getItem("name");
  return (
    <div className="dashboard">
      <Header />
      <div className="message">
        <span className="message-title">
          Hi <span className="name">{name},</span>
          <br />
          <span className="welcome">
            Welcome to <br /> <b>TIME MANAGER</b>.
          </span>
        </span>
      </div>
    </div>
  );
};

export default Dashboard;
