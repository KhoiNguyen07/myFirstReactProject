import React from "react";

const DemoEvent = () => {
  function chaoMungSinhVienMoi(hoTen) {
    alert(`Chuc mung sinh vien ${hoTen} da nhap hoc`);
  }

  return (
    <div className="container">
      <h2 className="font-bold text-2xl">Demo xu li su kien</h2>
      <button
        // onClick={() => {
        //   alert("Nguoi dung da bam nut");
        // }}
        onClick={() => {
          chaoMungSinhVienMoi("Khoi Nguyen");
        }}
        className="bg-black text-white py-2 px-5 rounded-md"
      >
        Hien thi cau chao`
      </button>
      <label htmlFor="" className="block">
        ho ten
      </label>
      <input
        type="text"
        placeholder="Vui long` nhap ho ten"
        className="p-2 border rounded-md block mb-10"
        onChange={(event) => {
          console.log(event.target.value);
        }}
      />
    </div>
  );
};

export default DemoEvent;
