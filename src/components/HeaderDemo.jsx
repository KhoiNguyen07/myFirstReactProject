// Câu lệnh: rafce tạo components
import React from "react";

const HeaderDemo = () => {
  const sinhVien = {
    hoTen: "Dang Khoi Nguyen",
    tuoi: 18,
  };
  const arrMonAn = [
    {
      tenMon: "sushi",
      gia: 12000,
    },
    {
      tenMon: "sashimi",
      gia: 15000,
    },
  ];
  // Thái sử dụng button
  const classBtn = "py-2 px-5 bg-red-500 rounded-md";
  return (
    <div className="text-center bg-blue-400 text-white p-10">
      <p>{sinhVien.hoTen}</p>
      <button className={classBtn}>button</button>
      <p>{sinhVien.tuoi > 18 ? "Chuc mung" : "chua du tuoi"}</p>

      {arrMonAn.map((item, index) => {
        return (
          <div className="flex justify-center">
            <h3>{item.tenMon}</h3>
          </div>
        );
      })}
    </div>
  );
};

export default HeaderDemo;
