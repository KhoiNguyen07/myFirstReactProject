import { useFormik } from "formik";
import React, { useContext, useState } from "react";
import InputCustom from "./InputCustom";
import { DatePicker } from "antd";
import ButtonCustom from "./ButtonCustom";
import TableNhanVien from "./TableNhanVien";
import * as yup from "yup";
import { NotificationContext } from "../../App";
export const DemoFormReact = () => {
  // const [value, setValue] = useState({
  //   hoTen: "KN",
  //   email: "",
  // });
  // const handleChange = (e) => {
  //   const id = e.target.id;
  //   setValue({ ...value, [id]: e.target.value });
  // };

  // su dung formik
  // form nhap du lieu nguoi dung
  // table quan li nhan vien (atd)
  const [arrNhanVien, setArrNhanVien] = useState([]);
  const {
    handleChange,
    handleSubmit,
    values,
    setFieldValue,
    errors,
    handleBlur,
    touched,
    resetForm,
    setValues,
  } = useFormik({
    //initalValue la du lieu mac dinh dc cung cap tu nguoi dung
    initialValues: {
      msnv: "",
      hoTen: "",
      email: "",
      sodienthoai: "",
      matKhau: "",
      gioiTinh: "",
      ngaySinh: "",
    },
    // duoc thuc thi khi nguoi dung submit form, "value" dai dien cho tat ca field co trong form
    onSubmit: (values, { resetForm }) => {
      setArrNhanVien([...arrNhanVien, values]);
      console.log(arrNhanVien);
      resetForm();
    },
    // yup.object nhan mot object co cac thong tin validation cho tat ca cac field
    validationSchema: yup.object({
      email: yup.string().required("vui long khong bo trong"),
      msnv: yup.string().min(4).max(8).required("vui long khon bo trong"),
      sodienthoai: yup
        .string()
        .matches(/^0(3|5|7|8|9)[0-9]{8}$/, "Nhap dung so dien thoai VietNam"),
      matKhau: yup
        .string()
        .required("vui long khong bo trong")
        .matches(
          /^(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9]).+$/,
          "Mật khẩu phải chứa ít nhất 1 chữ cái viết hoa, 1 số và 1 ký tự đặc biệt"
        ),
      gioiTinh: yup.string().required("phai chon gioi tinh"),
      ngaySinh: yup.string().required("vui long chon ngay sinh"),
    }),
  });
  console.log(errors);
  console.log(touched);

  const valueContext = useContext(NotificationContext);
  // Xoa nhan vien
  const deleteNhanVien = (msnv) => {
    const newArrNhanVien = [...arrNhanVien];
    const index = newArrNhanVien.findIndex((item) => item.msnv == msnv);
    if (index != -1) {
      newArrNhanVien.splice(index, 1);
      setArrNhanVien(newArrNhanVien);
    } else {
      valueContext.handleNotification("error", "Co loi xay ra");
    }
  };
  // Lay thong tin nhan vien
  const getInfoNhanVien = (record) => {
    // su dung phuong thuc setValues de lay record va cap nhat len form
  };
  // update Nhan vien
  const updateNhanVien = () => {
    // su dung isValid tu formik de kiem tra, neu khong co loi thi se cap nhat du lieu
  };
  return (
    <div>
      <h2 className="text-3xl font-bold text-center pb-10">
        Bai tap ung dung xay dung form lay du lieu React
      </h2>
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-2 gap-5">
          <InputCustom
            labelContent={"MSNV"}
            placeholder={"Vui long nhap MSNV"}
            name={"msnv"}
            id={"msnv"}
            value={values.msnv}
            onChange={handleChange}
            onBlur={handleBlur}
            error={errors.msnv}
            touched={touched.msnv}
          />
          <InputCustom
            labelContent={"Ho Ten"}
            placeholder={"Vui long nhap ho ten"}
            name={"hoTen"}
            id={"hoTen"}
            value={values.hoTen}
            onChange={handleChange}
          />
          <InputCustom
            labelContent={"Email"}
            placeholder={"Vui long nhap Email"}
            name={"email"}
            id={"email"}
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
            error={errors.email}
            touched={touched.email}
          />

          <InputCustom
            labelContent={"So dien thoai"}
            placeholder={"Vui long nhap so dien thoai"}
            name={"sodienthoai"}
            id={"sodienthoai"}
            value={values.sodienthoai}
            onChange={handleChange}
            onBlur={handleBlur}
            error={errors.sodienthoai}
            touched={touched.sodienthoai}
          />
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-900">
              Ngay sinh
            </label>{" "}
            <DatePicker
              format={"DD-MM-YYYY"}
              onChange={(date, dateString) => {
                setFieldValue("ngaySinh", dateString);
              }}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              onBlur={() => handleBlur({ target: { name: "ngaySinh" } })}
            />
            {touched.ngaySinh && errors.ngaySinh ? (
              <p className="text-red-500">{errors.ngaySinh}</p>
            ) : (
              <p></p>
            )}
          </div>
          <div>
            <label
              htmlFor="countries"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Chon gioi tinh
            </label>
            <select
              id={"gioiTinh"}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              value={values.gioiTinh}
              onChange={handleChange}
              name={"gioiTinh"}
              onBlur={handleBlur}
            >
              <option value="">Gioi tinh</option>
              <option value="Nam">Nam</option>
              <option value="Nu">Nu</option>
            </select>
            {touched.gioiTinh && errors.gioiTinh ? (
              <p className="text-red-500">{errors.gioiTinh}</p>
            ) : (
              <p></p>
            )}
          </div>
          <InputCustom
            labelContent={"Mat khau"}
            placeholder={"Vui long nhap so mat khau"}
            name={"matKhau"}
            id={"matKhau"}
            value={values.matKhau}
            onChange={handleChange}
            classWrapper={"col-span-2"}
            onBlur={handleBlur}
            error={errors.matKhau}
            touched={touched.matKhau}
          />
          <div className="flex justify-end space-x-5 col-span-2">
            <ButtonCustom content={"Them nhan vien"} type={"submit"} />
            <ButtonCustom
              onClick={() => {
                resetForm();
              }}
              content={"Reset form"}
              bgColor="bg-black"
            />
            <ButtonCustom
              content={"Cap nhat nhan vien"}
              bgColor="bg-yellow-500"
            />
          </div>
        </div>
      </form>
      <TableNhanVien data={arrNhanVien} handleDeleteNhanVien={deleteNhanVien} />
    </div>
  );
};
