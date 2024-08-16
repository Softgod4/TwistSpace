import { FC } from "react";
import { AnimateText } from "../../Animation/Animation";
import { motion } from "framer-motion";
import { rotate } from "three/webgpu";

interface ControlPanelProps {}

const ControlPanel: FC<ControlPanelProps> = ({}) => {
  return (
    <div className="absolute left-0 top-0 z-50 p-6 max-h-[380px] rounded-xl mt-4 ml-4 panel-gradient text-white border border-solid border-[#333] hover:border-[#444] shadow hover:shadow-md transition-all ease-in delay-75">
      <div className="flex justify-start items-center">
        {/* <img
          src={mouseEnter ? "/github-logo.webp" : "/avatar-github.jpeg"}
          alt="avatar"
          className="w-14 h-14 rounded-full border border-solid border-white"
        /> */}
        <motion.img
          src="/avatar-github.jpeg"
          alt="avatar"
          className="w-14 h-14 rounded-full border border-solid border-white"
          whileHover={{ scale: 1.2, rotate: 4 }}
        />
        <article className="ml-2">
          <AnimateText
            text={"Softgod"}
            className={"text-2xl mb-[-2px]"}
            isAnimate={true}
            as={"h1"}
          />
          {/* <p className="text-sm">FullStack Developer (Rust and TypeScript)</p> */}
          <motion.p>FullStack Developer (Rust and TypeScript)</motion.p>
        </article>
      </div>
    </div>
  );
};

export default ControlPanel;
