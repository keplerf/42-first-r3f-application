import "./style.css";
import ReactDOM from "react-dom/client";
import React from "react";
import { Canvas } from "@react-three/fiber";
import Experience from "./component/Experience";

const root = ReactDOM.createRoot(document.querySelector("#root"));

root.render(
  <Canvas
    camera={{
      fov: 45,
      near: 1,
      far: 20,
      position: [3, 4, 6],
    }}
  >
    <Experience />
  </Canvas>
);
