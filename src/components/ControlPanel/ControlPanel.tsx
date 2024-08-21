import { FC, useEffect, useState } from "react";
import AboutMe from "./AboutMe";
import RenderControl from "./RenderControl";
import {
  animate,
  motion,
  useMotionTemplate,
  useMotionValue,
} from "framer-motion";
import DragAndDrop from "../DragAndDrop/DragAndDrop";
import HiddenButton from "./HiddenButton";

interface ControlPanelProps {}

const ControlPanel: FC<ControlPanelProps> = ({}) => {
  const gradientAngles = ["0deg", "90deg", "180deg", "270deg", "360deg"];
  const [isHidden, setHidden] = useState(false);

  const angle = useMotionValue(gradientAngles[0]);
  const background = useMotionTemplate`linear-gradient(${angle}, #222 0.22%, #111111)`;

  const variants = {
    open: { rotate: 0, x: 0 },
    closed: { rotate: 4, x: "-90%"},
  };

  useEffect(() => {
    const animation = animate(angle, gradientAngles, {
      ease: "easeInOut",
      repeat: Infinity,
      duration: 10,
      repeatType: "loop",
    });

    return () => animation.stop();
  }, [angle, gradientAngles]);

  return (
    <motion.div
      className="absolute left-0 top-0 z-50 p-6 md:max-h-[560px] sm:w-[440px] w-auto h-full rounded-xl md:mt-4 md:ml-4 mt-0 ml-0 panel-gradient text-white border border-solid border-[#333] hover:border-[#444] shadow hover:shadow-md transition-all ease-in delay-75 select-none overflow-auto"
      style={{
        background,
      }}
      animate={isHidden ? "closed" : "open"}
      variants={variants}
      transition={{duration: 0}}
    >
      <HiddenButton
        isHidden={isHidden}
        className={""}
        onClick={() => setHidden(!isHidden)}
      />
      <AboutMe
        name="Join my GitHub"
        description="FullStack Developer (Rust and TypeScript)"
      />

      <RenderControl />
      <DragAndDrop />
    </motion.div>
  );
};

export default ControlPanel;
