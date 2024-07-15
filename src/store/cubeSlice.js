import { createSlice } from "@reduxjs/toolkit";

const initialPositions = [
  [
    ["f1", "f2", "f3"],
    ["f4", "f5", "f6"],
    ["f7", "f8", "f9"],
  ],
  [
    ["m1", "m2", "m3"],
    ["m4", "m5", "m6"],
    ["m7", "m8", "m9"],
  ],
  [
    ["b1", "b2", "b3"],
    ["b4", "b5", "b6"],
    ["b7", "b8", "b9"],
  ],
];

export const cubeSlice = createSlice({
  name: "cube",
  initialState: {
    rotateX: 0,
    rotateY: 0,
    positions: initialPositions,
  },
  reducers: {
    setRotateX: (state, action) => {
      state.rotateX = action.payload;
    },
    setRotateY: (state, action) => {
      state.rotateY = action.payload;
    },
    setPositions: (state, action) => {
      state.positions = action.payload;
    },
  },
});

export const { setRotateX, setRotateY, setPositions } = cubeSlice.actions;

export default cubeSlice.reducer;
