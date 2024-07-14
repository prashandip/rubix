import React from "react";
import "./../styles/cube.scss";
import Cubelet from "./Cubelet";
import { useSelector } from "react-redux";

const Cube = () => {
  const rotateX = useSelector((state) => state.cube.rotateX);
  const rotateY = useSelector((state) => state.cube.rotateY);
  return (
    <section
      className="cube"
      style={{ transform: `rotateX(${rotateX}deg) rotateY(${rotateY}deg)` }}
    >
      {true && <Cubelet id={"f1"} />}
      {true && <Cubelet id={"f2"} />}
      {true && <Cubelet id={"f3"} />}
      {true && <Cubelet id={"f4"} />}
      {true && <Cubelet id={"f5"} />}
      {true && <Cubelet id={"f6"} />}
      {true && <Cubelet id={"f7"} />}
      {true && <Cubelet id={"f8"} />}
      {true && <Cubelet id={"f9"} />}
    </section>
  );
};

export default Cube;
