import { createSlice, current } from "@reduxjs/toolkit";

const initialState = {
  hoTen: "Dang Khoi Nguyen",
};

const demoReduxSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    capNhatHoTen: (state, action) => {
      console.log(current(state));
      state.hoTen = action.payload;
    },
  },
});

export const { capNhatHoTen } = demoReduxSlice.actions;

export default demoReduxSlice.reducer;
