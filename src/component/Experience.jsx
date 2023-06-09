import React, { useRef } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import CustomObject from "./CustomObject";
import { Perf } from "r3f-perf";
import { button, useControls } from "leva";
import {
  Html,
  OrbitControls,
  TransformControls,
  PivotControls,
} from "@react-three/drei";

const Experience = () => {
  const boxRef = useRef();
  const groupRef = useRef();
  const { camera, gl } = useThree();

  const { position } = useControls({
    position: {
      value: { x: -2, y: 0 },
      min: -5,
      max: 5,
      step: 0.01,
      joystick: "invertY",
    },
  });

  useFrame((state, delta) => {
    boxRef.current.rotation.y += delta;
    const angle = state.clock.elapsedTime * 0.3;
    // state.camera.position.x = Math.sin(angle) * 8;
    // state.camera.position.z = Math.cos(angle) * 8;
    // state.camera.lookAt(0, 0, 0);

    // groupRef.current.rotation.y += delta * 0.45;
  });

  return (
    <>
      <Perf position="top-left" />

      <OrbitControls makeDefault />
      <directionalLight position={[1, 2, 3]} intensity={1.4} />
      <ambientLight intensity={0.2} />
      <group ref={groupRef}>
        {/* <PivotControls anchor={[0, 0, 0]} scale={3.0} depthTest={false}> */}
        <mesh
          ref={boxRef}
          position={[position.x, position.y, 0]}
          rotation-y={Math.PI * 0.25}
          scale={1.5}
        >
          <boxGeometry />
          <meshStandardMaterial color={"#ff0000"} />
        </mesh>
        {/* </PivotControls> */}
        <mesh position={[-2, 0, 0]}>
          <sphereGeometry />
          <meshStandardMaterial color="cyan" />
          <Html>dsd</Html>
        </mesh>
      </group>
      <TransformControls object={groupRef} mode="translate" />

      <mesh position-y={-1} rotation-x={-Math.PI * 0.5} scale={18}>
        <planeGeometry />
        <meshStandardMaterial color="gray" />
      </mesh>
      <CustomObject />
    </>
  );
};

export default Experience;
