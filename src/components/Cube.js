import React from "react";
import "./../styles/cube.scss";
import Cubelet from "./Cubelet";
import { useSelector } from "react-redux";

const Cube = () => {
  const rotateX = useSelector((state) => state.cube.rotateX);
  const rotateY = useSelector((state) => state.cube.rotateY);
  const positions = useSelector((state) => state.cube.positions);
  return (
    <section
      className="cube"
      style={{ transform: `rotateX(${rotateX}deg) rotateY(${rotateY}deg)` }}
    >
      <Cubelet id={"f1"} />
      <Cubelet id={"f2"} />
      <Cubelet id={"f3"} />
      <Cubelet id={"f4"} />
      <Cubelet id={"f5"} />
      <Cubelet id={"f6"} />
      <Cubelet id={"f7"} />
      <Cubelet id={"f8"} />
      <Cubelet id={"f9"} />
      <Cubelet id={"m1"} />
      <Cubelet id={"m2"} />
      <Cubelet id={"m3"} />
      <Cubelet id={"m4"} />
      <Cubelet id={"m5"} />
      <Cubelet id={"m6"} />
      <Cubelet id={"m7"} />
      <Cubelet id={"m8"} />
      <Cubelet id={"m9"} />
      <Cubelet id={"b1"} />
      <Cubelet id={"b2"} />
      <Cubelet id={"b3"} />
      <Cubelet id={"b4"} />
      <Cubelet id={"b5"} />
      <Cubelet id={"b6"} />
      <Cubelet id={"b7"} />
      <Cubelet id={"b8"} />
      <Cubelet id={"b9"} />
    </section>
  );
};

export default Cube;
