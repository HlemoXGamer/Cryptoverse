import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

// Components
import { Button, Typography, Avatar } from "antd";
import MenuList from "./MenuList";

// Images
import icon from "../../images/cryptocurrency.png";
import { MenuOutlined } from "@ant-design/icons";
const Navbar = () => {
    const [activeMenu, setActiveMenu] = useState(true);
    const [screenSize, setScreenSize] = useState(null);

    useEffect(() => {
        const handleResize = () => setScreenSize(window.innerWidth);
        window.addEventListener("resize", handleResize());
        handleResize();

        return () => window.removeEventListener("resize", handleResize);
    }, []);

    useEffect(() => {
        if (screenSize > 768) {
            setActiveMenu(false);
        } else {
            setActiveMenu(true);
        }
    }, [screenSize]);
    return (
        <div className="nav-container">
            <div className="logo-container">
                <Avatar src={icon} size="large" />
                <Typography.Title level={2} className="logo">
                    <Link to="/">Cryptoverse</Link>
                </Typography.Title>
                <Button
                    className="menu-control-container"
                    onClick={() => setActiveMenu(!activeMenu)}
                >
                    <MenuOutlined />
                </Button>
            </div>
            {!activeMenu && <MenuList />}
        </div>
    );
};

export default Navbar;
