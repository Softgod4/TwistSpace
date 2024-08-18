import { motion } from "framer-motion";
import { FC, useState } from "react";
import { AnimateText } from "../../Animation/Animation";

interface AboutMeProps {
  name?: string;
  description: string;
}

const AboutMe: FC<AboutMeProps> = ({ description }) => {
  const [hoverImage, setHoverImage] = useState(false);

  return (
    <div className="flex justify-start items-center pb-5">
      {/* <img
          src={mouseEnter ? "/github-logo.webp" : "/avatar-github.jpeg"}
          alt="avatar"
          className="w-14 h-14 rounded-full border border-solid border-white"
        /> */}
      <a href="https://github.com/Softgod4">
        <motion.img
          src={hoverImage ? "/github-logo.webp" : "/avatar-github.jpeg"}
          alt="avatar"
          className="w-14 h-14 rounded-full border border-solid border-white"
          whileHover={{ scale: 1.2, rotate: 4, opacity: 1 }}
          transition={{ duration: 0.2 }}
          onMouseEnter={() => setHoverImage(true)}
          onMouseLeave={() => setHoverImage(false)}
        />
      </a>

      <article className="ml-2">
        <AnimateText
          text={hoverImage ? "Join my GitHub" : "Softgod"}
          className={"text-2xl mb-[-2px]"}
          isAnimate={true}
          as={"h1"}
        />
        {/* <p className="text-sm">FullStack Developer (Rust and TypeScript)</p> */}
        <motion.p className="text-sm">{description}</motion.p>
      </article>
    </div>
  );
};

export default AboutMe;
