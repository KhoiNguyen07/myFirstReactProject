import { Route, Routes } from "react-router-dom";
import BaiTap1Props from "./components/BaiTap/BaiTap1Props";
import BaiTap2Props from "./components/BaiTap/BaiTapHienThiDienThoai/BaiTap2Props";
import HomeTemplate from "./template/HomeTemplate/HomeTemplate";
import PageNotFound from "./components/PageNotFound/PageNotFound";
import RenderShoes from "./components/RenderShoes";
import ShoesDetail from "./components/ShoesDetail";
import useRouteCustom from "./routes/useRouteCustom";
import React, { createContext } from "react";
import { message } from "antd";

export const NotificationContext = createContext();
function App() {
  const [messageApi, contextHolder] = message.useMessage();
  const handleNotification = (type, content) => {
    messageApi.open({
      type,
      content,
    });
  };
  const routes = useRouteCustom();
  return (
    <>
      <NotificationContext.Provider
        value={{
          handleNotification,
        }}
      >
        {contextHolder}
        {routes}
      </NotificationContext.Provider>
    </>
  );
  // return (
  //   <>
  //     <Routes>
  //       <Route path="" element={<HomeTemplate />}>
  //         <Route index element={<BaiTap1Props />} />
  //         <Route path="bai-tap-dienthoai" element={<BaiTap2Props />} />
  //         <Route path="render-shoes" element={<RenderShoes />} />
  //         <Route path="shoe-detail/:id" element={<ShoesDetail />} />
  //       </Route>
  //       <Route path="*" element={<PageNotFound />} />
  //     </Routes>
  //   </>
  // );
}

export default App;
