import React from "react";

const ChiTietDienThoai = ({ dienThoai }) => {
  return (
    <div>
      <h2>Chi Tiet Dien Thoai</h2>
      <div className="flex">
        <div className="w-4/12">
          <img src={dienThoai.hinhAnh} className="rounded-xl" />
        </div>

        <div className="w-8/12 px-10">
          <h3 className="font-bold">Thong So Ki Thuat</h3>
          <table border={3} cellPadding={10}>
            <tr>
              <td>Man hinh:</td>
              <td>{dienThoai.manHinh}</td>
            </tr>
            <tr>
              <td>He Dieu Hanh: </td>
              <td>{dienThoai.heDieuHanh}</td>
            </tr>
            <tr>
              <td>Camera truoc: </td>
              <td>{dienThoai.cameraTruoc}</td>
            </tr>
            <tr>
              <td>Camera sau: </td>
              <td>{dienThoai.cameraSau}</td>
            </tr>
            <tr>
              <td>Ram: </td>
              <td>{dienThoai.ram}</td>
            </tr>
            <tr>
              <td>Rom: </td>
              <td>{dienThoai.rom}</td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ChiTietDienThoai;
