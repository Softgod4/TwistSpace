import { FC } from "react";
import Checkbox from "../Checkbox/Checkbox";
import {
  useCameraControl,
  useLightControl,
  usePerspectiveCameraControl,
} from "../../store/сontrolMesh.store";

interface RenderControlProps {}

const RenderControl: FC<RenderControlProps> = ({}) => {
  const { isCameraControlEnabled, toggleCameraControl } = useCameraControl();
  const { isPerspectiveCameraControlEnabled, togglePerspectiveCameraControl } =
    usePerspectiveCameraControl();
  const { toggleLight, isLightEnabled } = useLightControl();

  return (
    <div className="w-full border-t border-solid border-[#333] hover:border-[#444] pt-4">
      <Checkbox
        id="lightControl"
        title="Enable camera rotation"
        description="includes the ability to rotate the camera around a 3D object"
        onChange={() => {
          toggleCameraControl();
          console.log(isCameraControlEnabled);
        }}
      />
      <Checkbox
        id="perspectiveCamera"
        title="Enable perspective camera"
        description="adds a visual representation of how the camera is facing the 3D object"
        onChange={() => {
          togglePerspectiveCameraControl();
          console.log(isPerspectiveCameraControlEnabled);
        }}
      />
      <Checkbox
        id="stageLight"
        title="Enable lightning in stage"
        description="turns on the stage lights to illuminate the main subject"
        onChange={() => {
          toggleLight();
          console.log(isLightEnabled);
        }}
      />
    </div>
  );
};

export default RenderControl;
