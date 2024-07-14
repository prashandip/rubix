import { createSlice } from "@reduxjs/toolkit";

export const cubeSlice = createSlice({
  name: "cube",
  initialState: {
    rotateX: 0,
    rotateY: 0,
  },
  reducers: {
    setRotateX: (state, action) => {
      state.rotateX = action.payload;
    },
    setRotateY: (state, action) => {
      state.rotateY = action.payload;
    },
  },
});

export const { setRotateX, setRotateY } = cubeSlice.actions;

export default cubeSlice.reducer;
