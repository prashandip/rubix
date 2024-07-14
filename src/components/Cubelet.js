import React from "react";
import "./../styles/cubeletFront.scss";

const Cubelet = (props) => {
  return (
    <div className="cubelet" id={props.id}>
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
