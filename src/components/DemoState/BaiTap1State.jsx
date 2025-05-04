import React, { useState } from "react";

const BaiTap1State = (props) => {
  const [pic, setPic] = useState("black-car.jpg");
  const arrButton = [
    {
      pic: "black-car.jpg",
      icon: "./public/Carbasic/icons/icon-black.jpg",
      title: "Crystal black",
      subTitle: "Pearl",
    },
    {
      pic: "steel-car.jpg",
      icon: "./public/Carbasic/icons/icon-Steel.jpg",
      title: "Modern Steel",
      subTitle: "Pearl",
    },
    {
      pic: "silver-car.jpg",
      icon: "./public/Carbasic/icons/icon-silver.jpg",
      title: "Lunar Silver",
      subTitle: "Pearl",
    },
    {
      pic: "red-car.jpg",
      icon: "./public/Carbasic/icons/icon-red.jpg",
      title: "Rallye Red",
      subTitle: "Pearl",
    },
  ];
  return (
    <div>
      <h2>Bai tap hien thi loai xe tuong ung {props.count}</h2>
      <button
        className="py-2 px-5 bg-red-500 text-white"
        onClick={props.updateStateCount}
      >
        tang count
      </button>
      <div className="flex">
        <div className="w-2/3">
          <img src={`./public/Carbasic/products/${pic}`} alt="" />
        </div>
        <div className="w-1/3 space-y-3">
          {arrButton.map((item, index) => {
            return (
              <button
                onClick={() => {
                  setPic(item.pic);
                }}
                className="flex items-center w-52 py-2 px-5 rounded-md border border-black space-x-5"
              >
                <img src={item.icon} width={40} alt="" />
                <div className="text-left">
                  <b>{item.title}</b>
                  <p>{item.subTitle}</p>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default BaiTap1State;
