import axios from "axios";
import React, { useCallback, useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ItemShoe from "./ItemShoe";
import { NotificationContext } from "../../App";

const DemoUseEffect = () => {
  //   const data = useContext(NotificationContext);
  //   console.log(data);
  //   data.handleNotification("success", "hello");
  const [products, setProducts] = useState();
  useEffect(() => {
    //Những xử lí được thực thi khi component hiển thị lên giao diện
    console.log("toi nam trong useEffect");
    axios({ method: "get", url: "http://shop.cyberlearn.vn/api/Product" })
      .then((res) => {
        console.log(res);
        setProducts(res.data.content);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  let hienThiNoiDung = () => {
    console.log("Toi la thanh phan noi dung tren trang");
    return <p>hello123</p>;
  };

  // useCallback được sử dụng khi chúng ta cần quản lí 1 function có nên được render lại khi component rerender hay không
  const functionCallBack = useCallback(hienThiNoiDung, []);
  return (
    <div>
      {functionCallBack()}
      <input type="text" placeholder="nhap so" onChange={() => {}} />
      <h2>Bai tap su dung useEffect xu li API tu backend</h2>
      <div className="grid grid-cols-4">
        {products?.map((item, index) => {
          return <ItemShoe value={index} {...item} />;
        })}
      </div>
    </div>
  );
};

export default DemoUseEffect;
