import React from "react";
import "./../styles/cubeletFront.scss";
import "./../styles/cubeletMid.scss";
import "./../styles/cubeletBack.scss";

const Cubelet = (props) => {
  const rotation = props.rotation;
  return (
    <div
      className="cubelet"
      id={props.id}
      style={{
        transform: `rotateX(${rotation[0]}deg) rotateY(${rotation[1]}deg) rotateZ(${rotation[2]}deg)`,
      }}
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
