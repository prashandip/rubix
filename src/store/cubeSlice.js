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
const initialTempArray = [
  ["f1", "f2", "f3"],
  ["f4", "f5", "f6"],
  ["f7", "f8", "f9"],
];

export const cubeSlice = createSlice({
  name: "cube",
  initialState: {
    rotateX: -20,
    rotateY: -20,
    cubeletRefArray: [],
    positions: initialPositions,
    tempArray: initialTempArray,
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
    setTempArray: (state, action) => {
      state.tempArray = action.payload;
    },
    setCubeletRefArray: (state, action) => {
      state.cubeletRefArray = action.payload;
    },
  },
});

export const {
  setRotateX,
  setRotateY,
  setPositions,
  setTempArray,
  setCubeletRefArray,
} = cubeSlice.actions;

export default cubeSlice.reducer;
