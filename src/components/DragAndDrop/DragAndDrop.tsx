import { FC, useState } from "react";
import { motion } from "framer-motion";
import { dragLeaveHandler, dragStartHandler } from "./fileUpload";
import { useUploadUrl } from "../../store/UploadUrl.store";

interface DragAndDropProps {}

const DragAndDrop: FC<DragAndDropProps> = ({}) => {
  const [isHovered, setIsHovered] = useState(false);
  const { updateUrl } = useUploadUrl();

  const onFileChangeHandler = (
    e: React.ChangeEvent<HTMLInputElement>
  ): void => {
    const files = e.target.files;
    if (files && files.length > 0) {
      console.log(
        `name: ${files[0].name}\nsize: ${files[0].size}\ntype: ${files[0].type}\n`
      );
      let urlObject = URL.createObjectURL(files[0]);
      updateUrl(urlObject);
    }
  };

  const onDropHandler = (e: React.DragEvent<HTMLDivElement>): void => {
    e.preventDefault();
    let files = [...e.dataTransfer.files];
    console.log(
      `name: ${files[0].name}\nsize: ${files[0].size}\ntype: ${files[0].type}`
    );
    let urlObject = URL.createObjectURL(files[0]);
    updateUrl(urlObject);
  };

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
