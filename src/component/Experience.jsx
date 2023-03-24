import React, { useRef } from "react";
import { extend, useFrame } from "@react-three/fiber";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

extend({ OrbitControls });

const Experience = () => {
  const boxRef = useRef();
  const groupRef = useRef();

  useFrame((state, delta) => {
    boxRef.current.rotation.y += delta;
    // groupRef.current.rotation.y += delta * 0.45;
  });

  return (
    <>
      {/* <orbitControl args={[]} /> */}
      <group ref={groupRef}>
        <mesh
          ref={boxRef}
          position={[1, 0, 0]}
          rotation-y={Math.PI * 0.25}
          scale={1.5}
        >
          <boxGeometry />
          <meshBasicMaterial color="red" />
        </mesh>

        <mesh position={[-1, 0, 0]}>
          <sphereGeometry />
          <meshBasicMaterial color="cyan" />
        </mesh>
      </group>
      <mesh position-y={-1} rotation-x={-Math.PI * 0.5} scale={18}>
        <planeGeometry />
        <meshBasicMaterial color="gray" />
      </mesh>
    </>
  );
};

export default Experience;
