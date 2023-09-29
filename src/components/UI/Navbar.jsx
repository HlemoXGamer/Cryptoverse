import React from "react";
import { Link } from "react-router-dom";

// Components
import { Button, Menu, Typography, Avatar } from "antd";
import MenuList from "./MenuList";

// Images
import icon from "../../images/cryptocurrency.png";
const Navbar = () => {
  return (
    <div className="nav-container">
      <div className="logo-container">
        <Avatar src={icon} size="large" />
        <Typography.Title level={2} className="logo">
          <Link to="/">Cryptoverse</Link>
        </Typography.Title>
      </div>
      <MenuList />
    </div>
  );
};

export default Navbar;
