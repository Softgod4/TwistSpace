import { FC, useState } from "react";
import { motion } from "framer-motion";
import { dragLeaveHandler, dragStartHandler, onDropHandler, onFileChangeHandler } from "./fileUpload";

interface DragAndDropProps {}

const DragAndDrop: FC<DragAndDropProps> = ({}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="w-full border-2 border-dotted border-[#333] hover:border-[#444] rounded mt-4 transition-all ease-in delay-75 flex justify-center items-center relative hover:brightness-125 bg-transparent cursor-copy"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      onDragLeave={(e) => dragLeaveHandler(e)}
      onDragOver={(e) => dragStartHandler(e)}
      onDrop={(e) => onDropHandler(e)}
    >
      <motion.label
        className="flex flex-col items-center w-full h-full py-5 cursor-pointer"
        htmlFor="drag-file"
      >
        <span className="flex flex-row items-center justify-center">
          <input
            type="file"
            className="hidden"
            id="drag-file"
            accept=".glb"
            onChange={(e) => {
              onFileChangeHandler(e);
            }}
          />
          <p className="text-xl font-normal">Drag the model here</p>
          <motion.img
            src="/closedhand.svg"
            alt="closedhand"
            style={{ rotate: -30 }}
            className="absolute w-8 h-8 right-6"
            animate={
              isHovered
                ? { rotate: -20, right: 90, scale: 1.2 }
                : { rotate: -30, right: 24 }
            }
            transition={{ duration: 0.5 }}
          />
        </span>
        <p className="text-xs font-normal text-gray-400">
          or just click with the mouse (use <code>.glb</code> format)
        </p>
      </motion.label>
    </motion.div>
  );
};

export default DragAndDrop;
