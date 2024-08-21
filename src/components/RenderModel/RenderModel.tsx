import { FC, useEffect, useRef, useState } from "react";
import { CameraHelper } from "three";
import { OrbitControls, PerspectiveCamera, useHelper } from "@react-three/drei";
import {
  RangeInputStore,
  useCheckboxControl,
} from "../../store/сontrolMesh.store";
import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/Addons.js";
import { useUploadUrl } from "../../store/UploadUrl.store";
import { motion } from "framer-motion-3d";

interface RenderModelProps {}

// i dont understand how to typify this..
type BoxGeometry = any;
type Scene = any;

const RenderModel: FC<RenderModelProps> = ({}) => {
  const camera: React.Ref<BoxGeometry> | undefined = useRef();
  useHelper(camera, CameraHelper);

  const {
    isLightEnabled,
    isCameraControlEnabled,
    isPerspectiveCameraControlEnabled,
  } = useCheckboxControl();

  const { scaleValue, lightValue } = RangeInputStore();

  const [model, setModel] = useState<Scene | null>(null);
  const { StateUrl } = useUploadUrl();

  // Загрузка начальной модели
  const defaultModel = useLoader(GLTFLoader, "/ganyu.glb");

  useEffect(() => {
    if (StateUrl) {
      const loader = new GLTFLoader();
      loader.load(StateUrl, (gltf) => {
        setModel(gltf.scene);
      });
    }
  }, [StateUrl]);

  const currentModel = model || defaultModel.scene;

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
          enableZoom={true}
        />
      ) : (
        ""
      )}
      {!isLightEnabled ? (
        <pointLight position={[1, 2, 5]} intensity={lightValue / 5} />
      ) : (
        ""
      )}
      {currentModel ? (
        <motion.mesh scale={scaleValue / 10}>
          <primitive object={currentModel} scale={2} position-y={-2} />
        </motion.mesh>
      ) : (
        <p className="w-full h-full text-2xl text-white">Loading model...</p>
      )}
    </>
  );
};

export default RenderModel;
