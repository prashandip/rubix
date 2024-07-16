import { createSlice } from "@reduxjs/toolkit";
const initialCubelets = [];
for (let i = 0, n = "f"; i < 3; i++) {
  if (i === 1) n = "m";
  if (i === 2) n = "b";
  for (let j = 0; j < 9; j++) {
    initialCubelets.push({
      id: `${n}${j + 1}`,
      position: [i, j],
      rotation: [0, 0, 0],
    });
  }
}

export const cubeletSlice = createSlice({
  name: "cubelet",
  initialState: {
    cubelets: initialCubelets,
  },
  reducers: {
    setCubelets: (state, action) => {
      state.rotations = action.payload;
    },
  },
});

export const { setCubelets } = cubeletSlice.actions;

export default cubeletSlice.reducer;
