import { FC, useRef } from "react";
import { Mesh } from "three";
import { useFrame } from "@react-three/fiber";
import { CameraShake } from "@react-three/drei";

interface RenderModelProps {}

const RenderModel: FC<RenderModelProps> = ({}) => {
  const myMesh = useRef<Mesh>(null!);

//   useFrame(({ clock }) => {
//     if (myMesh.current) {
//       myMesh.current.rotation.x = clock.getElapsedTime();
//       myMesh.current.rotation.y = clock.getElapsedTime();
//     }
//   });

  return (
    <>
      <CameraShake
        maxYaw={0.1}
        maxPitch={0.1}
        maxRoll={0.1}
        yawFrequency={0.1}
        pitchFrequency={0.1}
        rollFrequency={0.1}
        intensity={1}
        decayRate={0.65}
      />
      <ambientLight />
      <pointLight position={[1, 5, 5]} intensity={2.5} />
      <mesh position={[0, 0, 0]} ref={myMesh}>
        <boxGeometry/>
        <meshNormalMaterial opacity={0.8}/>
      </mesh>
    </>
  );
};

export default RenderModel;
