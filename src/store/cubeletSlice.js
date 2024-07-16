import { createSlice } from "@reduxjs/toolkit";
const initialCubeletPositions = [];
const initialCubeletRotations = [];
for (let i = 0, n = "f"; i < 3; i++) {
  if (i === 1) n = "m";
  if (i === 2) n = "b";
  for (let j = 0; j < 9; j++) {
    initialCubeletPositions.push(`${n}${j + 1}`);
    initialCubeletRotations.push({
      id: `${n}${j + 1}`,
      rotation: [0, 0, 0],
    });
  }
}

export const cubeletSlice = createSlice({
  name: "cubelet",
  initialState: {
    cubeletPositions: initialCubeletPositions,
    cubeletRotations: initialCubeletRotations,
  },
  reducers: {
    setCubeletPositions: (state, action) => {
      state.cubeletPositions = action.payload;
    },
    setCubeletRotations: (state, action) => {
      state.cubeletRotations = action.payload;
    },
  },
});

export const { setCubeletPositions, setCubeletRotations } =
  cubeletSlice.actions;

export default cubeletSlice.reducer;
