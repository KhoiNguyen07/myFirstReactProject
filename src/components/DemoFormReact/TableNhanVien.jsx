import { Space, Table, Tag } from "antd";
import React from "react";
import ButtonCustom from "./ButtonCustom";

const TableNhanVien = ({ data, handleDeleteNhanVien }) => {
  const columns = [
    {
      title: "MSNV",
      dataIndex: "msnv",
      key: "msnv",
      // render: (text) => <a>{text}</a>,
    },
    {
      title: "Ho ten",
      dataIndex: "hoTen",
      key: "hoTen",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Gioi tinh",
      key: "gioiTinh",
      dataIndex: "gioiTinh",
      render: (text, record, index) => {
        return <Tag color={text == "Nam" ? "magenta" : "geekblue"}>{text}</Tag>;
      },
    },
    {
      title: "Action",
      key: "action",
      render: (text, record, index) => {
        return (
          <>
            <ButtonCustom
              onClick={() => {
                handleDeleteNhanVien(record.msnv);
              }}
              content={"xoa"}
              bgColor="bg-red-500"
            />
            <ButtonCustom content={"sua"} bgColor="bg-purple-500" />
          </>
        );
      },
    },
  ];

  return (
    <div className="mt-10">
      <Table columns={columns} dataSource={data} />
    </div>
  );
};

export default TableNhanVien;
