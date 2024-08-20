import { FC, useEffect } from "react";
import AboutMe from "./AboutMe";
import RenderControl from "./RenderControl";
import {
  animate,
  motion,
  useMotionTemplate,
  useMotionValue,
} from "framer-motion";
import DragAndDrop from "../DragAndDrop/DragAndDrop";
interface ControlPanelProps {}

const ControlPanel: FC<ControlPanelProps> = ({}) => {
  const gradientAngles = ["0deg", "90deg", "180deg", "270deg", "360deg"];

  const angle = useMotionValue(gradientAngles[0]);
  const background = useMotionTemplate`linear-gradient(${angle}, #222 0.22%, #111111)`;

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
      className="absolute left-0 top-0 z-50 p-6 max-h-[540px] rounded-xl mt-4 ml-4 panel-gradient text-white border border-solid border-[#333] hover:border-[#444] shadow hover:shadow-md transition-all ease-in delay-75 select-none"
      style={{
        background,
      }}
      exit={{
        opacity: 0,
        filter: "blur(1px)",
        transition: { ease: "easeIn", duration: 1.2 },
      }}
      initial={{
        opacity: 0,
        filter: "blur(15px)",
      }}
      animate={{
        opacity: 1,
        filter: "blur(0px)", // Переход к нулевому размытию без отрицательных значений
        transition: { type: "spring", duration: 2 },
      }}
    >
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
