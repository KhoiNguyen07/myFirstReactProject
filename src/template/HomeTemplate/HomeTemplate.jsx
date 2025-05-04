import React from "react";
import { Breadcrumb, Layout, Menu, theme } from "antd";
import { NavLink, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
const { Header, Content, Footer } = Layout;
const items = Array.from({ length: 3 }).map((_, index) => ({
  key: String(index + 1),
  label: `nav ${index + 1}`,
}));
const HomeTemplate = () => {
  const arrNavLink = [
    {
      to: "/",
      content: "Home",
    },
    {
      to: "render-shoes",
      content: "Shoes",
    },
    {
      to: "bai-tap-dienthoai",
      content: "Phone",
    },
    {
      to: "demo-redux",
      content: "Redux",
    },
    {
      to: "bai-tap-lac-xi-ngau",
      content: "LacXiNgau",
    },
    {
      to: "demo-useEffect",
      content: "DemoUseEffect",
    },
    {
      to: "demo-form-react",
      content: "DemoFormReact",
    },
  ];
  const { hoTen } = useSelector((state) => state.demoReduxSlice);

  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  return (
    <Layout className="min-h-screen">
      <Header
        style={{
          position: "sticky",
          top: 0,
          zIndex: 1,
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <div className="demo-logo" />
        <div>
          {arrNavLink.map((item, index) => {
            return (
              <NavLink
                className={({ isActive, isPending }) => {
                  console.log(isActive);
                  return `mx-5 ${isActive ? "text-red-600" : "text-white"}`;
                }}
                to={item.to}
              >
                {item.content}
              </NavLink>
            );
          })}
        </div>
        <div className="text-white uppercase">{hoTen}</div>
      </Header>
      <Content style={{ padding: "0 48px" }}>
        {/* <Breadcrumb style={{ margin: "16px 0" }}>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>List</Breadcrumb.Item>
          <Breadcrumb.Item>App</Breadcrumb.Item>
        </Breadcrumb> */}
        <div
          style={{
            padding: 24,
            minHeight: "100%",
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}
        >
          <Outlet />
        </div>
      </Content>
      <Footer
        style={{
          textAlign: "center",
        }}
      >
        ©{new Date().getFullYear()} Đặng Khôi Nguyên
      </Footer>
    </Layout>
  );
};
export default HomeTemplate;
