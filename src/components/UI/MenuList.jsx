import React from "react";
import { Link } from "react-router-dom";

// Icons
import {
  HomeOutlined,
  MoneyCollectOutlined,
  BulbOutlined,
  FundOutlined,
} from "@ant-design/icons";

// Components
import { Menu } from "antd";

const MenuList = () => {
  const menuItems = [
    {
      id: "m1",
      name: "Home",
      path: "/",
      icon: HomeOutlined,
    },
    {
      id: "m2",
      name: "Cryptocurrencies",
      path: "cryptocurrencies",
      icon: FundOutlined,
    },
    {
      id: "m3",
      name: "Exchanges",
      path: "exchanges",
      icon: MoneyCollectOutlined,
    },
    {
      id: "m4",
      name: "News",
      path: "news",
      icon: BulbOutlined,
    },
  ];
  return (
    <Menu theme="dark">
      {menuItems.map((menuItem) => (
        <Menu.Item key={menuItem.id} icon={<menuItem.icon />}>
          <Link to={menuItem.path}>{menuItem.name}</Link>
        </Menu.Item>
      ))}
    </Menu>
  );
};

export default MenuList;
