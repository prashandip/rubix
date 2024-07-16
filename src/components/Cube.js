import React from "react";
import "./../styles/cube.scss";
import Cubelet from "./Cubelet";
import { useSelector } from "react-redux";

const Cube = () => {
  const cubeRotateX = useSelector((state) => state.cube.rotateX);
  const cubeRotateY = useSelector((state) => state.cube.rotateY);
  const cubelets = useSelector((state) => state.cubelet.cubelets);

  const renderCubelets = () => (
    <>
      {/* {positions.map((face) =>
        face.map((row) => row.map((value, i) => <Cubelet key={i} id={value} />))
      )} */}
      {cubelets.map((cubelet) => (
        <Cubelet
          key={cubelet.id}
          id={cubelet.id}
          styles={{
            transform: `rotateX(${cubelet.rotation[0]}deg) rotateY(${cubelet.rotation[0]}deg) rotateZ(${cubelet.rotation[0]}deg)`,
          }}
        />
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
