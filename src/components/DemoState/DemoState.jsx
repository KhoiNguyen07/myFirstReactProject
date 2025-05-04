import React, { useState } from "react";

const DemoState = () => {
  // Luon khai bao hook o dau` component
  // hook khong duoc khai bao trong cac function hoac dieu kien if else, chi dc khai bao trong function component
  // hook useState
  const [state, setState] = useState(8);
  const [hoTen, setHoTen] = useState("");
  let diemToan = 9;

  return (
    <div>
      <h2>Demo State trong React</h2>
      <p>{diemToan}</p>
      <p>Gia tri state: {state}</p>
      <button
        // onClick={() => {
        //   diemToan++;
        //   console.log(diemToan);
        // }}
        onClick={() => {
          setState(state + 1);
        }}
        className="py-2 px-5 bg-red-500 text-white rounded-[100px]"
      >
        Tang diem
      </button>
      {/* thuc hien truyen data stateHoTen vao the p = dataBinding  */}
      {/* o input chay su kien onChange de cap nhat lai data cho state hoTen */}
      <div>
        <label htmlFor="">Nhap ten</label>
        <input
          onChange={(event) => {
            let newHoten = event.target.value;
            setHoTen(newHoten);
          }}
          type="text"
          className="p-2 border mx-2"
          placeholder="nhap ho ten"
        />
        <p>{hoTen}</p>
      </div>
      <img src="./public/Carbasic/products/black-car.jpg" alt="" />
      <img src="" alt="" />
    </div>
  );
};

export default DemoState;
