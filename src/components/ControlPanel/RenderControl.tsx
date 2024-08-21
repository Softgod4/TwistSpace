import { FC } from "react";
import Checkbox from "../Checkbox/Checkbox";
import {
  RangeInputStore,
  useCheckboxControl,
} from "../../store/сontrolMesh.store";
import RangeInput from "../RangeInput/RangeInput";

interface RenderControlProps {}

const RenderControl: FC<RenderControlProps> = ({}) => {
  const { toggleLight, toggleCameraControl, togglePerspectiveCameraControl } =
    useCheckboxControl();
  const { setScaleValue, setLightValue } = RangeInputStore();

  return (
    <>
      <div className="w-full border-t border-solid border-[#333] hover:border-[#444] pt-4 pb-4">
        <Checkbox
          id="lightControl"
          title="Enable camera rotation"
          description="includes the ability to rotate the camera around a 3D object"
          onChange={() => {
            toggleCameraControl();
          }}
        />
        <Checkbox
          id="perspectiveCamera"
          title="Enable perspective camera"
          description="adds a visual representation of how the camera is facing the 3D object"
          onChange={() => {
            togglePerspectiveCameraControl();
          }}
        />
        <Checkbox
          id="stageLight"
          title="Enable lightning in stage"
          description="turns on the stage lights to illuminate the main subject"
          onChange={() => {
            toggleLight();
          }}
        />
      </div>
      <div className="w-full border-t border-solid border-[#333] hover:border-[#444] pt-6">
        <div className="flex justify-start items-center w-full">
          <p className="font-medium text-white text-xl leading-none mr-6">
            Scale
          </p>
          <RangeInput
            minValue={5}
            maxValue={100}
            StartValue={10}
            onChange={(e) => {
              setScaleValue(Number(e.target.value));
            }}
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
          />
        </div>

        <div className="flex justify-start items-center w-full">
          <p className="font-medium text-white text-xl leading-none mr-6">
            Light
          </p>
          <RangeInput
            minValue={0}
            maxValue={100}
            StartValue={15}
            onChange={(e) => {
              setLightValue(Number(e.target.value));
            }}
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
          />
        </div>
      </div>
    </>
  );
};

export default RenderControl;
