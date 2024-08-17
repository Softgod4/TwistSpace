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
    <motion.div className="flex mb-5">
      <div className="flex items-center h-5">
        <motion.input
          id={props.id}
          aria-describedby="helper-checkbox-text"
          type="checkbox"
          onChange={props.onChange}
          className="w-4 h-4 text-blue-600 rounded focus:ring-blue-600 ring-offset-gray-800 focus:ring-2 bg-gray-700 dark:border-gray-600"
        />
      </div>
      <div className="ms-2 text-sm flex flex-col">
        <label
          htmlFor={props.id}
          className="font-medium text-white text-xl select-none cursor-default leading-none"
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
