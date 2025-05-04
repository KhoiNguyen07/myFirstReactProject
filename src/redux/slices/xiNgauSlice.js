import { createSlice } from "@reduxjs/toolkit";
import KetQua from "../../components/BaiTap/BaiTapLacXiNgau/KetQua";

const initialState = {
  xiNgau: {
    xiNgau1: 2,
    xiNgau2: 3,
    xiNgau3: 6,
  },
  tongSoBanThang: 0,
  tongSoBanChoi: 0,
  banChon: "Chưa chọn",
};

const xiNgauSlice = createSlice({
  name: "xiNgau",
  initialState,
  reducers: {
    capNhatBanChon: (state, action) => {
      state.banChon = action.payload;
    },
    ketQuaNguoiChoi: (state, action) => {
      let xiNgau1 = Math.floor(Math.random() * 6) + 1;
      let xiNgau2 = Math.floor(Math.random() * 6) + 1;
      let xiNgau3 = Math.floor(Math.random() * 6) + 1;
      state.xiNgau = { ...state.xiNgau, xiNgau1, xiNgau2, xiNgau3 };
      state.tongSoBanChoi++;
      let kq = xiNgau1 + xiNgau2 + xiNgau3 >= 11 ? "Tài" : "Xỉu";
      state.banChon == kq ? state.tongSoBanThang++ : state.tongSoBanThang;
    },
  },
});

export const { capNhatBanChon, ketQuaNguoiChoi } = xiNgauSlice.actions;

export default xiNgauSlice.reducer;
