import React from "react";
import { useLocation, useParams } from "react-router-dom";

const ShoesDetail = () => {
  const params = useParams();
  const pathName = useLocation();
  console.log(pathName);
  console.log(params);
  return <div>ShoesDetail</div>;
};

export default ShoesDetail;
