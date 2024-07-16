/**
 * @param string
 * @returns arrray
 */
export const getRotationArray = (string) => {
  const rotation = string.split(" ");
  const rotationArray = [];
  rotation.forEach((value) => {
    rotationArray.push(value.match(new RegExp(/(?<=\()(.*)(?=deg)/))[0]);
  });
  return rotationArray;
};
