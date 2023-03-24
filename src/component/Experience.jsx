import React, { useRef } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import CustomObject from "./CustomObject";
import { OrbitControls, TransformControls } from "@react-three/drei";

const Experience = () => {
  const boxRef = useRef();
  const groupRef = useRef();
  const { camera, gl } = useThree();

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
      <OrbitControls makeDefault />
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
          <meshStandardMaterial color={"#ff0000"} />
        </mesh>

        <mesh position={[-2, 0, 0]}>
          <sphereGeometry />
          <meshStandardMaterial color="cyan" />
        </mesh>
      </group>
      <TransformControls object={groupRef} />

      <mesh position-y={-1} rotation-x={-Math.PI * 0.5} scale={18}>
        <planeGeometry />
        <meshStandardMaterial color="gray" />
      </mesh>
      <CustomObject />
    </>
  );
};

export default Experience;
