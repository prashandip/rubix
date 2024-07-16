export const performAlgorithmF = (cubelets) => {
  const newCubelets = [];
  const newRotation = [0, 0, cubelets[0].rotation[2] + 90];
  const getNewCubelet = (id) => ({
    id: cubelets[id].id,
    rotation: newRotation,
  });
  cubelets.forEach((cubelet, i) => {
    if (i === 0) newCubelets.push(getNewCubelet(6));
    else if (i === 1) newCubelets.push(getNewCubelet(3));
    else if (i === 2) newCubelets.push(getNewCubelet(0));
    else if (i === 3) newCubelets.push(getNewCubelet(7));
    else if (i === 4) newCubelets.push(getNewCubelet(4));
    else if (i === 5) newCubelets.push(getNewCubelet(1));
    else if (i === 6) newCubelets.push(getNewCubelet(8));
    else if (i === 7) newCubelets.push(getNewCubelet(5));
    else if (i === 8) newCubelets.push(getNewCubelet(2));
    else newCubelets.push(cubelet);
  });
  console.log(newCubelets);
  return newCubelets;
};

export const performRotationF = (cubelets) => {
  const newCubelets = [];
  cubelets.forEach((cubelet, i) => {
    if (i < 9)
      newCubelets.push({
        id: cubelet.id,
        rotation: [0, 0, cubelets[i].rotation[2] + 90],
      });
    else newCubelets.push(cubelet);
  });
  return newCubelets;
};
export const updatePositionsAfterF = (cubelets) => {
  const newCubelets = [];
  cubelets.forEach((cubelet, i) => {
    if (i === 0) newCubelets.push(cubelets[6]);
    else if (i === 1) newCubelets.push(cubelets[3]);
    else if (i === 2) newCubelets.push(cubelets[0]);
    else if (i === 3) newCubelets.push(cubelets[7]);
    // else if (i === 4) newCubelets.push(cubelets[4]);
    else if (i === 5) newCubelets.push(cubelets[1]);
    else if (i === 6) newCubelets.push(cubelets[8]);
    else if (i === 7) newCubelets.push(cubelets[5]);
    else if (i === 8) newCubelets.push(cubelets[2]);
    else newCubelets.push(cubelet);
  });
  return newCubelets;
};
