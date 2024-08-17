import { motion } from "framer-motion";
import { ElementType, FC } from "react";

interface AnimateProps {
  isAnimate: boolean;
}

interface AnimateTextProps extends AnimateProps {
  text: string;
  className: string | undefined;
  as?: ElementType;
}

export const AnimateText: FC<AnimateTextProps> = (props) => {
  const { text, className, as: Component = "span" } = props;
  const textArr = text.split(" ");

  return (
    <Component className={className + " select-none cursor-default"}>
      {textArr.map((el, i) => (
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 0.30,
            delay: i / 15,
          }}
          className=""
          key={i}
        >
          {el}{" "}
        </motion.span>
      ))}
    </Component>
  );
};
