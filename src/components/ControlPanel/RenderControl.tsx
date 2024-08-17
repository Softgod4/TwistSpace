import { FC } from "react";
import Checkbox from "../Checkbox/Checkbox";
import {
  useCameraControl,
  usePerspectiveCameraControl,
} from "../../store/сontrolMesh.store";

interface RenderControlProps {}

const RenderControl: FC<RenderControlProps> = ({}) => {
  const { isCameraControlEnabled, toggleCameraControl } = useCameraControl();
  const { isPerspectiveCameraControlEnabled, togglePerspectiveCameraControl } =
    usePerspectiveCameraControl();

  return (
    <div className="w-full mt-8">
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
    </div>
  );
};

export default RenderControl;
