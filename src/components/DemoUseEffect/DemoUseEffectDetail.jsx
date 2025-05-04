import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";

const DemoUseEffectDetail = () => {
  const [product, setProduct] = useState();
  const [searchParam, setSearchParam] = useSearchParams();
  const dataGiaTien = searchParam.get("hang");
  console.log(dataGiaTien);
  const param = useParams();
  useEffect(() => {
    axios({
      method: "get",
      url: `http://shop.cyberlearn.vn/api/Product/getbyid?id=${param.id}`,
    })
      .then((res) => {
        console.log(res);
        setProduct(res.data.content);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    return () => {
      console.log("toi la component bi tat di");
    };
  }, []);

  useEffect(() => {
    console.log("Toi al userEffect render lan dau");
  });
  return (
    <div className="render_shoes_item space-y-3">
      <img src={product?.image} alt="" />
      <h3 className="font-bold uppercase">{product?.name}</h3>
      <p className="text-lg text-gray-400">{product?.price}</p>
    </div>
  );
};

export default DemoUseEffectDetail;
