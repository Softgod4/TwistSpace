import { FC, MutableRefObject, useRef } from "react";
import { CameraHelper, Mesh, Object3D, Object3DEventMap } from "three";
import {
  CameraShake,
  OrbitControls,
  PerspectiveCamera,
  useHelper,
} from "@react-three/drei";

interface RenderModelProps {}

// i dont understand how to typify this..
type Falsy = any;
type BoxGeometry = any;

const RenderModel: FC<RenderModelProps> = ({}) => {
  const myMesh = useRef<Mesh>(null!);
  const camera: MutableRefObject<Object3D<Object3DEventMap>> | Falsy =
    useRef(null);
  useHelper(camera, CameraHelper);
  const boxRef: React.Ref<BoxGeometry> | undefined = useRef();

  return (
    <>
      <PerspectiveCamera ref={camera} />
      <ambientLight />
      <OrbitControls
        minAzimuthAngle={-Math.PI / 4}
        minPolarAngle={Math.PI / 6}
        maxPolarAngle={Math.PI - Math.PI / 6}
        enableZoom={false}
      />
      <pointLight position={[1, 2, 5]} intensity={2.5} />
      <mesh position={[0, 0, 0]} ref={myMesh}>
        <boxGeometry ref={boxRef} />
        <meshBasicMaterial color={"lime"} />
      </mesh>
      <CameraShake />
    </>
  );
};

export default RenderModel;
