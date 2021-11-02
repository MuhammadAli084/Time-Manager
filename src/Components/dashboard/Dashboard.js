import React from "react";
import Header from "../header/Header";
import "../dashboard/dashboard.css";

const Dashboard = () => {
  const firstName = localStorage.getItem("firstName");
  const lastName = localStorage.getItem("lastName");
  return (
    <div className="dashboard">
      <Header />
      <div className="message">
        <span className="message-title">
          Hi <span className="name">{firstName}&nbsp;{lastName},</span>
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
