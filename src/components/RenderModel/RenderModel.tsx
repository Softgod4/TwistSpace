import { FC, useRef } from "react";
import { CameraHelper, Mesh } from "three";
import { OrbitControls, PerspectiveCamera, useHelper } from "@react-three/drei";
import {
  useCameraControl,
  useLightControl,
  usePerspectiveCameraControl,
} from "../../store/сontrolMesh.store";
import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/Addons.js";
interface RenderModelProps {}

// i dont understand how to typify this..
type BoxGeometry = any;

const RenderModel: FC<RenderModelProps> = ({}) => {
  const myMesh = useRef<Mesh>(null!);
  const camera: React.Ref<BoxGeometry> | undefined = useRef();
  useHelper(camera, CameraHelper);
  const { isCameraControlEnabled } = useCameraControl();
  const { isPerspectiveCameraControlEnabled } = usePerspectiveCameraControl();
  const { isLightEnabled } = useLightControl();

  const model = useLoader(GLTFLoader, "/ganyu.glb");

  return (
    <>
      <PerspectiveCamera
        ref={camera}
        // костыль
        fov={!isPerspectiveCameraControlEnabled ? 25 : NaN}
      />
      {!isLightEnabled ? <ambientLight /> : ""}
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
      {!isLightEnabled ? (
        <pointLight position={[1, 2, 5]} intensity={25.5} />
      ) : (
        ""
      )}
      <mesh position={[0, 0, 0]} ref={myMesh}>
        <primitive object={model.scene} scale={2} position-y={-2} />
      </mesh>
    </>
  );
};

export default RenderModel;
