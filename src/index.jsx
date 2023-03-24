import "./style.css";
import ReactDOM from "react-dom/client";
import React from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import Experience from "./component/Experience";
import * as THREE from "three";

const root = ReactDOM.createRoot(document.querySelector("#root"));

const cameraSetting = {
  fov: 45,
  near: 1,
  far: 20,
  position: [3, 1, 5],
};

root.render(
  <Canvas
    // dpr={[1, 2]} default
    // gl={{
    //     antialias: true,
    //     toneMapping: THREE.CineonToneMapping
    // }}
    // flat
    camera={cameraSetting}
  >
    <Experience />
  </Canvas>
);
