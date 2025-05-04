import React from "react";
import pageNotFountAnimation from "./../../assets/Animation/pageNotFound.json";
import Lottie from "lottie-react";
import { Link, useNavigate } from "react-router-dom";

const PageNotFound = () => {
  const navigate = useNavigate();
  return (
    <div className=" flex justify-center items-center h-screen flex-col">
      <Lottie animationData={pageNotFountAnimation} loops />
      <h2>Trang not found</h2>
      <button
        onClick={() => {
          navigate("/");
        }}
        className="bg-red-500 text-white px-5 py-2 rounded-lg mt-5"
      >
        Quay ve
      </button>
      {/* <Link
        to={"/"}
        className="bg-red-500 text-white px-5 py-2 rounded-lg mt-5"
      >
        Quay ve
      </Link> */}
    </div>
  );
};

export default PageNotFound;
