import { useState } from "react";
import {
  DownOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import {
  Button,
  Dropdown,
  Layout,
  Menu,
  Space,
  theme,
  type MenuProps,
} from "antd";
import { Link, useLocation, useNavigate } from "react-router";
import AppRoutes from "../routes/routes";

const { Header, Sider, Content } = Layout;

function App() {
  const [collapsed, setCollapsed] = useState(false);

  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const navigate = useNavigate();

  const handleLogout = () => {};

  const items: MenuProps["items"] = [
    {
      key: "1",
      label: "Мой профиль",
      onClick: () => navigate("/my-profiler/322"),
    },
    {
      key: "2",
      label: <Link to="/settings-page">Настройки</Link>,
    },
    {
      key: "3",
      label: "Выход",
      onClick: handleLogout,
    },
  ];

  const location = useLocation();

  const getSelectedKeys = () => {
    switch (location.pathname) {
      case "/":
        return ["1"];

      case "/orders":
        return ["2"];

      case "/delivery":
        return ["3"];

      default:
        return [];
    }
  };
  return (
    <Layout style={{ height: "100vh" }}>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="demo-logo-vertical" />
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={["1"]}
          selectedKeys={getSelectedKeys()}
          items={[
            {
              key: "1",
              icon: <UserOutlined />,
              label: "Главная",
              onClick: () => navigate("/"),
            },
            {
              key: "2",
              icon: <VideoCameraOutlined />,
              label: "Заказы",
              onClick: () => navigate("/orders?sort=desc"),
            },
            {
              key: "3",
              icon: <UploadOutlined />,
              label: "Доставка",
              onClick: () => navigate("/delivery"),
            },
          ]}
        />
      </Sider>
      <Layout>
        <Header
          style={{
            padding: 0,
            background: colorBgContainer,
            justifyContent: "space-between",
            display: "flex",
            paddingRight: "24px",
          }}
        >
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: "16px",
              width: 64,
              height: 64,
            }}
          />
          <Dropdown menu={{ items }}>
            <a onClick={(e) => e.preventDefault()}>
              <Space>
                Меню
                <DownOutlined />
              </Space>
            </a>
          </Dropdown>
        </Header>
        <Content
          style={{
            margin: "24px 16px",
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}
        >
          <AppRoutes />
        </Content>
      </Layout>
    </Layout>
  );
}

export default App;
