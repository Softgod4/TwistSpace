import { FC } from "react";
import Checkbox from "../Checkbox/Checkbox";
import {
  RangeInputStore,
  useCheckboxControl,
} from "../../store/сontrolMesh.store";
import RangeInput from "../RangeInput/RangeInput";

interface RenderControlProps {}

const RenderControl: FC<RenderControlProps> = ({}) => {
  const {
    toggleLight,
    toggleCameraControl,
    togglePerspectiveCameraControl,
    isLightEnabled,
    isCameraControlEnabled,
    isPerspectiveCameraControlEnabled,
  } = useCheckboxControl();
  const { rangeValue, setRangeValue } = RangeInputStore();

  return (
    <>
      <div className="w-full border-t border-solid border-[#333] hover:border-[#444] pt-4 pb-4">
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
      <div className="w-full border-t border-solid border-[#333] hover:border-[#444] pt-6">
        <div className="flex justify-start items-center w-full">
          <p className="font-medium text-white text-xl leading-none mr-6">
            Scale
          </p>
          <RangeInput
            minValue={10}
            maxValue={50}
            StartValue={10}
            onChange={(e) => {
              setRangeValue(Number(e.target.value));
            }}
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
          />
        </div>
      </div>
    </>
  );
};

export default RenderControl;
