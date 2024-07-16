import React, { useEffect } from "react";
import "./../styles/cube.scss";
import Cubelet from "./Cubelet";
import { useSelector } from "react-redux";

const Cube = () => {
  const cubeRotateX = useSelector((state) => state.cube.rotateX);
  const cubeRotateY = useSelector((state) => state.cube.rotateY);
  const cubeletRotations = useSelector(
    (state) => state.cubelet.cubeletRotations
  );
  const renderCubelets = () => (
    <>
      {cubeletRotations.map((cubelet) => (
        <Cubelet key={cubelet.id} id={cubelet.id} rotation={cubelet.rotation} />
      ))}
    </>
  );
  return (
    <section
      className="cube"
      style={{
        transform: `rotateX(${cubeRotateX}deg) rotateY(${cubeRotateY}deg)`,
      }}
    >
      {renderCubelets()}
    </section>
  );
};

export default Cube;
