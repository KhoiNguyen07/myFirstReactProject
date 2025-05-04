import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  ten: "iphone 15 pro max",
  gia: 25000000,
  hang: "Apple",
  phones: [
    {
      ten: "iPhone 15 Pro Max",
      manHinh: "6.7 inch Super Retina XDR OLED",
      heDieuHanh: "iOS 17",
      cameraTruoc: "12MP",
      cameraSau: "48MP + 12MP + 12MP",
      ram: "8GB",
      rom: "256GB",
      hinhAnh:
        "https://buy.gazelle.com/cdn/shop/files/iPhone_15_Pro_Max_-_Natural_titanium-_Overlap_Trans-cropped.jpg?v=1745529301",
    },
    {
      ten: "Samsung Galaxy S24 Ultra",
      manHinh: "6.8 inch Dynamic AMOLED 2X",
      heDieuHanh: "Android 14",
      cameraTruoc: "12MP",
      cameraSau: "200MP + 12MP + 10MP + 10MP",
      ram: "12GB",
      rom: "256GB",
      hinhAnh:
        "https://i5.walmartimages.com/seo/Samsung-Galaxy-S24-Ultra-5G-SM-S928B-DS-1TB-12GB-RAM-DUAL-NANO-SIM-Global-Model-Factory-Unlocked-GSM-Titanium-Violet_27c8a138-e673-4372-831a-744cb9511b5f.26c52035bd3a5280da10538de73f88ae.jpeg",
    },
    {
      ten: "Xiaomi 14 Pro",
      manHinh: "6.73 inch LTPO AMOLED",
      heDieuHanh: "Android 14 (HyperOS)",
      cameraTruoc: "32MP",
      cameraSau: "50MP + 50MP + 50MP",
      ram: "12GB",
      rom: "512GB",
      hinhAnh:
        "https://cdn.shopify.com/s/files/1/0761/4716/3445/files/0.IConMan_b4d4a01a-1c46-433d-810b-7193e4f955c7.jpg?v=1699438070",
    },
  ],
};

const dienThoaiSlice = createSlice({
  name: "dienThoai",
  initialState,
  reducers: {},
});

export const {} = dienThoaiSlice.actions;

export default dienThoaiSlice.reducer;
