import React from "react";
import { useDispatch } from "react-redux";
import { capNhatHoTen } from "../../redux/slices/demoReduxSlice";

const DemoRedux = () => {
  const dispatch = useDispatch();
  return (
    <div>
      <h2>Demo ve xu li chuc nang voi redux toolkit</h2>
      <label htmlFor="">Ten Nguoi Dung</label>
      <input
        onChange={(e) => {
          dispatch(capNhatHoTen(e.target.value));
        }}
        type="text"
        className="border p-2 rounded-md w-56"
        placeholder="Vui long nhap ten nguoi dung"
      />
    </div>
  );
};

export default DemoRedux;
