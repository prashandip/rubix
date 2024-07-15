import React, { useState } from "react";
import "./../styles/container.scss";
import Wrapper from "./Wrapper";
import ArrowIcon from "../icons/ArrowIcon";
import { useDispatch, useSelector } from "react-redux";
import { setRotateX, setRotateY } from "../store/cubeSlice";

const Container = () => {
  const dispatch = useDispatch();
  const rotateX = useSelector((state) => state.cube.rotateX);
  const rotateY = useSelector((state) => state.cube.rotateY);
  const [rotationDeg, setRotationDeg] = useState(0);
  const rotateClockwise = () => {
    setRotationDeg(rotationDeg + 90);
    console.log(rotationDeg);
    for (let i = 1; i <= 9; i++) {
      document.getElementById(
        `f${i}`
      ).style.transform = `rotate(${rotationDeg}deg)`;
    }
  };
  return (
    <section className="container">
      <Wrapper />
      <button
        className="arrow top"
        onClick={() => dispatch(setRotateX(rotateX + 10))}
      >
        <ArrowIcon />
      </button>
      <button
        className="arrow bottom"
        onClick={() => dispatch(setRotateX(rotateX - 10))}
      >
        <ArrowIcon />
      </button>
      <button
        className="arrow left"
        onClick={() => dispatch(setRotateY(rotateY - 10))}
      >
        <ArrowIcon />
      </button>
      <button
        className="arrow right"
        onClick={() => dispatch(setRotateY(rotateY + 10))}
      >
        <ArrowIcon />
      </button>
      <div className="controls right">
        <button>U</button>
        <button onClick={rotateClockwise}>F</button>
        <button>R</button>
        <button>L</button>
      </div>
      <div className="controls left">
        <button>U'</button>
        <button>F'</button>
        <button>R'</button>
        <button>L'</button>
      </div>
    </section>
  );
};

export default Container;
