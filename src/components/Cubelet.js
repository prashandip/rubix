import React, { useEffect, useRef } from "react";
import "./../styles/cubeletFront.scss";
import "./../styles/cubeletMid.scss";
import "./../styles/cubeletBack.scss";
import { getRotationXyz } from "../methods/Cubelets";

const Cubelet = (props) => {
  const ref = useRef();
  useEffect(() => {
    // console.log(getRotationXyz(ref.current.style.transform));
  });
  return (
    <div
      className="cubelet"
      id={props.id}
      ref={ref}
      style={{ transform: "rotateX(0deg) rotateY(0deg) rotateZ(0deg)" }}
    >
      <div className="face front"></div>
      <div className="face back"></div>
      <div className="face left"></div>
      <div className="face right"></div>
      <div className="face top"></div>
      <div className="face bottom"></div>
    </div>
  );
};

export default Cubelet;
