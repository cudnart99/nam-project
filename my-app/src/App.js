import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
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
    history.push("/ai-screen");
  };

  return (
    <Router>
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
            width: 256,
            height: "100vh",
          }}
          defaultSelectedKeys={["1"]}
          defaultOpenKeys={["sub1"]}
          mode="inline"
          items={items}
        />

        <Switch>
          <Route path="/ai-screen">
            <AiScreen />
          </Route>
          <Route path="/">
            <DataScreen />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
