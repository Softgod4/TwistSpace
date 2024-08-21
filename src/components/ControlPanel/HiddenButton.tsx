import { FC, useEffect, useState } from "react";
import { motion } from "framer-motion";

interface HiddenButtonProps {
  isHidden: boolean;
  className: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined;
}

const variants = {
  open: { rotate: 180, x: -1 },
  closed: { rotate: 360, x: 2 },
};

const HiddenButton: FC<HiddenButtonProps> = ({
  className,
  isHidden,
  onClick,
  ...props
}) => {
  const [isHovered, setHovered] = useState(false);

  useEffect(() => {
    console.log(isHidden);
  }, [isHidden]);

  return (
    <motion.button
      className={
        "absolute right-0 top-0 bg-gray-800 border-2 border-dotted border-[#333] text-white focus:outline-none focus:ring-gray-600 font-medium rounded-lg text-sm text-center inline-flex items-center mt-2 mr-2 py-1 px-4 " +
        className
      }
      onClick={onClick}
      {...props}
      onMouseEnter={() => {
        setHovered(true);
      }}
      onMouseLeave={() => {
        setHovered(false);
      }}
      initial={false}
      whileHover={isHovered ? { scale: 1.05, borderColor: "#1f2937" } : {}}
    >
      <span className="-mb-1">Hide panel</span>
      <motion.img
        src="/hidden-arrow.svg"
        alt="arrow"
        className="w-7 h-3"
        animate={isHidden ? "closed" : "open"}
        variants={variants}
      />
    </motion.button>
  );
};

export default HiddenButton;
