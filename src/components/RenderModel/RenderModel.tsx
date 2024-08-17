import { FC, MutableRefObject, useRef } from "react";
import { CameraHelper, Mesh, Object3D, Object3DEventMap } from "three";
import { OrbitControls, PerspectiveCamera, useHelper } from "@react-three/drei";
import {
  useCameraControl,
  usePerspectiveCameraControl,
} from "../../store/сontrolMesh.store";

interface RenderModelProps {}

// i dont understand how to typify this..
type Falsy = any;
type BoxGeometry = any;

const RenderModel: FC<RenderModelProps> = ({}) => {
  const myMesh = useRef<Mesh>(null!);
  const camera: React.Ref<BoxGeometry> | undefined = useRef();
  useHelper(camera, CameraHelper);
  const boxRef: React.Ref<BoxGeometry> | undefined = useRef();
  const { isCameraControlEnabled } = useCameraControl();
  const { isPerspectiveCameraControlEnabled } = usePerspectiveCameraControl();
  return (
    <>
      <PerspectiveCamera
        ref={camera}
        fov={!isPerspectiveCameraControlEnabled ? 0 : 50}
      />
      <ambientLight />
      {!isCameraControlEnabled ? (
        <OrbitControls
          minAzimuthAngle={-Math.PI / 4}
          minPolarAngle={Math.PI / 6}
          maxPolarAngle={Math.PI - Math.PI / 6}
          enableZoom={false}
        />
      ) : (
        ""
      )}
      <pointLight position={[1, 2, 5]} intensity={2.5} />
      <mesh position={[0, 0, 0]} ref={myMesh}>
        <boxGeometry ref={boxRef} />
        <meshBasicMaterial color={"lime"} />
      </mesh>
      {/* <CameraShake /> */}
    </>
  );
};

export default RenderModel;
