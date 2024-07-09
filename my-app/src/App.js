import React, { useState } from "react";
import { Switch, Route } from "react-router-dom";
import DataScreen from "./component/DataScreen";
import AiScreen from "./component/AiScreen";
import {
  AppstoreOutlined,
  MailOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { Menu } from "antd";
import { useHistory } from "react-router-dom";

export default function App() {
  const history = useHistory();

  const items = [
    {
      key: "/",
      label: "Data Screen",
      icon: <MailOutlined />,
    },
    {
      key: "/ai-screen",
      label: "AI Screen",
      icon: <AppstoreOutlined />,
    },
  ];

  const onClick = (e) => {
    console.log("click ", e.key);
    history.push(e.key);
  };

  return (
    <div className="flex">
      {/* <nav>
          <ul>
            <li>
              <Link to="/">DataScreen</Link>  
            </li>
            <li>
              <Link to="/ai-screen">AiScreen</Link>
            </li>
          </ul>
        </nav> */}

      <Menu
        onClick={onClick}
        style={{
          width: "15vw",
          flexDirection: "column",
          flex: 1,
        }}
        defaultSelectedKeys={["1"]}
        defaultOpenKeys={["sub1"]}
        mode="inline"
        items={items}
      />
      <div className="w-[85vw]">
        <Switch>
          <Route path="/ai-screen">
            <AiScreen />
          </Route>
          <Route path="/">
            <DataScreen />
          </Route>
        </Switch>
      </div>
    </div>
  );
}
