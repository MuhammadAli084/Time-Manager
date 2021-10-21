import React, { useState } from "react";
import "../header/Header.css";
import { Link } from "react-router-dom";
import { Tabs, Tab } from "react-bootstrap";

const Header = () => {
  const [key, setKey] = useState("contact");
  return (
    <div className="header">
      <div className="col-left">
        <h1>Time Manager</h1>
        <Tabs
          id="controlled-tab-example"
          defaultActiveKey="profile"
          activeKey={key}
          onSelect={(k) => {
            console.log("key", k);
            setKey(k);
          }}
        >
          <Tab eventKey="home" title="User">
            Tab 1 content
          </Tab>
          <Tab eventKey="profile" title="WorkLog">
            Tab 2 content
          </Tab>
        </Tabs>
      </div>
      <div className="col-right">
        <Link to="/" onClick={() => localStorage.removeItem("token")}>
          <span>
            <i class="fa fa-sign-out" aria-hidden="true"></i>
          </span>
          Log Out
        </Link>
      </div>
    </div>
  );
};

export default Header;
