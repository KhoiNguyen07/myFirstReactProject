import React from "react";

const DanhSachDienThoai = ({ listPhone, title, updateDienThoai }) => {
  return (
    <>
      <h3>{title}</h3>
      <div className="grid grid-cols-3 gap-5 p-3">
        {listPhone.map((item, index) => {
          let { hinhAnh, ten } = item;
          return (
            <div className="border border-red-200 p-3 rounded-xl">
              <img src={hinhAnh} alt="" className="rounded-xl" />
              <h3 className="text-2xl my-5">{ten}</h3>
              <button
                onClick={() => {
                  updateDienThoai(item);
                }}
                className="bg-green-500 px-3 py-2 rounded-lg text-white"
              >
                Xem chi tiet
              </button>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default DanhSachDienThoai;
