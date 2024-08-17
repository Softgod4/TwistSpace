import { FC } from "react";
import AboutMe from "./AboutMe";
import RenderControl from "./RenderControl";

interface ControlPanelProps {}

const ControlPanel: FC<ControlPanelProps> = ({}) => {
  return (
    <div className="absolute left-0 top-0 z-50 p-6 max-h-[380px] rounded-xl mt-4 ml-4 panel-gradient text-white border border-solid border-[#333] hover:border-[#444] shadow hover:shadow-md transition-all ease-in delay-75 select-none">
      <AboutMe
        name="Join my GitHub"
        description="FullStack Developer (Rust and TypeScript)"
      />
      <RenderControl />
    </div>
  );
};

export default ControlPanel;