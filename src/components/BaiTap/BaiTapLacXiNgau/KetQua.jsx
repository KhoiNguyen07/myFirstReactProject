import React from "react";
import { useSelector } from "react-redux";

const KetQua = () => {
  const { tongSoBanThang, tongSoBanChoi, banChon } = useSelector(
    (state) => state.xiNgauSlice
  );
  return (
    <div className="ketQua">
      <p>
        Bạn chọn: <span className="text-red-600">{banChon}</span>
      </p>
      <p>
        Tổng số bàn thắng:{" "}
        <span className="text-red-600">{tongSoBanThang}</span>
      </p>
      <p>
        Tổng số bàn chơi: <span className="text-red-600">{tongSoBanChoi}</span>
      </p>
    </div>
  );
};

export default KetQua;
