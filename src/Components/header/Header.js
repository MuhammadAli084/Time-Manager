// import React, { useState } from "react";
import "../header/Header.css";
import { Link } from "react-router-dom";

const Header = () => {
  // const [key, setKey] = useState("contact");
  return (
    <div className="header">
      <div className="col-left">
        <h1>Time Manager</h1>
        <ul>
          <li>
            <Link to="/user">User</Link>
          </li>
        </ul>
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