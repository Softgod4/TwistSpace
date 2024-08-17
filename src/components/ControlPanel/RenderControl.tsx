import React, { FC } from "react";
import Checkbox from "../Checkbox/Checkbox";

interface RenderControlProps {}

const RenderControl: FC<RenderControlProps> = ({}) => {
  return (
    <div className="w-full mt-8">
      <Checkbox />
    </div>
  );
};

export default RenderControl;
