import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { DEFAULT_TOY_HOVER } from "../../constants/motion";

const DraggableToy = React.memo(function DraggableToy({ resetSignal, initial, className = "", children, dragMomentum = true, motionStyle = {}, whileHover = DEFAULT_TOY_HOVER }) {
  const controls = useAnimation();

  useEffect(() => {
    controls.start({
      x: 0,
      y: 0,
      rotate: 0,
      transition: { type: "spring", stiffness: 170, damping: 18 },
    });
  }, [resetSignal, controls]);

  return (
    <motion.div
      drag
      dragMomentum={dragMomentum}
      dragElastic={0.2}
      dragTransition={{ power: 0.65, timeConstant: 520, bounceStiffness: 160, bounceDamping: 14 }}
      animate={controls}
      whileDrag={{ scale: 1.08, zIndex: 120, rotate: 2 }}
      whileHover={whileHover}
      className={`absolute cursor-grab select-none will-change-transform active:cursor-grabbing [touch-action:none] [transform:translateZ(0)] ${className}`}
      style={{ left: initial.left, top: initial.top, ...motionStyle }}
    >
      {children}
    </motion.div>
  );
});


export default DraggableToy;
