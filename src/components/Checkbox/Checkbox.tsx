import { FC } from "react";
import { motion } from "framer-motion";

interface CheckboxProps {}

const Checkbox: FC<CheckboxProps> = ({}) => {
  return (
    <motion.div className="flex">
      <div className="flex items-center h-5">
        <motion.input
          id="helper-checkbox"
          aria-describedby="helper-checkbox-text"
          type="checkbox"
          value=""
          className="w-4 h-4 text-blue-600 rounded focus:ring-blue-600 ring-offset-gray-800 focus:ring-2 bg-gray-700 dark:border-gray-600"
        />
      </div>
      <div className="ms-2 text-sm flex flex-col">
        <label
          htmlFor="helper-checkbox"
          className="font-medium text-white text-xl select-none cursor-default"
        >
          Free shipping via Flowbite
        </label>
        <label
          htmlFor="helper-checkbox"
          id="helper-checkbox-text"
          className="text-xs font-normal text-gray-400"
        >
          For orders shipped from $25 in books or $29 in other categories
        </label>
      </div>
    </motion.div>
  );
};

export default Checkbox;
