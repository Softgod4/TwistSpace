import { FC } from "react";
import { motion } from "framer-motion";

interface CheckboxProps {
  id: string;
  title: string;
  description: string | undefined;
  onChange?: React.ChangeEventHandler<HTMLInputElement> | undefined;
}

const Checkbox: FC<CheckboxProps> = (props) => {
  return (
    <motion.div
      className="flex p-2 hover:bg-[#191919b9] transition-all backdrop-blur bg-transparent rounded duration-300 border border-solid border-transparent hover:border-[#f8fafc0f] shadow-none hover:shadow-2xl hover:py-3 max-h-svh"
      whileTap={{
        scale: 1.1,
        background: "#f8fafc0f",
        boxShadow: "0px 0px 24px 0px rgba(34, 60, 80, 0.3) inset",
        z: 9,
      }}
      animate={{
        background: "transparent",
        boxShadow: "none",
      }}
    >
      <div className="flex items-center h-full">
        <motion.input
          id={props.id}
          aria-describedby="helper-checkbox-text"
          type="checkbox"
          onChange={props.onChange}
          className="w-4 h-4 text-black rounded focus:ring-blue-600 ring-offset-gray-800 focus:ring-2 bg-gray-700 border-gray-600"
        />
      </div>
      <div className="ms-2 text-sm flex flex-col">
        <label
          htmlFor={props.id}
          className="font-medium text-white text-xl leading-none"
        >
          {props.title}
        </label>
        <label htmlFor={props.id} className="text-xs font-normal text-gray-400">
          {props.description}
        </label>
      </div>
    </motion.div>
  );
};

export default Checkbox;
