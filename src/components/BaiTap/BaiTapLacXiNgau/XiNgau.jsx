import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { capNhatBanChon } from "../../../redux/slices/xiNgauSlice";
const XiNgau = () => {
  const dispatch = useDispatch();
  const { xiNgau } = useSelector((state) => state.xiNgauSlice);
  return (
    <div className="xiNgau flex justify-between items-center">
      <button
        onClick={() => {
          dispatch(capNhatBanChon("Tài"));
        }}
        className="btnXiNgau"
      >
        Tài
      </button>
      <div className="flex items-center p-3 bg-white h-max rounded-md">
        <img
          src={`./public/lacXiNgau/${xiNgau.xiNgau1}.png`}
          width={50}
          alt=""
        />
        <img
          src={`./public/lacXiNgau/${xiNgau.xiNgau2}.png`}
          width={50}
          alt=""
        />
        <img
          src={`./public/lacXiNgau/${xiNgau.xiNgau3}.png`}
          width={50}
          alt=""
        />
      </div>
      <button
        className="btnXiNgau"
        onClick={() => {
          dispatch(capNhatBanChon("Xỉu"));
        }}
      >
        Xỉu
      </button>
    </div>
  );
};

export default XiNgau;
