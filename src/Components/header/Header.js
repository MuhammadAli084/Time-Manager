import React from "react";
import "../header/Header.css"
import { Link } from "react-router-dom";

const Header = () => {
  const name = localStorage.getItem("name");
  return (
    <div className="header">
      <div className="col-left">
        <span class="title">{name}</span>
        <h1>Time Manager</h1>
        <ul>
          <li>
            <Link>User</Link>
          </li>
          <li>
            <Link>WorkLog</Link>
          </li>
          <li>
            <Link></Link>
          </li>
          <li>
            <Link></Link>
          </li>
        </ul>
      </div>
      <div className="col-right">
        <Link to="/" onClick={() => localStorage.removeItem("token")}>
          Log Out
        </Link>
      </div>
    </div>
  );
};

export default Header;
