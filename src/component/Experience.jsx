import React, { useRef } from "react";
import { extend, useFrame, useThree } from "@react-three/fiber";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import CustomObject from "./CustomObject";
extend({ OrbitControls });

const Experience = () => {
  const boxRef = useRef();
  const groupRef = useRef();
  const { camera, gl } = useThree();

  useFrame((state, delta) => {
    boxRef.current.rotation.y += delta;
    // groupRef.current.rotation.y += delta * 0.45;
  });

  return (
    <>
      <orbitControls args={[camera, gl.domElement]} />
      <directionalLight position={[1, 2, 3]} intensity={1.4} />
      <ambientLight intensity={0.2} />
      <group ref={groupRef}>
        <mesh
          ref={boxRef}
          position={[2, 0, 0]}
          rotation-y={Math.PI * 0.25}
          scale={1.5}
        >
          <boxGeometry />
          <meshStandardMaterial color="red" />
        </mesh>

        <mesh position={[-2, 0, 0]}>
          <sphereGeometry />
          <meshStandardMaterial color="cyan" />
        </mesh>
      </group>
      <mesh position-y={-1} rotation-x={-Math.PI * 0.5} scale={18}>
        <planeGeometry />
        <meshStandardMaterial color="gray" />
      </mesh>
      <CustomObject />
    </>
  );
};

export default Experience;
