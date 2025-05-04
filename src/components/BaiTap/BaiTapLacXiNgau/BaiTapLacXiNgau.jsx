import React from "react";
import "./style.scss";
import XiNgau from "./XiNgau";
import KetQua from "./KetQua";
import { useDispatch } from "react-redux";
import { ketQuaNguoiChoi } from "../../../redux/slices/xiNgauSlice";

const BaiTapLacXiNgau = () => {
  const dispath = useDispatch();
  return (
    <div className="baiTap2 text-center py-16 px-5">
      <h2 className="uppercase text-5xl">Game Lắc Xí Ngầu</h2>
      <XiNgau />
      <KetQua />
      <button
        onClick={() => {
          dispath(ketQuaNguoiChoi());
        }}
        className="btnPlay"
      >
        Play game
      </button>
    </div>
  );
};

export default BaiTapLacXiNgau;
