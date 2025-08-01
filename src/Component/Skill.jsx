import React from "react";
import HeadLine from "../HelperComponent/HeadLine";
import { techSkill } from "../assets";
import { motion } from "framer-motion";
import { useTheme } from "../Context/Theme";
function Skill() {
  const yAxis = 100;
  const headingVariants = {
    hidden: { opacity: 0, y: yAxis },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        bounce: 0.3,
        duration: 0.6,
        staggerChildren: 0.05,
      },
    },
  };
  const { theme } = useTheme();
  return (
    <div
      className="p-12"
      style={{
        backgroundColor: theme.bgColorSecondary,
      }}
    >
      <div className="p-5 mb-10">
        <HeadLine title={"Skill"} />
      </div>
      <div className="grid grid-cols-7 sm:grid-cols-4 md:grid-cols-5 gap-8 px-6 max-w-6xl mx-auto mb-8">
        {techSkill.map(({ title, img }, index) => (
          <motion.span
            variants={headingVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 1 }}
            style={{ display: "inline-block" }}
          >
            <motion.div
              key={index}
              className="flex flex-col items-center group cursor-pointer"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
                ease: [0.25, 0.8, 0.25, 1],
              }}
            >
              <div className="p-4 rounded-lg group-hover:bg-purple-50 transition-colors duration-300">
                <img
                  src={img}
                  alt={title}
                  className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 object-contain"
                />
              </div>
              <span
                className="text-xs sm:text-sm mt-2 text-center "
                style={{ color: theme.text }}
              >
                {title}
              </span>
            </motion.div>
          </motion.span>
        ))}
      </div>
    </div>
  );
}

export default Skill;
