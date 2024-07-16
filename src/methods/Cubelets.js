/**
 * @param string
 * @returns arrray
 */
export const getRotationXyz = (string) => {
  const rotationXyz = string.split(" ");
  const rotationXyzInt = [];
  rotationXyz.forEach((value) => {
    rotationXyzInt.push(value.match(new RegExp(/(?<=\()(.*)(?=deg)/))[0]);
  });
  return rotationXyzInt;
};
