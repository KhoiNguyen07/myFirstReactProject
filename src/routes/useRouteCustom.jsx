import React from "react";
import { useRoutes } from "react-router-dom";
import HomeTemplate from "../template/HomeTemplate/HomeTemplate";
import PageNotFound from "../components/PageNotFound/PageNotFound";
import BaiTap1Props from "../components/BaiTap/BaiTap1Props";
import BaiTap2Props from "../components/BaiTap/BaiTapHienThiDienThoai/BaiTap2Props";
import RenderShoes from "../components/RenderShoes";
import ShoesDetail from "../components/ShoesDetail";
import DemoRedux from "../components/DemoRedux/DemoRedux";
import BaiTapLacXiNgau from "../components/BaiTap/BaiTapLacXiNgau/BaiTapLacXiNgau";
import DemoUseEffect from "../components/DemoUseEffect/DemoUseEffect";
import DemoUseEffectDetail from "../components/DemoUseEffect/DemoUseEffectDetail";
import { DemoFormReact } from "../components/DemoFormReact/DemoFormReact";

const useRouteCustom = () => {
  const elements = useRoutes([
    {
      path: "/",
      element: <HomeTemplate />,
      children: [
        {
          index: true,
          element: <BaiTap1Props />,
        },
        {
          path: "bai-tap-dienthoai",
          element: <BaiTap2Props />,
        },
        {
          path: "render-shoes",
          element: <RenderShoes />,
        },
        {
          path: "shoe-detail/:id",
          element: <ShoesDetail />,
        },
        {
          path: "demo-redux",
          element: <DemoRedux />,
        },
        {
          path: "bai-tap-lac-xi-ngau",
          element: <BaiTapLacXiNgau />,
        },
        {
          path: "demo-useEffect",
          element: <DemoUseEffect />,
        },
        {
          path: "demo-useEffect-detail/:id",
          element: <DemoUseEffectDetail />,
        },
        {
          path: "demo-form-react",
          element: <DemoFormReact />,
        },
      ],
    },
    {
      path: "*",
      element: <PageNotFound />,
    },
  ]);
  return elements;
};

export default useRouteCustom;
